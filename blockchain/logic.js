/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

/*eslint-disable no-unused-vars*/
/*eslint-disable no-undef*/

/**
 *
 * @param {com.biz.PowerTransfer} transfer
 * @transaction
 */
function onPowerTransfer(transfer) {

    console.log('onPowerTransfer');
    
    var lowLimit = 30; // Lower energy limit
    
    if (transfer.powerAmount > transfer.from.storedPower) {
        throw new Error('There is not enough energy to transfer');
    }
    
    if (lowLimit < (transfer.from.storedPower - transfer.powerAmount)) {
        throw new Error('This energy transfer would reduce the stored energy below the limit');
    }

	// set the stored power for the origin House
    transfer.from.storedPower -= transfer.powerAmount;

	// set the stored power for the destination House
    transfer.to.storedPower += transfer.powerAmount;

	// save the origin House
	return getAssetRegistry('com.biz.House')
    .then(function(ar) {
		return ar.update(transfer.from);
	})
	.then(function() {
		// save the destiny House
		return getAssetRegistry('com.biz.House')
		.then(function(br) {
			return br.update(transfer.to);
		})
	});
}

/**
 *
 * @param {com.biz.ProfileSend} send
 * @transaction
 */
function onProfileSend(send) {
	
    console.log('onProfileSend');

    if (send.from.address !== send.profile.location.address) {
        throw new Error('The owner is not allowed to manage the power profile');
    }
	
	// add the sent power profile to the Company
    send.to.profiles.push(send.profile);

     // save the animal
    return getAssetRegistry('com.biz.Company')
	.then(function(ar) {
		return ar.update(send.to);
	})
	
}

/**
 *
 * @param {com.biz.EnergyReturn} energy
 * @transaction
 */
function onReturnEnergy(energy) {
	
    console.log('onReturnEnergy');

    if (energy.powerAmount < 0) {
        throw new Error('Invalid trasnfer value');
    }
    
	// set the stored power for the origin House
    energy.from.storedPower -= energy.powerAmount;

	// set the returned power for the destination House
    energy.to.returnedPower += energy.powerAmount;

	// save the origin House
	return getAssetRegistry('com.biz.House')
    .then(function(ar) {
		return ar.update(energy.from);
	})
	.then(function() {
		// save the destiny House
		return getAssetRegistry('com.biz.Company')
		.then(function(br) {
			return br.update(energy.to);
		})
	});
	
}

/**
 *
 * @param {com.biz.CreditReturn} energy
 * @transaction
 */
function onReturnCredit(credit) {
	
    console.log('onReturnCredit');

    if (credit.powerAmount < 0) {
        throw new Error('Invalid trasnfer value');
    }
    
	// set the credit for the destination House
    credit.to.creditFromCompany += credit.creditAmount;

	// save the origin House
	return getAssetRegistry('com.biz.House')
    .then(function(ar) {
		return ar.update(credit.to);
	});
	
}

/**
 *
 * @param {com.biz.SetupDemo} setupDemo
 * @transaction
 */
function setupDemo(setupDemo) {
	
    var factory = getFactory();
    var NS = 'com.biz';

    
    var owners = [
        factory.newResource(NS, 'HomeOwner', 'OWNER_1@owner.com'),
        factory.newResource(NS, 'HomeOwner', 'OWNER_2@owner.com')
    ];
    
    var houses = [
        factory.newResource(NS, 'House','ADD_1'),
        factory.newResource(NS, 'House','ADD_2')
    ];
    
    var rooms = [
        factory.newResource(NS, 'Room','ROOM_1_1'),
        factory.newResource(NS, 'Room','ROOM_1_2'),
        factory.newResource(NS, 'Room','ROOM_1_3'),
        factory.newResource(NS, 'Room','ROOM_2_1'),
        factory.newResource(NS, 'Room','ROOM_2_2'),
        factory.newResource(NS, 'Room','ROOM_2_3')
    ];

	var profiles = [
        factory.newResource(NS, 'PowerProfile', 'PROF_1'),
        factory.newResource(NS, 'PowerProfile', 'PROF_2'),
    ];

    var supervisors = [
        factory.newResource(NS, 'CompanySupervisor', 'SUPERVISOR_1@supervisor.com')
    ];
    
    var companies = [
        factory.newResource(NS, 'Company', 'ADDC_1')
    ];
    
    return getAssetRegistry(NS + '.House')
	.then(function(houseRegistry){		
		houses.forEach(function(house){
			
			var id = house.getIdentifier().split('_')[1];
			
			house.address = house.getIdentifier();
			house.postcode = id + id + id + id + id;
			house.storedPower = id == 1 ? 100 : 0;
			house.creditFromCompany = 0;
		
		})
		return houseRegistry.addAll(houses);
	})
	.then(function(){
		return getParticipantRegistry(NS + '.HomeOwner')
	})
	.then(function(ownerRegistry) {
		owners.forEach(function(owner){
		
			var id = owner.getIdentifier().split('_')[1].split('@')[0];
		
			owner.email = owner.getIdentifier();
			owner.firstName = "Owner";
			owner.lastName = id;
			owner.home = factory.newResource(NS, 'House', 'ADD_'+id);
			
		})
		return ownerRegistry.addAll(owners);
	})
	.then(function(){
		return getAssetRegistry(NS + '.Room');
	})
	.then(function(roomRegistry){		
		rooms.forEach(function(room){
			
			var id = room.getIdentifier().split('_')[1];
			
			room.roomId = room.getIdentifier();
			room.periodConsumption = 0;
			room.location = factory.newResource(NS, 'House', 'ADD_'+id);
		
		})
		return roomRegistry.addAll(rooms);
	})
	.then(function(){
		return getAssetRegistry(NS + '.PowerProfile');
	})
	.then(function(profileRegistry){		
		profiles.forEach(function(profile){
			
			var id = profile.getIdentifier().split('_')[1];
			
			profile.idProfile = profile.getIdentifier();
			profile.dbKey = id == 1 ? 'HOUSE_1_PROF' : 'HOUSE_2_PROF';
			profile.period = "11-2017";
			profile.location = id == 1 ? factory.newResource(NS, 'House', 'ADD_'+id) : factory.newResource(NS, 'House', 'ADD_'+id);
		
		})
		return profileRegistry.addAll(profiles);
	})
	.then(function(){
		return getAssetRegistry(NS + '.Company');
	})
	.then(function(companyRegistry){		
		companies.forEach(function(company){
			
			var id = company.getIdentifier().split('_')[1];
			
			company.address = company.getIdentifier();
			company.postcode = "Supervisor";
			company.returnedPower = 0;
			company.supervisor = factory.newResource(NS, 'CompanySupervisor', 'SUPERVISOR_1@supervisor.com');
			company.houses = [factory.newResource(NS, 'House', 'ADD_1'), factory.newResource(NS, 'House', 'ADD_2')];
			company.profiles = [];
			
		})
		return companyRegistry.addAll(companies);
	})
	.then(function(){
		return getParticipantRegistry(NS + '.CompanySupervisor');
	})
	.then(function(supervisorRegistry){		
		supervisors.forEach(function(supervisor){
			
			var id = supervisor.getIdentifier().split('_')[1].split('@')[0];
			
			supervisor.email = supervisor.getIdentifier();
			supervisor.firstName = 'Supervisor';
			supervisor.lastName = id;
			supervisor.provider = factory.newResource(NS, 'Company', 'ADDC_'+id)
		
		})
		return supervisorRegistry.addAll(supervisors);
	});
    
}

/*eslint-enable no-unused-vars*/
/*eslint-enable no-undef*/
