var game = artifacts.require("./game.sol");

module.exports = function(deployer) {
  deployer.deploy(game);
};
