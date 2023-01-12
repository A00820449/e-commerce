import { Box, Container, Typography } from "@mui/material";

function AppHero() {
    return ( 
        <Box
          sx={{
            bgcolor: 'rgba(0,0,0,0.1)',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Comercio Electronico
            </Typography>
            <Typography variant="h3" align="center" color="text.secondary" paragraph>
              Equipo 5
            </Typography>
          </Container>
        </Box>
     );
}

export default AppHero;