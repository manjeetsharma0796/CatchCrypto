
const Token = {
    "_format": "hh-sol-artifact-1",
    "contractName": "CatchToken",
    "sourceName": "contracts/CatchToken.sol",
    "abi": [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "allowance",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "needed",
                    "type": "uint256"
                }
            ],
            "name": "ERC20InsufficientAllowance",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "balance",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "needed",
                    "type": "uint256"
                }
            ],
            "name": "ERC20InsufficientBalance",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "approver",
                    "type": "address"
                }
            ],
            "name": "ERC20InvalidApprover",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                }
            ],
            "name": "ERC20InvalidReceiver",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                }
            ],
            "name": "ERC20InvalidSender",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                }
            ],
            "name": "ERC20InvalidSpender",
            "type": "error"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                }
            ],
            "name": "allowance",
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
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
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
            "inputs": [],
            "name": "decimals",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
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
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "donate",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "mint",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "name",
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
            "name": "symbol",
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
            "name": "totalSupply",
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
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
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
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    "bytecode": "0x608060405234801561001057600080fd5b506040518060400160405280600a8152602001692337b7b23caa37b5b2b760b11b81525060405180604001604052806005815260200164464f4f445960d81b81525081600390816100619190610117565b50600461006e8282610117565b5050506101d6565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806100a057607f821691505b6020821081036100c057634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115610112576000816000526020600020601f850160051c810160208610156100ef5750805b601f850160051c820191505b8181101561010e578281556001016100fb565b5050505b505050565b81516001600160401b0381111561013057610130610076565b6101448161013e845461008c565b846100c6565b602080601f83116001811461017957600084156101615750858301515b600019600386901b1c1916600185901b17855561010e565b600085815260208120601f198616915b828110156101a857888601518255948401946001909101908401610189565b50858210156101c65787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b610836806101e56000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c8063386bc05a11610071578063386bc05a1461012357806340c10f191461013657806370a082311461014b57806395d89b4114610174578063a9059cbb1461017c578063dd62ed3e1461018f57600080fd5b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100ef57806323b872dd14610101578063313ce56714610114575b600080fd5b6100b66101c8565b6040516100c3919061067f565b60405180910390f35b6100df6100da3660046106ea565b61025a565b60405190151581526020016100c3565b6002545b6040519081526020016100c3565b6100df61010f366004610714565b610274565b604051601281526020016100c3565b6100df610131366004610714565b610298565b6101496101443660046106ea565b610328565b005b6100f3610159366004610750565b6001600160a01b031660009081526020819052604090205490565b6100b6610336565b6100df61018a3660046106ea565b610345565b6100f361019d366004610772565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6060600380546101d7906107a5565b80601f0160208091040260200160405190810160405280929190818152602001828054610203906107a5565b80156102505780601f1061022557610100808354040283529160200191610250565b820191906000526020600020905b81548152906001019060200180831161023357829003601f168201915b5050505050905090565b60003361026881858561035b565b60019150505b92915050565b60003361028285828561036d565b61028d8585856103eb565b506001949350505050565b6001600160a01b0383166000908152602081905260408120548211156103135760405162461bcd60e51b815260206004820152602560248201527f496e73756666696369656e7420616d6f756e7420696e20646f6e6f7227732077604482015264185b1b195d60da1b60648201526084015b60405180910390fd5b61031e8484846103eb565b5060019392505050565b610332828261044a565b5050565b6060600480546101d7906107a5565b60006103523384846103eb565b50600192915050565b6103688383836001610480565b505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146103e557818110156103d657604051637dc7a0d960e11b81526001600160a01b0384166004820152602481018290526044810183905260640161030a565b6103e584848484036000610480565b50505050565b6001600160a01b03831661041557604051634b637e8f60e11b81526000600482015260240161030a565b6001600160a01b03821661043f5760405163ec442f0560e01b81526000600482015260240161030a565b610368838383610555565b6001600160a01b0382166104745760405163ec442f0560e01b81526000600482015260240161030a565b61033260008383610555565b6001600160a01b0384166104aa5760405163e602df0560e01b81526000600482015260240161030a565b6001600160a01b0383166104d457604051634a1406b160e11b81526000600482015260240161030a565b6001600160a01b03808516600090815260016020908152604080832093871683529290522082905580156103e557826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161054791815260200190565b60405180910390a350505050565b6001600160a01b03831661058057806002600082825461057591906107df565b909155506105f29050565b6001600160a01b038316600090815260208190526040902054818110156105d35760405163391434e360e21b81526001600160a01b0385166004820152602481018290526044810183905260640161030a565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b03821661060e5760028054829003905561062d565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161067291815260200190565b60405180910390a3505050565b60006020808352835180602085015260005b818110156106ad57858101830151858201604001528201610691565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b03811681146106e557600080fd5b919050565b600080604083850312156106fd57600080fd5b610706836106ce565b946020939093013593505050565b60008060006060848603121561072957600080fd5b610732846106ce565b9250610740602085016106ce565b9150604084013590509250925092565b60006020828403121561076257600080fd5b61076b826106ce565b9392505050565b6000806040838503121561078557600080fd5b61078e836106ce565b915061079c602084016106ce565b90509250929050565b600181811c908216806107b957607f821691505b6020821081036107d957634e487b7160e01b600052602260045260246000fd5b50919050565b8082018082111561026e57634e487b7160e01b600052601160045260246000fdfea26469706673582212209f6d69505d5f323d9d08f5b6e3f05bee6b5c22d95713e217d256a0a1e369be0c64736f6c63430008180033",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100a95760003560e01c8063386bc05a11610071578063386bc05a1461012357806340c10f191461013657806370a082311461014b57806395d89b4114610174578063a9059cbb1461017c578063dd62ed3e1461018f57600080fd5b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100ef57806323b872dd14610101578063313ce56714610114575b600080fd5b6100b66101c8565b6040516100c3919061067f565b60405180910390f35b6100df6100da3660046106ea565b61025a565b60405190151581526020016100c3565b6002545b6040519081526020016100c3565b6100df61010f366004610714565b610274565b604051601281526020016100c3565b6100df610131366004610714565b610298565b6101496101443660046106ea565b610328565b005b6100f3610159366004610750565b6001600160a01b031660009081526020819052604090205490565b6100b6610336565b6100df61018a3660046106ea565b610345565b6100f361019d366004610772565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6060600380546101d7906107a5565b80601f0160208091040260200160405190810160405280929190818152602001828054610203906107a5565b80156102505780601f1061022557610100808354040283529160200191610250565b820191906000526020600020905b81548152906001019060200180831161023357829003601f168201915b5050505050905090565b60003361026881858561035b565b60019150505b92915050565b60003361028285828561036d565b61028d8585856103eb565b506001949350505050565b6001600160a01b0383166000908152602081905260408120548211156103135760405162461bcd60e51b815260206004820152602560248201527f496e73756666696369656e7420616d6f756e7420696e20646f6e6f7227732077604482015264185b1b195d60da1b60648201526084015b60405180910390fd5b61031e8484846103eb565b5060019392505050565b610332828261044a565b5050565b6060600480546101d7906107a5565b60006103523384846103eb565b50600192915050565b6103688383836001610480565b505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146103e557818110156103d657604051637dc7a0d960e11b81526001600160a01b0384166004820152602481018290526044810183905260640161030a565b6103e584848484036000610480565b50505050565b6001600160a01b03831661041557604051634b637e8f60e11b81526000600482015260240161030a565b6001600160a01b03821661043f5760405163ec442f0560e01b81526000600482015260240161030a565b610368838383610555565b6001600160a01b0382166104745760405163ec442f0560e01b81526000600482015260240161030a565b61033260008383610555565b6001600160a01b0384166104aa5760405163e602df0560e01b81526000600482015260240161030a565b6001600160a01b0383166104d457604051634a1406b160e11b81526000600482015260240161030a565b6001600160a01b03808516600090815260016020908152604080832093871683529290522082905580156103e557826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161054791815260200190565b60405180910390a350505050565b6001600160a01b03831661058057806002600082825461057591906107df565b909155506105f29050565b6001600160a01b038316600090815260208190526040902054818110156105d35760405163391434e360e21b81526001600160a01b0385166004820152602481018290526044810183905260640161030a565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b03821661060e5760028054829003905561062d565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161067291815260200190565b60405180910390a3505050565b60006020808352835180602085015260005b818110156106ad57858101830151858201604001528201610691565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b03811681146106e557600080fd5b919050565b600080604083850312156106fd57600080fd5b610706836106ce565b946020939093013593505050565b60008060006060848603121561072957600080fd5b610732846106ce565b9250610740602085016106ce565b9150604084013590509250925092565b60006020828403121561076257600080fd5b61076b826106ce565b9392505050565b6000806040838503121561078557600080fd5b61078e836106ce565b915061079c602084016106ce565b90509250929050565b600181811c908216806107b957607f821691505b6020821081036107d957634e487b7160e01b600052602260045260246000fd5b50919050565b8082018082111561026e57634e487b7160e01b600052601160045260246000fdfea26469706673582212209f6d69505d5f323d9d08f5b6e3f05bee6b5c22d95713e217d256a0a1e369be0c64736f6c63430008180033",
    "linkReferences": {},
    "deployedLinkReferences": {}
}
const CONTRACT_ADDRESS = '0x043A21B1e3b969e4d8bE1604Ef7CD95046f1094E';
let account = ""
const connectWalletButton = document.getElementById('connectWallet');
const web3 = new Web3(window.ethereum);

