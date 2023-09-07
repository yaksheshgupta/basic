// SPDX-License-Identifier: UNLICENSED
pragma solidity^0.8.12;
// paymentgateway using diffrent contract
contract pay{
    function driverBalance() public view returns(uint) {
        return address(this).balance;
    }
    receive() external payable{
    }
    function reTurn(address payable h1) payable public{
        h1.transfer(address(this).balance);
    }

}