import {
  Box,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

import { SignInForm } from 'common/components/SignIn';

const useStyles = makeStyles({
  container: {
    width: '100%',
    height: '100%',
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center', 
  },
  imgBackground: {
    position: 'fixed',
    background: 'no-repeat center/cover url(/image/background.png)',
    filter: 'blur(7px)',
    height: '100%',
    width: '100%',
    zIndex: '-1',
  },
  imgOverlay: {
    width: '100%',
    height: '100%',
    background: 'white',
    opacity: '0.7'
  },
});

export const SignInPage = () => {
  const classes = useStyles();

  const { container, imgBackground, imgOverlay } = classes;

  return (
    <Box className={container}>
      <Box className={imgBackground}>
        <Box className={imgOverlay} />
      </Box>
      <SignInForm />
    </Box>
  );
};
