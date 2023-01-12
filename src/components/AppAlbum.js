import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import AppCard from './AppCard';
import { Typography } from '@mui/material';


function AppAlbum() {
    return ( 
        <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4} justifyContent="center">
          <AppCard name='Alberto Jorge Treviño González' id="A00824493" imageURL={`${process.env.PUBLIC_URL}/static/alberto.jpeg`}>
            <Typography>
              Me llamo Alberto pero prefiero que me digan Beto, estudió la carrera de ITC, me interesa mucho la ciberseguridad y el área de desarrollo web. Este invierno inscribí 2 materias, el horario que estaría ocupado sería entre 11-1. Soy coordinador de un grupo por lo cual puede que me vaya de retiro en los fines de semana o tener juntas semanales en las noches.
            </Typography>
          </AppCard>
          <AppCard name='Francisco Salgado Guízar' id="A01365047" imageURL={`${process.env.PUBLIC_URL}/static/francisco.jpeg`}>
            <Typography>
              Me llamo Francisco pero pueden llamarme Paco. Soy estudiante de ITC de último semestre. Inscribí 2 materias de invierno, ambas asíncronas, por lo que me encuentro disponible una gran parte del tiempo. No duden en contactarme para brindarles apoyo con lo que necesiten. Tengo intereses en diversas áreas, principalmente programación y economía.
            </Typography>
          </AppCard>
          <AppCard name='Mariano Carlos Gerardo Shaar Gutiérrez' id="A00825287" imageURL={`${process.env.PUBLIC_URL}/static/shaar.jpg`}>
            <Typography>
            Me llamo Mariano pero me dicen por mi apellido, Shaar. Estoy en décimo semestre de ITC y llevo dos materias este invierno. Me gustan mucho las matemáticas y todo el ámbito lógico y abstracto. Los fines de semana me dedico a incursionar en ámbitos creativos como música, visuales y cocina.
            </Typography>
          </AppCard>
          <AppCard name='Miguel Angel Tornero Carrillo' id='A00820449' imageURL={`${process.env.PUBLIC_URL}/static/miguel.png`}>
            <Typography>
            Me llamo Miguel, pero pueden llamarme Mike. Estudio ITC e inscribí dos materias este invierno. Para la otra materia tengo clase de 11 AM a 1 PM de Lunes a Viernes, por lo que estaré ocupado a estas horas. Tengo interés en desarrollo web, y he desarrollado algunas aplicaciones para mis clases, por lo que si se necesita algo relacionado a esto, no duden en preguntarme.
            </Typography>
          </AppCard>
        </Grid>
      </Container>
     );
}

export default AppAlbum;