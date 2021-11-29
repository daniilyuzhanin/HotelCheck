import {
  TextField,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState, ReactNode, ChangeEventHandler } from 'react';

const useStyles = makeStyles({
  input: {
    marginBottom: '1rem',
  },
});

type PasswordTextFieldType = {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  error?: boolean;
  helperText: ReactNode;
};

export const PasswordTextField = ({
  label,
  value,
  onChange,
  error,
  helperText,
  id,
  name,
}: PasswordTextFieldType) => {
  const classes = useStyles();

  const { input } = classes;

  const [showPassword, isPasswordShown] = useState(false);
  const handleClickShowPassword = () => isPasswordShown(!showPassword);

  return (
    <TextField
      className={input}
      fullWidth
      id={id}
      name={name}
      label={label}
      onChange={onChange}
      error={error}
      helperText={helperText}
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility 1"
              onClick={handleClickShowPassword}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
