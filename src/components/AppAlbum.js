import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AppCard from './AppCard';


function AppAlbum() {
    return ( 
        <Container sx={{ py: 8 }} maxWidth="md">
        <Typography variant='h4' align="center" gutterBottom>
            Nuestro Equipo
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <AppCard name='Miguel Angel Tornero Carrillo'/>
          <AppCard name='Alberto Jorge Treviño González'/>
          <AppCard name='Francisco Salgado Guízar'/>
          <AppCard name='Mariano Carlos Gerardo Shaar Gutiérrez'/>
        </Grid>
      </Container>
     );
}

export default AppAlbum;