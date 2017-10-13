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
    
    if (transfer.powerAmount > transfer.from.storedPower) {
        throw new Error('There is not enough energy to transfer');
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
 * @param {com.biz.MonthlyPowerAssignment} assignment
 * @transaction
 */
function onMonthlyPowerAssignment(assignment) {
	
    console.log('onMonthlyPowerAssignment');

    if (assignment.powerAmount > assignment.from.availablePower) {
        throw new Error('There is not enough energy to transfer');
    }
	
	// set the stored power for the Company
    assignment.from.availablePower -= assignment.powerAmount;

	// set the stored power for the destination House
    assignment.to.availablePower += assignment.powerAmount;

     // save the animal
    return getAssetRegistry('com.biz.Company')
	.then(function(ar) {
		return ar.update(assignment.from);
	})
	.then(function() {
		// save the destiny House
		return getAssetRegistry('com.biz.House')
		.then(function(br) {
			return br.update(assignment.to);
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
 * @param {com.biz.SetupDemo} setupDemo
 * @transaction
 */
function setupDemo(setupDemo) {
	
    var factory = getFactory();
    var NS = 'com.biz';

    var owners = [
        factory.newResource(NS, 'HomeOwner', 'OWNER_1'),
        factory.newResource(NS, 'HomeOwner', 'OWNER_2'),
        factory.newResource(NS, 'HomeOwner', 'OWNER_3'),
        factory.newResource(NS, 'HomeOwner', 'OWNER_4'),
        factory.newResource(NS, 'HomeOwner', 'OWNER_5'),
        factory.newResource(NS, 'HomeOwner', 'OWNER_6')
    ];

    var supervisors = [
        factory.newResource(NS, 'CompanySupervisor', 'SUPERVISOR_1'),
        factory.newResource(NS, 'CompanySupervisor', 'SUPERVISOR_2')
    ];
    
    var companies = [
        factory.newResource(NS, 'Company', 'COMPANY_1'),
        factory.newResource(NS, 'Company', 'COMPANY_2')
    ];

    var houses = [
        factory.newResource(NS, 'House','HOUSE_1'),
        factory.newResource(NS, 'House','HOUSE_2'),
        factory.newResource(NS, 'House','HOUSE_3'),
        factory.newResource(NS, 'House','HOUSE_4'),
        factory.newResource(NS, 'House','HOUSE_5'),
        factory.newResource(NS, 'House','HOUSE_6'),
    ];

}

/*eslint-enable no-unused-vars*/
/*eslint-enable no-undef*/

