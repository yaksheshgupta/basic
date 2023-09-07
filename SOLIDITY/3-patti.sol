// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.12;
contract cards{
    string[] faces=["A--CLUB","A--SPADE","A--HEART","A--DIMOND","K--CLUB","K--SPADE","K--HEART","K--DIMOND","Q--CLUB","Q--SPADE","Q--HEART","Q--DIMOND","J--CLUB","J--SPADE","J--HEART","J--DIMOND"
    ,"10--CLUB","10--SPADE","10--HEART","10--DIMOND","9--CLUB","9--SPADE","9--HEART","9--DIMOND","8--CLUB","8--SPADE","8--HEART","8--DIMOND","7--CLUB","7--SPADE","7--HEART","7--DIMOND",
    "6--CLUB","6--SPADE","6--HEART","6--DIMOND","5--CLUB","5--SPADE","5--HEART","5--DIMOND","4--CLUB","4--SPADE","4--HEART","4--DIMOND","3--CLUB","3--SPADE","3--HEART","3--DIMOND"
    ,"2--CLUB","2--SPADE","2--HEART","2--DIMOND"];
    mapping(uint=>uint)  check;

    string[] public p1;
    string[] public p2;
    string[] public p3;
    string[] public p4;
    function distributeCards() public returns(uint index) {
        uint qq;
        for(uint i=0;qq!=12;i++){
            index =uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp+i)))%50;
            // 
            if(check[index]==0){
                if(qq<=2){
                    p1.push(faces[index]);
                    qq++;
                }
                else if(qq>=3 && qq<=5){
                    p2.push(faces[index]);
                    qq++;
                    }
                else if(qq>=6 && qq<=8){
                    p3.push(faces[index]);
                    qq++;
                }
                else if(qq>=9 && qq<=11){
                    p4.push(faces[index]);
                    qq++;
                }
                check[index]=1;
                
            }
        }

    }
}
contract owneR is cards {
    address owner =msg.sender;
    struct players{
        address playerAddress;
        uint playerMoney;
    }
    mapping (uint=> players) public currentPlayers;
    modifier ownerCheck{
        require (msg.sender==owner,"not Athroised");
            _;
    }
    uint a;
    uint chaalF;
    function chaal() public payable {
        for (uint i=0;i<4;i++){
            players storage store= currentPlayers[i];
            if (store.playerAddress==msg.sender){
                require (store.playerMoney>=msg.value,"not enough balance");
                require (msg.value>=chaalF,"chaal is of greater value");
                chaalF=msg.value;
            }
        }
    }
    function addPlayer(address addres) public payable ownerCheck{
        require (a<=4,"extra player");
        players storage store= currentPlayers[a];
        store.playerAddress=payable(addres);
        store.playerMoney=msg.value;
        a++;
    }
    function newgame() public ownerCheck{
        delete currentPlayers[0];
        delete currentPlayers[1];
        delete currentPlayers[3];
        delete currentPlayers[4];
        delete p1;
        delete p2;
        delete p3;
        delete p4;
        a=0;
    }
}
// remaining combination cannot be done through solidity -- too complex to run on EVM