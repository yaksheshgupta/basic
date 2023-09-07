// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.6.0 <0.9.0;
// for medical website.
contract employee {
    address payable internal owner=payable(msg.sender);
    mapping (string=>uint ) internal mediName;//name--QTY
    mapping (string=>uint ) internal mediCost;//name--cost
    mapping (address=>uint) internal employe;
    modifier ownerCheck{
        require(owner==msg.sender,"Not Authorize ");
          _;
    }
    modifier checkAll{
        require(employe[msg.sender]!=0 || msg.sender==owner,"not a part of Shop");
            _;
    }
    function amountMediLeft(string calldata name) view external ownerCheck checkAll returns(string memory ,uint,uint){
        return(name,mediName[name],mediCost[name]);
    }
    function addEmployee(address payable addresOfEmployee , uint position) external ownerCheck
    {
        employe[addresOfEmployee]=position;
    }
    function deleteEmployee(address addresOfEmployee) external ownerCheck
    {
        delete employe[addresOfEmployee];
    }
    function addMedicine(string calldata name , uint amount,uint cost) external ownerCheck checkAll{
        mediName[name]=amount;
        mediCost[name]=cost;
    }
    
}
contract customer is employee {
    event transaction(address indexed _from,uint indexed amountPayed, string indexed _mediName);
    function checkMedicine(string calldata name , uint amount) view external returns(string memory,uint){
        if(mediName[name]<amount){
            return("amount left---",mediName[name]);
        }
        else{
            return("Availabe--",amount);
        }
    }
    function amountToPay(string calldata name , uint amount) external returns(uint){
        pay(name,amount);
        return(mediCost[name]*amount);
    }
    function pay(string calldata name , uint amount) public payable{
        require(msg.value==(mediCost[name]*amount));
        emit transaction(msg.sender,(mediCost[name]*amount),name);
        mediName[name]-=amount;
    }
}