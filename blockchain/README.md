# WAT power profiling network

> This is a Power profiling Business Network created for the project WAT in the hackaton Unchain the Frame. HomeOwners harvest power from local smartgrids, this power could be trasnfered to other Houses in a network, something like energy transactions. Additionally, smart power consumption profiles are created for each House, those PowerProfiles are sent to CompanySupervisors in order to improve the Company efficiency in delivering energy to Houses.

This business network defines:

**Participants**
`HomeOwner` `CompanySupervisor`

**Assets**
`House` `Company` `PowerProfile` `Room`

**Transactions**
`PowerTransfer` `MonthlyPowerAssignment` `ProfileSend`

The PowerProfiles contain a key that provides access to more detailed info about the energy consumption in a House, only the CompanySupervisor and the HomeOwner could access this info.
