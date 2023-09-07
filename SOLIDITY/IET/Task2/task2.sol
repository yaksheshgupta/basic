// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.12;
contract basicWallet{
    // this contract is for learning payable using web3js
    mapping (address=> uint)  public wallet;
    function fillWallet()payable public{
        wallet[msg.sender]=msg.value;
    }
    function checkBalance() public view returns(uint) {
        return address(this).balance;
    }
    receive() external payable{
    }
}
// contract to get the NFT details from web3js and put it on the blockchain
contract main is basicWallet{
    // this is for learning event using web3js
    struct  data{
        address from;
        address to;
        string title;
        string discription;
        string image_add;
        uint amount;
    }
    // event to store the data of all user
    event record(data);
    // this mapping is just for checking who own what coz event data cannot be accessed like this
    mapping (address=>string) public check;
    function first_owner(data memory dd) public {
        check[dd.to]=dd.image_add;
        emit record(dd);
    }
    function transfer(data memory dd) public {
        check[dd.to]=dd.image_add;
        emit record(dd);
    }
}
