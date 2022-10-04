import { Sample } from "@/components/common/Sample";
import { AppProvider } from "@/providers/app";

function App() {

  return (
    <AppProvider>
      <Sample />
    </AppProvider>
  )
}

export default App
