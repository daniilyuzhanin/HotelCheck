import {
  Box,
  Button,
  TextField,
  FormHelperText,
  Paper,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useFormik } from 'formik';
import { ChangeEventHandler } from 'react';

import { useNavigate } from 'react-router-dom';

import { validationSchema } from './SigninValidationSchema';

export type OnSubmitFormTest = {
  onSubmit?: ChangeEventHandler<HTMLButtonElement>;
};

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 1rem',
  },
  wrapper: {
    padding: '2rem',
    minHeight: '20rem',
    minWidth: '25.5rem',
    margin: '0 auto',
  },
  title: {
    textAlign: 'center',
    fontSize: '1.5rem',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '1.75rem',
    letterSpacing: '0em',
    color: '#424242',
    paddingBottom: '2rem',
    alignSelf: 'stretch',
    textShadow: '0px 1px 0 rgb(0,0,0),0px -1px 0 rgb(0,0,0),1px 0px 0 rgb(0,0,0),-1px 0px 0 rgb(0,0,0),1px 1px 0 rgb(0,0,0),1px -1px 0 rgb(0,0,0),-1px 1px 0 rgb(0,0,0),-1px -1px 0 rgb(0,0,0)',
  },
  button: {
    background: 'linear-gradient(104.34deg, #41522E -15.34%, #BE8022 145.95%)',
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

  const { container, title, wrapper, button } = classes;

  return (
    <Box 
      className={container}
      sx={{
        '& .MuiTextField-root': { mb: 3, width: '1' },
        }}
    >
      <Paper 
      elevation={10}
      className={wrapper}
      sx={{borderRadius: '1rem'}}
      >
        <form
          onSubmit={handleSubmit}
          onBlur={handleBlur}
          onChange={handleChange}
          noValidate
        >
          <Box className={title}>
            Simple Hotel Check
          </Box>
          <FormHelperText 
            error={isEmailTouched && Boolean(emailErrors)}
            >
              Логин
          </FormHelperText>
          <TextField
            fullWidth
            id="signinEmail"
            name="email"
            onBlur={handleBlur}
            value={emailValue}
            error={isEmailTouched && Boolean(emailErrors)}
            helperText={isEmailTouched && emailErrors}
          />
          <FormHelperText 
            error={isPasswordTouched && Boolean(passwordErrors)}
          >
            Пароль
          </FormHelperText>
          <TextField
            fullWidth
            id="signinPassword"
            name="password"
            onBlur={handleBlur}
            value={passwordValue}
            error={isPasswordTouched && Boolean(passwordErrors)}
            helperText={isPasswordTouched && passwordErrors}
          />
          <Button
            className={button}
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            id="signinSubmit"
            size="large"
          >
            Войти
          </Button>
        </form>
      </Paper>
    </Box>
  );
};
