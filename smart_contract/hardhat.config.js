// https://eth-ropsten.alchemyapi.io/v2/PazpoFhuoFcvneKtLhn-iMcTHW-62e8o

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.13',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/PazpoFhuoFcvneKtLhn-iMcTHW-62e8o',
      accounts: ['5b3ffd5d2d1f88040955d500294c28780f734d324e82f0e54983f06a47ab6998']
    }
  }
}