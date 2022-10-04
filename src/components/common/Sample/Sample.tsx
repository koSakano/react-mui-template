import { sampleCount } from "@/globalStates/Sample/count";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export const Sample = (): JSX.Element => {
  const [count, increace] = sampleCount.useIncreaceCount();

  return (
    <Box>
      {count}
      <Button type="button" onClick={increace}>増やす</Button>
    </Box>
  )
}
