import React, { useState, createContext, useContext } from "react";
import { ethers } from "ethers";
interface Web3ContextType {
  account: string | null;
  connect: () => Promise<void>;
  provider: any;
}
const Web3Context = createContext<Web3ContextType>({
  account: null,
  connect: async () => {},
  provider: null
});
export const Web3Provider: React.FC<{
  children: React.ReactNode;
}> = ({
  children
}) => {
  const [account, setAccount] = useState<string | null>(null);
  const [provider, setProvider] = useState<any>(null);
  const connect = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({
          method: "eth_requestAccounts"
        });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        setProvider(provider);
      } catch (error) {
        console.error("Error connecting to MetaMask", error);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };
  return <Web3Context.Provider value={{
    account,
    connect,
    provider
  }}>
      {children}
    </Web3Context.Provider>;
};
export const useWeb3 = () => useContext(Web3Context);