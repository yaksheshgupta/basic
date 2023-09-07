const Web3=require('web3')
const web3= new Web3('HTTP://127.0.0.1:7545') 
const contractABI=[
	{
		"inputs": [],
		"name": "fillWallet",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "from",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "to",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "discription",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "image_add",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					}
				],
				"internalType": "struct main.data",
				"name": "dd",
				"type": "tuple"
			}
		],
		"name": "first_owner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "from",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "to",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "discription",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "image_add",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					}
				],
				"indexed": false,
				"internalType": "struct main.data",
				"name": "",
				"type": "tuple"
			}
		],
		"name": "record",
		"type": "event"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "from",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "to",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "discription",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "image_add",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					}
				],
				"internalType": "struct main.data",
				"name": "dd",
				"type": "tuple"
			}
		],
		"name": "transfer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "check",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "checkBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "wallet",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
const contractAddress='0xe63B62405e540A2267B4666474Be30991E8A2c46'
const contra=new web3.eth.Contract(contractABI,contractAddress)
// console.log(contra); 
let d="0xa292280c6Aa39445ac494B80bfA65dF91d637186"
let sd="0xCf1695EA0008DC1D4bE19acABe0ab2C8088C4795"
// obj to pass in event
const objj=[d,sd,'hello','this is my firsfn try','https/ureigjre.com/',32000]
// check
contra.methods.check("0xCf1695EA0008DC1D4bE19acABe0ab2C8088C4795").call((err,res)=>{
    console.log(res,err);
})
// to emit an event
contra.methods.first_owner(objj).send({from:'0x86b0A9066D66A63E5F107739eb3DAfC730B5F13d'})
// to read event
contra.getPastEvents('AllEvents',{fromBlock:0},(err,res)=>{
	console.log(err,res.length);
})
// to check contract address
contra.methods.checkBalance().call((err,res)=>{
    console.log(res,err);
})