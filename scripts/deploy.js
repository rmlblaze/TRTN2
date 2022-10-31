const hre = require('hardhat')

const _initBaseURI='ipfs://QmYFKKHBvfTWSu5ydZqf3h7PHQZLCv6fpCoNWMigxw8UvY/'

async function main() {

  // Deploy the contract
  const theRainbowTriben = await hre.ethers.getContractFactory('TheRainbowTriben')
  const TheRainbowTriben = await theRainbowTriben.deploy(
    _initBaseURI)
  await TheRainbowTriben.deployed()

  console.log('TheRainbowTriben deployed to:', TheRainbowTriben.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
