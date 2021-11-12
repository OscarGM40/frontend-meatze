import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Grid, IconButton, makeStyles } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AppleIcon from '@material-ui/icons/Apple';

const useStyles = makeStyles((theme)=>({
        'icon-left':{
            marginRight: '1em',
            fontSize: '2.2em',
        }
}))

const NavBarTop = (props) => {
    const classes = useStyles();
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Grid container alignItems="center">
            <Grid item>
             <AppleIcon className={classes["icon-left"]} />
            </Grid>
          <Grid item xs>
            <Typography variant="h6">Multimedia</Typography>
          </Grid>
          <Grid item>
            <IconButton  onClick={()=> props.accionAbrir()}>
                <MenuIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBarTop;
