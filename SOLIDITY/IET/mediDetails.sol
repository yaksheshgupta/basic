// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.12;
contract IET_one{
    struct mediRec{
        string patientName;
        uint BP;
        uint heartRate;
        string bloodGroup;
        uint height;
        uint weight;
        uint age;
        string gender;
    }
    uint no_of_patient;
    mapping (uint=>mediRec) public patientDetails;
    function patientData(string memory patientName,
        uint BP,
        uint heartRate,
        string memory bloodGroup,
        uint height,
        uint weight,
        uint age,
        string memory gender) public{
            mediRec storage a=patientDetails[no_of_patient];
            a.patientName=patientName;
            a.BP=BP;
            a.heartRate=heartRate;
            a.bloodGroup=bloodGroup;
            a.height=height;
            a.weight=weight;
            a.age=age;
            a.gender=gender;
            no_of_patient++;
    }
}