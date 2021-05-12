const smallville = artifacts.require("./smallville.sol");

module.exports = function(_deployer) {
  _deployer.deploy(smallville);
};
