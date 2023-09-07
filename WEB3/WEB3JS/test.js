const Web3=require('web3')
const web3= new Web3('HTTP://127.0.0.1:7545')
const str=()=>{
    console.log(web3.utils.toWei("10", 'ether'));
    console.log(typeof(web3.utils.toWei("10", 'ether')));
}
const int=()=>{
    console.log(web3.utils.toWei(10, 'ether'));
    console.log(typeof(web3.utils.toWei(10, 'ether')));
}
str()
int()
