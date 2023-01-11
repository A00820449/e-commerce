import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

/**
 * @param {{name: string, id: string}} param0 
 */
function AppCard({name, id}) {
    return (
      <Grid item xs={12} sm={6} md={3}>
        <Card
          sx={{display: 'flex', flexDirection: 'column' }}
        >
          <CardMedia
            /*component="img"*/
            sx={{
              pt: '100%',
            }}
            image="https://source.unsplash.com/random"
            alt="random"
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
              {name||"Name"}
            </Typography>
            <Typography>
              {id||"A00000000"}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">View</Button>
            <Button size="small">Edit</Button>
          </CardActions>
        </Card>
      </Grid>
    );
}

export default AppCard;