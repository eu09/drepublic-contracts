const DRepublic = artifacts.require("../contracts/DRepublic.sol");
const NFTFactory = artifacts.require("../contracts/NFTFactory.sol");
const NFTBlindBox = artifacts.require("../contracts/NFTBlindBox.sol");
const NFTIncubator = artifacts.require("../contracts/NFTIncubator.sol");

module.exports = async (deployer) => {
	await deployer.deploy(DRepublic, "Tether USD", "USDT", '100000000000000000000000000', {gas: 5000000});
	await deployer.deploy(NFTFactory, "DRepublic NFT", "DRPC", "https://drepublic.io/api/nfts/{id}");
	await deployer.deploy(NFTBlindBox, NFTFactory.address, DRepublic.address);
	await deployer.deploy(NFTIncubator, NFTFactory.address, NFTBlindBox.address);
};
