// to pay the contract
const Web3=require('web3')
var Tx= require('ethereumjs-tx').Transaction
const web3= new Web3('HTTP://127.0.0.1:7545') 
const account1='0xf5cC334A7FC8Ece6fe31C686A362db544cf38D2B'
const account2='0xdE34402d1d8F0Ff8E4B235045bf530De38A4C862' 
const privateKey_acc1=Buffer.from('8a827455d322bf261637806f25e4f0b6a58c8212ad42c03de7f7a4299aebb7fa','hex')
web3.eth.getTransactionCount(account1,(err,txCount)=>{
    // build the transction
    const obej={
        nonce:web3.utils.toHex(txCount),
        gasLimit:web3.utils.toHex(500001),
        gasPrice:web3.utils.toHex(500000),
        to:account2,
        value:web3.utils.toHex(web3.utils.toWei('1','ether'))
    }
    // sign 
    const tx= new Tx(obej) 
    tx.sign(privateKey_acc1)
    const serialtrans=tx.serialize()
    const raw='0x'+serialtrans.toString('hex')
    // broadcast transaction
    web3.eth.sendSignedTransaction(raw,(err,txHash)=>{
        console.log('hash',txHash,'err',err);
    })
})
