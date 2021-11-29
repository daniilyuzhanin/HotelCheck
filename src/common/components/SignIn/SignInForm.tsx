import {
  Box,
  Button,
  TextField,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useFormik } from 'formik';
import { ChangeEventHandler } from 'react';

import { useNavigate } from 'react-router-dom';

import { PasswordTextField } from 'common/components/PasswordTextField';

import { validationSchema } from './SigninValidationSchema';

export type OnSubmitFormTest = {
  onSubmit?: ChangeEventHandler<HTMLButtonElement>;
};

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginBottom: '1rem',
  },
  checkbox: {
    paddingBottom: '1rem',
  },
});

export const SignInForm = () => {

  const classes = useStyles();
  const navigate = useNavigate();


  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validationSchema,
    onSubmit: (values) => {
      navigate('/')
    },
  });

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values: {
      email: emailValue,
      password: passwordValue,
    },
    touched: { email: isEmailTouched, password: isPasswordTouched },
    errors: { email: emailErrors, password: passwordErrors },
  } = formik;

  return (
    <Box className={classes.container}>
      <form
        onSubmit={handleSubmit}
        onBlur={handleBlur}
        onChange={handleChange}
        noValidate
      >
        <TextField
          fullWidth
          className={classes.input}
          id="signinEmail"
          name="email"
          label="Email"
          onBlur={handleBlur}
          value={emailValue}
          error={isEmailTouched && Boolean(emailErrors)}
          helperText={isEmailTouched && emailErrors}
        />
        <PasswordTextField
          id="signinPassword"
          name="password"
          label="Password"
          value={passwordValue}
          error={isPasswordTouched && Boolean(passwordErrors)}
          helperText={isPasswordTouched && passwordErrors}
          data-testid="password"
        />
        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          id="signinSubmit"
          data-testid="signInButton"
          disabled={!formik.dirty}
        >
          Sign In
        </Button>
      </form>
    </Box>
  );
};
