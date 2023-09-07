// SPDX-License-Identifier: UNLICENSED
pragma solidity^0.8.12;
// paymentgateway using diffrent contract
contract hello{
    function transac() public view returns(uint) {
        return address(this).balance;
    }
    receive() external payable{

    }
    function give(address payable h1) payable public{
        h1.transfer(address(this).balance);
    }

}