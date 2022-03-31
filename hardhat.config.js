require("@nomiclabs/hardhat-waffle");
const mumbai = "https://polygon-mumbai.g.alchemy.com/v2/E1qebzB1k3kAZAn1pVCzxdcqz4UPLhVO"
const mainId = "_eeJZqSmFxTQ06OrmvKFdzEpp6ZTjpoq"

module.exports = {
  // defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: "https://rpc-mumbai.matic.today",
      // url:"https://rpc-mumbai.maticvigil.com",
      accounts: ['89a5e661dab2c0c54e869c56df55c112a0f273394883842c4ea4bfbd8211253e']
    },
    mainnet: {
      url: `https://polygon-mainnet.g.alchemy.com/v2/${mainId}`,
      // accounts: [process.env.privatekey]
    }
  },
  solidity: "0.8.4",
};
