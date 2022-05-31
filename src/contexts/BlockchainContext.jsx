import React from "react";

const BlockchainContext = React.createContext({
  currentAccount: null,
  provider: null
});

const BlockchainContextProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = React.useState(null);
  const [provider, setProvider] = React.useState(null);

  React.useEffect(() => {
    /* 使用 window.ethereum 來透過 Matamask 來取得錢包地址
     * 並且將錢包地址設定成 currentAccount 的 state
     * 加分項目: 偵測換錢包地址事件，並且切換 currentAccount 值
     */
  }, []);

  React.useEffect(() => {
    /* 使用 ethers.js
     * 透過 Web3Provider 將 window.ethereum 做為參數建立一個新的 web3 provider
     * 並將這個新的 web3 provider 設定成 provider 的 state
     */
  }, []);

  return (
    <BlockchainContext.Provider value={{ currentAccount, provider }}>
      {children}
    </BlockchainContext.Provider>
  );
};

export default BlockchainContextProvider;
