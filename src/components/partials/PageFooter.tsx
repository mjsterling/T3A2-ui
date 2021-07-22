import { Grid, Fab, makeStyles } from "@material-ui/core";
import { Email, Phone, Room } from "@material-ui/icons";

const useStyles = makeStyles({
  fabContainer: {
    position: "fixed",
    bottom: "3vh",
  },
});

export default function PageFooter() {
  const classes = useStyles();
  const fabConstructor = (url: string, icon: JSX.Element) => {
    return () => (
      <Fab color="primary" size="small" onClick={() => window.open(url)}>
        {icon}
      </Fab>
    );
  };
  const AddressFab = fabConstructor(
    "https://goo.gl/maps/Xunja28d4zvgm2nu7",
    <Room />
  );
  const PhoneFab = fabConstructor("tel:+61357742800", <Phone />);
  const EmailFab = fabConstructor(
    "mailto:info@eildonlakemotel.com.au",
    <Email />
  );

  return (
    <Grid
      container
      spacing={2}
      className={classes.fabContainer}
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <PhoneFab />
      </Grid>
      <Grid item>
        <AddressFab />
      </Grid>
      <Grid item>
        <EmailFab />
      </Grid>
    </Grid>
  );
}
