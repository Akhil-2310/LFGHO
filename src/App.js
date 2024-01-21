import Home from "./pages/Home";
import { WagmiConfig, createConfig } from "wagmi";
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultConfig,
} from "connectkit";

const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: "Aqn4xWVZIe3992B7DHpY45WuvQ_Y5S4f", // or infuraId
    walletConnectProjectId: "8459112bb512644c318d428b28827a55",

    // Required
    appName: "DeBaGHO",
  })
);


function App() {
  return (
     <WagmiConfig config={config}>
      <ConnectKitProvider>
    <div className="App">
      <Home/>
    </div>
    
      </ConnectKitProvider>
    </WagmiConfig>
  );
}

export default App;
