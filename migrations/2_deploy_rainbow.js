var RainbowToken = artifacts.require("./RainbowToken.sol");

module.exports = function(deployer) {
  deployer.deploy(RainbowToken, 44, 86, 221, 864000);
};
