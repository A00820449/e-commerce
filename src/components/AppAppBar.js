import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function AppAppBar() {
    return ( 
        <AppBar position={"sticky"} sx={{alignItems:"center"}}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Proyecto Final
          </Typography>
        </Toolbar>
      </AppBar>
     );
}

export default AppAppBar;