import CircularProgress from "@material-ui/core/CircularProgress";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import { Router } from "next/router";

import PostFeed from "../components/index/PostFeed";
import UserFeed from "../components/index/UserFeed";
import { authInitialProps } from "../lib/auth";

const Index = ({ classes, auth }) => (
  <main className={classes.root}>
    {auth.user && auth.user._id ? (
      // auth user page
      <Grid container>
        <Grid item xs={12} sm={12} md={7}>
          <PostFeed auth={auth} />
        </Grid>
        <Grid item className={classes.drawerContainer}>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            anchor="right"
            classes={{
              paper: classes.drawerPaper
            }}
          >
            <UserFeed auth={auth} />
          </Drawer>
        </Grid>
      </Grid>
    ) : (
      // Splash Page ( unauth )
      <Grid
        justify= "center"
        alignItems= "row"
        container
        className={classes.heroContent}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          gutterBottom
        >
          a better social network
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="textSecondary"
          component="p"
        >
          This is your last chance. After this, there is no turning back. You 
          take the blue pill—the story ends, you wake up in your bed and believe 
          whatever you want to believe. You take the red pill—you stay in 
          Wonderland and I show you how deep the rabbit-hole goes.
        </Typography>
        <Button
          className={classes.fabButton}
          variant="extendFab"
          color="primary"
          onClick={() => Router.push('/signup')}
        >
          get started
        </Button>
      </Grid>
    )}
  </main>
);

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 10,
    paddingLeft: theme.spacing.unit * 5,
    [theme.breakpoints.down("sm")]: {
      paddingRight: theme.spacing.unit * 5
    }
  },
  progressContainer: {
    height: "80vh"
  },
  progress: {
    margin: theme.spacing.unit * 2,
    color: theme.palette.secondary.light
  },
  drawerContainer: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  drawer: {
    width: 350
  },
  drawerPaper: {
    marginTop: 70,
    width: 350
  },
  fabButton: {
    margin: theme.spacing.unit * 3
  },
  heroContent: {
    maxWidth: 600,
    paddingTop: theme.spacing.unit * 8,
    paddingBottom: theme.spacing.unit * 6,
    margin: "0 auto"
  }
});

Index.getInitialProps = authInitialProps();

export default withStyles(styles)(Index);
