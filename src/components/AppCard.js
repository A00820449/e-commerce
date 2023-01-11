import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

/**
 * @param {{name: string}} param0 
 */
function AppCard({name}) {
    return (
      <Grid item xs={12} sm={6} md={3}>
        <Card
          sx={{display: 'flex', flexDirection: 'column' }}
        >
          <CardMedia
            /*component="img"*/
            sx={{
              // 16:9
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
              This is a media card. You can use this section to describe the
              content.
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