// Dependency injection provider
import { Provider as DiProvider } from "inversify-react";
import "./App.css";
import { HomePage } from "./pages/Home";
import { container } from "./services/ioc.service";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
function App() {
  return (
    <DiProvider container={container}>
      <ThemeProvider theme={theme}>
        <HomePage />
      </ThemeProvider>
    </DiProvider>
  );
}

export default App;
