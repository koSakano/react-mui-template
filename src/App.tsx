import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { AppProvider } from "./providers/app";

function App() {

  return (
    <AppProvider>
      <Box>
        react mui template
        <CircularProgress />
      </Box>
    </AppProvider>
  )
}

export default App
