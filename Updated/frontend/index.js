import Web3 from "web3";
import Certificate from "./Certificate.json";

// Initialize Web3 with MetaMask provider
let web3;
if (window.ethereum) {
  web3 = new Web3(window.ethereum);
  try {
    // Request account access
    window.ethereum.request({ method: "eth_requestAccounts" });
  } catch (error) {
    console.error("🛑 User denied MetaMask access");
  }
} else {
  alert("⚠ Please install MetaMask!");
  web3 = new Web3("http://localhost:8545"); // fallback
}



// Paste your deployed contract address from Truffle migrate output
const contractAddress = "0x5E2BDB86922199d832303E2C443254F922BF00eb";

const contract = new web3.eth.Contract(Certificate.abi, contractAddress);

export { web3, contract };