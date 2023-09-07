var Tx= require('ethereumjs-tx').Transaction
const Web3=require('web3')
const web3= new Web3('HTTP://127.0.0.1:7545') 
const contractABI=[
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
				"name": "s",
				"type": "tuple"
			}
		],
		"name": "record",
		"type": "event"
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
	}
]
const contractAddress='0x50EF353d96813b820343f24FB229B44080442097'
const contra=new web3.eth.Contract(contractABI,contractAddress)
// console.log(contra);
let d="0xa292280c6Aa39445ac494B80bfA65dF91d637186"
let sd="0xCf1695EA0008DC1D4bE19acABe0ab2C8088C4795"
const objj=[d,sd,'hello','this is my first try','https/uigjre.com/',2000]
// contra.methods.check("0xCf1695EA0008DC1D4bE19acABe0ab2C8088C4795").call((err,res)=>{
//     console.log(res,err);
// })
contra.methods.transfer(objj).send({from:'0x86b0A9066D66A63E5F107739eb3DAfC730B5F13d'})