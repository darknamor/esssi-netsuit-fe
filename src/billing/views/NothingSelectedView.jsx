import { Grid, Typography } from '@mui/material';
import { StarOutline } from '@mui/icons-material';
import logo from '../../assets/OracleNetSuite.png';
export const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justifyContent='center'
      sx={{ minHeight: 'calc(100vh - 110px)', borderRadius: 3 }}>
      <Grid item xs={12} alignItems='center'>
        <img src={logo} alt={'logo2'} />
      </Grid>
      <Grid item xs={12}>
        <Typography color='black' variant='h5'>
          Haga click en el botón para realizar una nueva realizar una carga
        </Typography>
      </Grid>
    </Grid>
  );
};
