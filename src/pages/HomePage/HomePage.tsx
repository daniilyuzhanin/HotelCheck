import {
  Box,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

import { Header } from 'common/components/Header';
import { Main } from 'common/components/Main';

const useStyles = makeStyles({
  wrapper: {
    position: 'relative',
    height: 'auto',
    maxWidth: '100%',
    flexGrow: 1,
    background: '#E5E5E5',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
  }
})

export const HomePage = () => {
  const classes = useStyles();

  const { wrapper } = classes;

  return (
    <Box className={wrapper}>
      <Header />
      <Main />
    </Box>
  );
};
