import { ethers, Signature } from "https://cdnjs.cloudflare.com/ajax/libs/ethers/6.9.0/ethers.min.js";
// import { abi } from "./abi";
export const abi = [{ "inputs": [{ "internalType": "address", "name": "_usdt", "type": "address" }, { "internalType": "address", "name": "_priceFeed", "type": "address" }, { "internalType": "uint256", "name": "_tokensPriceInUsdt", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [{ "internalType": "address", "name": "target", "type": "address" }], "name": "AddressEmptyCode", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "AddressInsufficientBalance", "type": "error" }, { "inputs": [], "name": "EnforcedPause", "type": "error" }, { "inputs": [], "name": "ExpectedPause", "type": "error" }, { "inputs": [], "name": "FailedInnerCall", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "OwnableInvalidOwner", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "OwnableUnauthorizedAccount", "type": "error" }, { "inputs": [], "name": "ReentrancyGuardReentrantCall", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }], "name": "SafeERC20FailedOperation", "type": "error" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Paused", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Unpaused", "type": "event" }, { "inputs": [], "name": "buyTokensNative", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "buyTokensUSDT", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "buyers", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "i_tokensPriceInUsdt", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "s_investemetByAddress", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "s_native_usd_priceFeed", "outputs": [{ "internalType": "contract AggregatorV3Interface", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "s_tokenSold", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "s_usdt", "outputs": [{ "internalType": "contract ERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "unpause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "withdrawNative", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "withdrawUSDT", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];

const erc20abi = [{ "inputs": [{ "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "symbol", "type": "string" }, { "internalType": "uint8", "name": "decimals", "type": "uint8" }, { "internalType": "address", "name": "owner", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "DOMAIN_SEPARATOR", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "EIP712_REVISION", "outputs": [{ "internalType": "bytes", "name": "", "type": "bytes" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "PERMIT_TYPEHASH", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "mint", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "mint", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "nonces", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]

// здесь адрес контракта
const contractAddress = "0x644f32A5a0aBb5f4d62D3773cdd560fD2f2D39dE";

// здесь адрес usdt в сети в которой контракт задеплоен
const usdtAddress = "0xaA8E23Fb1079EA71e0a56F48a2aA51851D8433D0"

// здесб decimals usdt 
const usdtDecimals = 6;

document.getElementById("connect-button").addEventListener("click", async () => {

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

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    const contract = new ethers.Contract(contractAddress, abi, provider);

    const priceNative = await contract.i_tokensPriceInUsdt();

    console.log(ethers.formatUnits(priceNative, usdtDecimals))

    document.getElementById("token-price").innerText = ethers.formatUnits(priceNative, usdtDecimals);


    const userTokensAmountNative = await contract.s_investemetByAddress(signer.address);
    const userTokensAmount = ethers.formatEther(userTokensAmountNative);
    document.getElementById("balance").innerText = userTokensAmount;

    document.getElementById("connected").innerText = `Connected as ${signer.address}`;

    const balanceNative = await provider.getBalance(contractAddress);
    const balance = ethers.formatEther(balanceNative);
    document.getElementById("total-native").innerText = `Total ETH balance ${balance}`;

    const usdt = new ethers.Contract(usdtAddress, erc20abi, signer);
    const usdtBalanceNative = await usdt.balanceOf(contractAddress);
    const usdtBalance = ethers.formatUnits(usdtBalanceNative, usdtDecimals);
    document.getElementById("total-usdt").innerHTML = `Total USDT balance ${usdtBalance};`
});


document.getElementById("buy-with-native").addEventListener("click", async () => {
    const element = document.getElementById("buy-with-native-input");

    const amountText = element.value;
    console.log("amount");
    console.log(element);
    console.log(amountText);

    const amount = ethers.parseEther(amountText);

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    const contract = new ethers.Contract(contractAddress, abi, signer);

    const paused = await contract.paused();
    if (paused) {
        alert("token presale is PAUSED!!!")
        return;
    }

    console.log("calling buy method");

    const tx = await contract.buyTokensNative({ value: amount });

    document.getElementById("working-panel").disabled = true;
    await tx.wait();
    document.getElementById("working-panel").disabled = false;

    alert("bought")

    console.log("called");

    const userTokensAmountNative = await contract.s_investemetByAddress(signer.address);
    const userTokensAmount = ethers.formatEther(userTokensAmountNative);
    document.getElementById("balance").innerText = userTokensAmount;
});


document.getElementById("buy-with-usdt").addEventListener("click", async () => {
    const element = document.getElementById("buy-with-usdt-input");

    const amountText = element.value;
    console.log("amount");
    console.log(element);
    console.log(amountText);

    const amount = ethers.parseUnits(amountText, usdtDecimals);

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    const contract = new ethers.Contract(contractAddress, abi, signer);

    console.log("calling buy method");

    const usdt = new ethers.Contract(usdtAddress, erc20abi, signer);

    const paused = await contract.paused();
    if (paused) {
        alert("token presale is PAUSED!!!")
        return;
    }

    const allowance = await usdt.allowance(signer.address, contractAddress);

    console.log(allowance, amount);

    if (allowance < amount) {
        const approveTx = await usdt.approve(contractAddress, amount);
        document.getElementById("working-panel").disabled = true;
        await approveTx.wait();
        document.getElementById("working-panel").disabled = false;
    }

    const tx = await contract.buyTokensUSDT(amount);
    document.getElementById("working-panel").disabled = true;
    await tx.wait();
    document.getElementById("working-panel").disabled = false;

    alert("bought")

    console.log("called");

    const userTokensAmountNative = await contract.s_investemetByAddress(signer.address);
    const userTokensAmount = ethers.formatEther(userTokensAmountNative);
    document.getElementById("balance").innerText = userTokensAmount;
});

document.getElementById("pause").addEventListener("click", async () => {

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    const contract = new ethers.Contract(contractAddress, abi, signer);

    const tx = await contract.pause();
    document.getElementById("working-panel").disabled = true;
    await tx.wait();
    document.getElementById("working-panel").disabled = false;

    alert("contract paused!")
});

document.getElementById("unpause").addEventListener("click", async () => {

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    const contract = new ethers.Contract(contractAddress, abi, signer);

    const tx = await contract.unpause();
    document.getElementById("working-panel").disabled = true;
    await tx.wait();
    document.getElementById("working-panel").disabled = false;

    alert("contract unpaused!")
});

document.getElementById("withdraw-native").addEventListener("click", async () => {

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    const contract = new ethers.Contract(contractAddress, abi, signer);

    const all = document.getElementById("native-all").checked

    if (all) {
        const balance = await provider.getBalance(contract);

        const tx = await contract.withdrawNative(balance);

        document.getElementById("working-panel").disabled = true;
        await tx.wait();
        document.getElementById("working-panel").disabled = false;
    } else {
        const amountStr = document.getElementById("native-amount").value;

        const amount = ethers.parseEther(amountStr);

        const tx = await contract.withdrawNative(amount);

        document.getElementById("working-panel").disabled = true;
        await tx.wait();
        document.getElementById("working-panel").disabled = false;
    }

    alert("native currency witdrawed");


    const balanceNative = await provider.getBalance(contractAddress);
    const balance = ethers.formatEther(balanceNative);
    document.getElementById("total-native").innerText = `Total ETH balance ${balance}`;
});

document.getElementById("withdraw-usdt").addEventListener("click", async () => {

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    const contract = new ethers.Contract(contractAddress, abi, signer);

    const all = document.getElementById("usdt-all").checked

    if (all) {
        const usdt = new ethers.Contract(usdtAddress, erc20abi, signer);

        const balance = await usdt.balanceOf(contractAddress);

        const tx = await contract.withdrawUSDT(balance);

        document.getElementById("working-panel").disabled = true;
        await tx.wait();
        document.getElementById("working-panel").disabled = false;
    } else {
        const amountStr = document.getElementById("usdt-amount").value;

        const amount = ethers.parseUnits(amountStr, usdtDecimals);

        const tx = await contract.withdrawUSDT(amount);

        document.getElementById("working-panel").disabled = true;
        await tx.wait();
        document.getElementById("working-panel").disabled = false;
    }

    alert("usdt witdrawed");

    const usdt = new ethers.Contract(usdtAddress, erc20abi, signer);
    const usdtBalanceNative = await usdt.balanceOf(contractAddress);
    const usdtBalance = ethers.formatUnits(usdtBalanceNative, usdtDecimals);
    document.getElementById("total-usdt").innerHTML = `Total USDT balance ${usdtBalance};`
});