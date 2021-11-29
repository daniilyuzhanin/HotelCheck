import {
  CircularProgress, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const CircularIcon = () => {
  const classes = useStyles();

  const { root } = classes;

  return (
    <Box className={root}>
      <CircularProgress />
    </Box>
  );
};
