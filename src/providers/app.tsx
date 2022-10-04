import { ThemeProvider } from "@mui/material";
import theme from "@/theme";
import { RecoilRoot } from "recoil";

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </RecoilRoot>
  );
};
