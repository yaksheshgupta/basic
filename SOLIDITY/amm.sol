// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.12;
// create AMM(automated market maker)
contract func{
    uint eth=500000;//amount of eth in pool(let)
    uint btc=500000;//amount of btc in pool(let)
    uint ethPrice=1 ether;
    uint btcPrice=2 ether;
    uint totalLiquidity=250000000000;
    uint ethNum=1;
    uint btcNum=1;
    mapping(uint=>address) public investersEth;
    mapping(uint=>address) public investersBtc;
}
contract ammm is func{
    function ethCost(uint a) payable public returns(uint){
        uint uget;
        investersEth[ethNum]=msg.sender;
        ethNum++;
        eth+=a;
        btcPrice+=(a*0.0000005 ether);
        ethPrice-=(a*0.0000005 ether);
        uget=btc-totalLiquidity/eth;
        btc-=uget;
        return(uget);
    }
    function btcCost(uint a) payable public returns(uint){
       uint uget;
       investersBtc[btcNum]=msg.sender;
       btcNum++;
       btc+=a;
       ethPrice+=(a*0.0000005 ether);
       btcPrice-=(a*0.0000005 ether);
       uget=eth-totalLiquidity/btc;
       eth-=uget;
       return(uget);
    }
    function qty() public view returns(uint ,uint){
        return (eth,btc);
    }   
    function price() public view returns(uint, uint ){
        return (ethPrice,btcPrice);
    } 
}