connectWalletButton.addEventListener('click', async () => {
    if (typeof window.ethereum !== 'undefined') {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            account = accounts[0];
            displayWalletInfo(account);
            alert(`Connected to wallet: ${account}`);
        } catch (error) {
            console.error('Error connecting to wallet:', error);
            alert('Failed to connect to wallet. Please try again.');
        }
    } else {
        alert('MetaMask is not installed. Please install MetaMask and try again.');
    }
});

async function displayWalletInfo(account) {
    const shortAccount = `${account.slice(0, 6)}...${account.slice(-4)}`;
    connectWalletButton.textContent = shortAccount;

    const balance = await getPolygonBalance(account);
    const tokenBalance = await getTokenBalance(account, `${CONTRACT_ADDRESS}`);

    // document.getElementById('info').innerHTML += `
    //     <div>
    //         <p>Polygon Balance: ${balance} MATIC</p>
    //         <p>Token Balance: ${tokenBalance} TOKEN_SYMBOL</p>
    //     </div>
    // `;

    // document.getElementById('tokenBalanceDisplay').textContent = `Your Token Balance: ${tokenBalance} TOKEN_SYMBOL`;
}

async function getPolygonBalance(account) {
    const balance = await web3.eth.getBalance(account);
    return web3.utils.fromWei(balance, 'ether');
}

async function getTokenBalance(account, contractAddress) {
    const contract = new web3.eth.Contract(Token.abi, contractAddress);
    const balance = await contract.methods.balanceOf(account).call();
    return web3.utils.fromWei(balance, 'ether');
}

const withdraw = async () => {
    console.log(account, CONTRACT_ADDRESS, Token.abi);

    const earnedAIA = localStorage.getItem("ctok");  // Amount to mint

    // Check for MetaMask or other injected web3 provider
    if (typeof window.ethereum === 'undefined') {
        alert("MetaMask is not installed!");
        return;
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const address = await signer.getAddress()
    // Initialize the contract
    const movieRev = new ethers.Contract(CONTRACT_ADDRESS, Token.abi, signer);

    console.log(earnedAIA, "========inside withdraw===");

    // Mint tokens
    try {
        const tx = await movieRev.mint(address, ethers.parseUnits(earnedAIA.toString(), 18));
        await tx.wait();
        alert('Withdraw your earned AIA coins!');
    } catch (error) {
        console.error("Transaction failed:", error);
        alert("There was an error with the transaction.");
    }
};


const withdrawEle = document.getElementById("claimTokens");

withdrawEle.onclick = () => {
    console.log("__________________withdraw initiated+________________")
    withdraw()
}