import { ethers, Signature } from "https://cdnjs.cloudflare.com/ajax/libs/ethers/6.9.0/ethers.min.js";
import { abi } from "./abi";

document.getElementById("connect-button").addEventListener("click", async () => {
    console.log("watafak");

    if (typeof window.ethereum !== 'undefined') {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log("Connected to MetaMask");
        } catch (error) {
            console.error("Error connecting to MetaMask:", error);
        }
    } else {
        console.error("MetaMask extension not detected");
    }

    const contractAddress = "0x644f32A5a0aBb5f4d62D3773cdd560fD2f2D39dE";

    const provider = new ethers.BrowserProvider(window.ethereum);
    // const signer = await provider.getSigner();

    const contract = ethers.Contract(contractAddress, abi, provider);

    const priceNative = await contract.i_tokensPriceInUsdt();

    document.getElementById("token-price").setAttribute("text", ethers.formatUtils(priceNative, 6));
});
