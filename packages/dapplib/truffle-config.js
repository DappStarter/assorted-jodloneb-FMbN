require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture oppose swift top edge rare remember evil good gloom swear ski'; 
let testAccounts = [
"0x0b9bc8a2874cf345b6445ea573d75338df81bcd820b53cf6cdf1916fa1f226b7",
"0x21143384dfc2a782a4367cb4e99ea06e4e76ff598d0da6c06a39ab2d09297df9",
"0x3daa179d13bd7da7d910c67a393166bec50caeaeec93f62349465ba41ddf7ad9",
"0x9105e85e617c8e183560e6825b28b1961a600f6a41811243fef12168f66eb2a5",
"0x3ae566e9b197194e324822a0acf7004fc09f0e07a7b27d2e9bfb69d4d969e204",
"0x2b1f2f81cdec6a268b2b4519d2147b7435cf3a21a38b3a7b38c1aeb6d98d03a9",
"0xbaeaa1a9d2b3e517cbbbd1ff9ce80e1a875728359bd968171e9d93c0df4dcdad",
"0x474bd534dd805b3d5125ea21d12463f8ca9eb21111c27841c6c8f093cf9e21cf",
"0x0e3599951f37e75b6df4c10160ba1b302d090ef472393b7340782ae41ca02419",
"0xe7ae61cbad7f173e16ddeef52a280bd1e967dce265b93542410229f3bf42f168"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

