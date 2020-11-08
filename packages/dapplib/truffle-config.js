require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy prize flee venture strategy regret mean pumpkin gesture canoe army giggle'; 
let testAccounts = [
"0x9cd30a2cb0dfccefd818d6fbd61b20cf85f5353fbc7694c77c5b29e4cab1cec6",
"0xc455d38e37e853cb350160e052de8caac99213fe766a2c470bc8062bf7cba8af",
"0xee7f725c04b879e5ae4b1e088d3c78688bdb6315fe4926a72a46cc717d4454f3",
"0x39e35801cca4bcb48699eac73b557e1aa6236b28828233e97f755f0691d1591d",
"0xfe99652bd98d54e7919e9b27bdd22f03c309e8832ac0d7623aef0fdbfc6d1213",
"0x887ffc5802321a5f7f9dbd2d04e315c261f639297cc643288ff209c374faf555",
"0x6eb9675f28b0b3c09722f53fa2ace73a861c36c956bcab2f6e40838d331e8b0c",
"0xc8951c853a22a3031ab1f3738b65a304a095ca85422c64a7f4f7184d03f943eb",
"0x22844199b8aa8ac4b36db242bb4cc4217180b94d56b748c09c746a552aae9cf2",
"0x444add8aada57fdbff53aa3c61686ddf90bf84756df3adbf84f5426930aa6b04"
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
            version: '^0.5.11'
        }
    }
};
