/* test/sample-test.js */
const {expect} = require("chai")
describe("NFTMarket", function() {
    it("Should create nft", async function() {

    /* deploy the marketplace */
    const Market = await ethers.getContractFactory("NFTMarket")
    const market = await Market.deploy()
    await market.deployed()
    const marketAddress = market.address
  
    /* deploy the NFT contract */
    const NFT = await ethers.getContractFactory("NFT")
    const nft = await NFT.deploy(marketAddress)
    await nft.deployed()

    await nft.createToken("https://sometoken.com")
    const nftContractAddress = nft.address
    expect(nftContractAddress).to.not.be.empty
  
    })
  })