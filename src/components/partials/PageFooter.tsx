import { Grid, Fab } from "@material-ui/core";
import { Email, Phone, Room } from "@material-ui/icons";

export default function PageFooter() {
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
    <Grid container item spacing={4} justify="center" alignItems="center">
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
