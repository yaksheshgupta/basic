// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.12;
import "./paygate.sol";
// assuming somerides 
// 1st driver details
// 2nd book
// 3rd distance
// 4th charge according to distance
// 5rd payment
// 6th rating 

contract driver{
    uint totalDriver;
    struct  driverDetails {
        string  driverName;
        string numPlate;
    }
    string[] preName=["Yakshesh Gupta","Hello Gupta","Chacha Gupta"];
    string[] prePlate=["UP78 xyz 1234","UP78 abc 5678","UP78 asd 8901"];
    mapping(uint=>driverDetails[]) public dInfo;
    // adding default drivers
    constructor(){
        for(uint i=0;i<(prePlate.length);i++){
            driverDetails memory a= driverDetails({
                driverName:preName[i],
                numPlate:prePlate[i]
            });
            dInfo[totalDriver].push(a); 
            totalDriver++;
        }
    }
    function addDriver(string memory name,string memory nplate) public  {
        driverDetails memory a= driverDetails({
            driverName:name,
            numPlate:nplate
        });
        dInfo[totalDriver].push(a);
        totalDriver++;
    }
}


contract bookRide is driver,pay{
    uint public currentPasengers;
    modifier checkAvailibility(){
        require(currentPasengers<=totalDriver,"no ride available");
        _;
    }
    function tentativePrice(uint distance) public pure returns(uint price){
        // charging 25rs for 5km
        // after 5km 20rs
        if(distance<=5){
        price=(25*distance);
        }
        else{
            price=125+((distance-5)*20);
        }
    }
    function book(uint dis) public  checkAvailibility returns(string memory,uint){
        uint a= tentativePrice(dis);
        currentPasengers++;
        return("ur cab is on the way..... amount to pay--",a);
    }
    
 
}