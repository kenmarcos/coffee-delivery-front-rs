import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Router } from "./routes/Router";
import { BrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./contexts/CartContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <CartContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CartContextProvider>
    </ThemeProvider>
  );
}

export default App;
