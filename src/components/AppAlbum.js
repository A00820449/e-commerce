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
          <AppCard name='Miguel Angel Tornero Carrillo' id='A00820449'/>
          <AppCard name='Alberto Jorge Treviño González' id=""/>
          <AppCard name='Francisco Salgado Guízar' id=""/>
          <AppCard name='Mariano Carlos Gerardo Shaar Gutiérrez' id=""/>
        </Grid>
      </Container>
     );
}

export default AppAlbum;