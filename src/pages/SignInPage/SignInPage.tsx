import {
  Box,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

import { SignInForm } from 'common/components/SignIn';

const useStyles = makeStyles({
  container: {
    maxWidth: '500px',
    margin: '0 auto',
  },
  title: {
    textAlign: 'center',
  },
  // formContainer: {
  //   marginTop: theme.spacing(2),
  //   marginBottom: theme.spacing(2),
  // },
});

export const SignInPage = () => {
  const classes = useStyles();

  const { container, title } = classes;

  return (
    <Box className={container}>
      <Typography variant="h3" className={title}>
        Simple Hotel Check
      </Typography>
      <Box>
        <SignInForm />
      </Box>
    </Box>
  );
};
