const en = {
  i18nView: {
    title1: 'About the upgrade of OKExChain wallet:',
    title2: 'Why need to transfer tokens?',
    title3: 'Upgrade notes:',
    content1: 'Users can use DApp on OKExChain after OKExChain supports EVM (Ethereum Virtual Machine). The OKExChain wallet needs to be upgraded since the original OKExChain wallet address does not support direct interaction with DApp. Users can use DApp by new wallet after the wallet is upgraded. ',
    content2: 'The token types of OKExChain are divided into OIP10 and OIP20. The old wallet supports OIP10 and does not support direct interaction with the contract. The wallet will no longer provide additional support for OIP10 tokens in the future. Therefore, you need to transfer the old tokens to the OKEx exchange and then withdraw to the new wallet. The new wallet address starts with 0x.',
    content3_1: 'The wallet address will be changed after the upgrade is finished, but the mnemonic or private key will still be the same. If it is not backed up, please back up the private key or mnemonic of the wallet in time to avoid losing them.',
    content3_2: 'Please transfer non-OKT tokens first when transferring old tokens. OKT can be directly transferred to the new wallet address without going through an exchange after the transfer is completed.',
    content3_3: 'TokenPocket wallet will no longer maintain the old OKExChain wallet in the future, please upgrade your OKExChain wallet as soon as possible. And please use the upgraded wallet for using DApp after the upgrade is complete.',
  }
};

export default en;
