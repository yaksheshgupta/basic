const ethers = require('ethers');
const url = "HTTP://127.0.0.1:7545";
const provider = new ethers.providers.JsonRpcProvider(url);
let privateKey = 'ed1af3c3b96a5372042dcfa87d287af10fbd95a977457fb913556634ef7fe167';
let wallet = new ethers.Wallet(privateKey, provider);
const address1 = "0xe6A21000D36a5dCe2826C1cA9209F045503e16Bb"
const address2 = "0xD9DB57A3736Bd195167E1ea29CB02B3345C4703a"
const main = async () => {
    const tx = await wallet.sendTransaction({ to: address2, value: ethers.utils.parseEther("1") })
    await tx.wait();
    console.log(tx);

}
main()