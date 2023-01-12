import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import NumbersIcon from '@mui/icons-material/Numbers';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

/**
 * @param {{name: string, id: string, imageURL: string, children: import('react').ReactNode}} param0 
 */
function AppCard({name, id, imageURL, children}) {
    return (
      <Grid item xs={12} sm={6} md={6}>
        <Card
          sx={{display: 'flex', flexDirection: 'column', boxShadow: 4 }}
        >
          <CardMedia
            /*component="img"*/
            sx={{
              pt: '100%',
            }}
            image={imageURL}
            alt="random"
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
              {name||"Name"}
            </Typography>
            <List disablePadding>
              <ListItem>
                <ListItemIcon>
                  <NumbersIcon/>
                </ListItemIcon>
                <ListItemText primary={id||"A00000000"}/>
              </ListItem>
            </List>
            <Typography>
              {children}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );
}

export default AppCard;