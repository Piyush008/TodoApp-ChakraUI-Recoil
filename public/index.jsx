import App from "../src/App";
import ReactDOM from "react-dom";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";

ReactDOM.render(
  <RecoilRoot>
    <ChakraProvider>
      <ColorModeScript initialColorMode="light" />
      <App />
    </ChakraProvider>
  </RecoilRoot>,
  document.getElementById("root")
);
