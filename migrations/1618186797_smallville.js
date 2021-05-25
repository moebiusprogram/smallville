const smallville = artifacts.require("./Smallville.sol");

module.exports = function(_deployer) {
  _deployer.deploy(smallville);
};
