// SPDX-License-Identifier: UNLICENSED
pragma solidity^0.8.12;
contract Head{
    address head=msg.sender;
    modifier checkHead(){
        require(msg.sender==head,"not aukat");
        _;
    }
}
contract voting is Head{
    mapping (address=>bool) voters;
    uint party1Voters;
    uint party2Voters;
    modifier checkrep(){
        require (voters[msg.sender]!=true,"u have already voted");
            _;
        
    }
    function voteParty1() external checkrep{
        voters[msg.sender]=true;
        party1Voters++;
    }
    function voteParty2() external checkrep{
        voters[msg.sender]=true;
        party2Voters++;
    }
    function totalParty1Vote() public view checkHead returns(uint){
        return party1Voters;
    }
    function totalParty2Vote() public view checkHead returns(uint){
        return party2Voters;
    }
    function winner() public checkHead view returns(string memory){
        if (party1Voters>party2Voters){
            return("Party1 Winner");
        }
        else if(party1Voters==party2Voters){
            return("Draw");
        }
        else{
            return("Party2 Winner");
        }
    }
}