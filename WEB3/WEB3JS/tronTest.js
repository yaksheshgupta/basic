const TronWeb=require('tronweb')

const tronWeb = new TronWeb({
    fullHost: 'https://api.shasta.trongrid.io',
    privateKey:'51a82bc2b8e04bc42389f49adf96d6641c44478b45228f5cade75cef3191c183'
  }
)
let privateKey='51a82bc2b8e04bc42389f49adf96d6641c44478b45228f5cade75cef3191c183'
const account1='TAw9gtbuoxfpoMD9iTvXcryU7GbF5PccjS'
tronWeb.trx.getBalance(account1, (error, userBalance) => {
    if(error)
        return console.error(error);
  
    console.log(`User's balance is: ${ userBalance }`);
});
tronWeb.trx.getBlockTransactionCount(12345).then(res=>{
  console.log(res);
})
// const obj={ 
//   // nonce:tronbox.toHex(count),3
//   // gasLimit:tronWeb.toHex(6721975),
//   // gasPrice:tronWeb.toHex(20000000000),
//   // to:account2,
//   tronWeb.toHex("hello")
// }
async function f(){
  const obj="hello nihal";
  const obj1=tronWeb.toHex(obj)
  const signedtxn = await tronWeb.trx.sign(obj1,privateKey);
  return (signedtxn);
}
console.log(f());
// tronWeb.trx.sendRawTransaction(signedtxn,(err,res)=>{
//   console.log(err,res);
// })