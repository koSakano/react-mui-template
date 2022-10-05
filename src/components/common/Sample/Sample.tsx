import { useId } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { sampleIsOpen } from '@/globalStates/Sample/alertBar';
import { sampleApi } from '@/globalStates/Sample/api';

export const Sample = (): JSX.Element => {
  const id = useId();
  const [open, setOpen] = sampleIsOpen.useIsOpen();
  const { data } = sampleApi.useGetSample();
  const { register, handleSubmit } = useForm<{ data: string }>({
    resolver: zodResolver(z.object({ data: z.string() })),
  });
  const { submit } = sampleApi.usePostSample((data) => setOpen(true));

  return (
    <Box>
      <Box>
        <form onSubmit={handleSubmit(submit)}>
          <Stack spacing={2}>
            <FormControl>
              <TextField
                id={`${id}_title`}
                label="タイトル"
                defaultValue={data}
                {...register('data')}
              />
            </FormControl>
            <Button type="submit" variant="contained">
              変更する
            </Button>
          </Stack>
        </form>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          タイトルの変更に成功しました。
        </Alert>
      </Snackbar>
    </Box>
  );
};
