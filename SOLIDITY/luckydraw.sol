// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.12;
// type of luckydraw
// with each consistant has to put at least 1eth
contract pay{
    address public manager;
    address payable[] public players;
    constructor(){
        manager=msg.sender;
    }
    receive() external payable{
        require(msg.value== 1 ether);
        players.push(payable(msg.sender));
    }
    function getBalance() public view returns(uint){
        return address(this).balance;
    }
    function random() public view returns (uint){
        return uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp, players)));
    }
    function winners() public returns (string memory,address){
        address payable winner;
        uint qq=random();
        uint value = qq % players.length;
        winner = players[value];
        winner.transfer(getBalance());
        return ("yay u won---",winner);
    }
}
