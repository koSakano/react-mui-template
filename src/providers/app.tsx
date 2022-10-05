import { CircularProgress, ThemeProvider } from "@mui/material";
import theme from "@/theme";
import { RecoilRoot } from "recoil";
import { SWRConfig } from "swr";
import options from "@/swrOptions";
import { Suspense } from "react";

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <RecoilRoot>
      <SWRConfig value={options}>
        <ThemeProvider theme={theme}>
          <Suspense fallback={<CircularProgress size="100" />}>
            {children}
          </Suspense>
        </ThemeProvider>
      </SWRConfig>
    </RecoilRoot>
  );
};
