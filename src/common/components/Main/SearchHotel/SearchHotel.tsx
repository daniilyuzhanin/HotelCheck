import * as React from 'react';
import { TextField, FormHelperText, Box, Stack, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

const useStyles = makeStyles({
  button: {
    background: 'linear-gradient(104.34deg, #41522E -15.34%, #BE8022 145.95%)',
  },
  helperText: {
    fontSize: '1rem',
    fontStyle:' normal',
    fontWeight: 500,
    lineHeight: '1.4rem',
    letterSpacing: '0em',
    textAlign: 'left',
    color: '#424242',
    marginBottom: '0.5rem',
  },
  input: {
    marginBottom: '1rem',
  },
});

export const SearchHotel = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState<Date | null>(new Date());

  const { button, helperText, input } = classes;


  return (
    <Stack>
      
      <FormHelperText>
        <Box className={helperText}>
          Локация
        </Box>
      </FormHelperText>
      <TextField
          id="filled-search"
          type="search"
          defaultValue="Москва"
          sx={{ marginBottom: '1rem' }}
        />



      <FormHelperText>
        <Box className={helperText}>
          Дата заселения
        </Box>
      </FormHelperText>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          className={input}
          showTodayButton
          desktopModeMediaQuery="@media (pointer: fine)"
          disablePast
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
    </LocalizationProvider>
    <FormHelperText>
        <Box className={helperText} sx={{ marginTop: '1rem' }}>
          Количеcтво дней
        </Box>
      </FormHelperText>
      <TextField
          id="outlined-number"
          type="number"
          defaultValue="1"
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ marginBottom: '2rem' }}
        />
        <Button
            style={{
              textTransform: 'none', 
              fontSize: '1rem',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: '1.5rem',
              letterSpacing: '0em',
            }}
            className={button}
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            id="signinSubmit"
            size="large"
          >Поиск</Button>
    </Stack>
    
  );
}


