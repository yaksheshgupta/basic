const ethers = require('ethers');
const url = "http://localhost:7545";

// Or if you are running the UI version, use this instead:
// const url = "http://localhost:7545"

const provider = new ethers.providers.JsonRpcProvider(url);
const abi=[
	{
		"inputs": [],
		"name": "a",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	}
]
const address="0xc74E8eD5319a18Eb55B905f0dF304BE9522C4195"
const contract=new ethers.Contract(address,abi,provider);
const main=async()=>{
    console.log(await contract.a());
}
main();