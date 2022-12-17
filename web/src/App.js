import * as page from "./pages"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAccount,WagmiConfig } from 'wagmi'
import "./App.css";
import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient } from "wagmi";
//   import {  configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet} from 'wagmi/chains'

// const chains = [ chain.polygon, chain.optimism, chain.arbitrum];

// Wagmi client
const { chains, provider } = configureChains([mainnet], [
  walletConnectProvider({ projectId: "0ec4a219df81a3fc7c09f6ea9dadfd24" }),
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({ appName: "web3Modal", chains }),
  provider,
});

// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);
function App() {

  return (
    <>
    <WagmiConfig client={wagmiClient}>
      <Router>
        <Routes>
          <Route path="/" element={<page.Home/>}/>
          <Route path="/sell" exact element={<page.Frm/>}/>
        </Routes>
      </Router>
    </WagmiConfig>
      <Web3Modal
        projectId="0ec4a219df81a3fc7c09f6ea9dadfd24"
        ethereumClient={ethereumClient}
      />
    </>
  );
}

export default App;

