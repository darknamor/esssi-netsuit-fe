import { Grid, Typography } from '@mui/material';
import logo from '../../assets/gota.png';
export const AuthLayout = ({ children, title = '' }) => {
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justifyContent='center'
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}>
      <Grid item className='box-shadow' xs={12} sx={{ width: { sm: 450 }, backgroundColor: 'white', padding: 3, borderRadius: 2 }}>
        <Grid display='flex' justifyContent='center' alignItems='center' sx={{ padding: 3 }}>
          <img src={logo} alt={'logo2'} />
        </Grid>
        <Typography variant='h5' sx={{ mb: 1 }}>
          {title}
        </Typography>
        {children}
      </Grid>
    </Grid>
  );
};
