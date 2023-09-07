// to pay the contract
const Web3=require('web3')
const web3= new Web3('HTTP://127.0.0.1:7545') 
const account1='0x86b0A9066D66A63E5F107739eb3DAfC730B5F13d'
const account2='0xe63B62405e540A2267B4666474Be30991E8A2c46' 
const privateKey_acc1=Buffer.from('cfa8edccf20414fdebbf03c2ecef00e1ba0fd84997913b651979c0bae0dc02ae','hex')
web3.eth.getTransactionCount(account1,(err,txCount)=>{
    // build the transction
    const obej={
        nonce:web3.utils.toHex(txCount),
        gasLimit:web3.utils.toHex(500001),
        gasPrice:web3.utils.toHex(500000),
        to:account2,
        value:web3.utils.toHex(web3.utils.toWei('10','ether'))
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