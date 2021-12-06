import * as React from 'react';
import { TextField, FormHelperText, Typography, Box } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

export const SearchHotel = () => {
  const [value, setValue] = React.useState<Date | null>(null);

  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
      <FormHelperText>
        <Typography>
          Локация
        </Typography>
      </FormHelperText>
      <TextField
          id="filled-search"
          type="search"
        />



      <FormHelperText>
        <Typography>
          Дата заселения
        </Typography>
      </FormHelperText>
      <DatePicker
        label=" "
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
    <FormHelperText>
        <Typography>
          Количеcтво дней
        </Typography>
      </FormHelperText>
      <TextField
          id="outlined-number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
    </Box>
    
  );
}