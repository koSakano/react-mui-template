import { ThemeProvider } from "@mui/material";
import theme from "@/theme";
import { RecoilRoot } from "recoil";
import { SWRConfig } from "swr";
import options from "@/swrOptions";

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <RecoilRoot>
      <SWRConfig value={options}>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </SWRConfig>
    </RecoilRoot>
  );
};
