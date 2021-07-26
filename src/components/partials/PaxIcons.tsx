import { Face, Person, Pets } from "@material-ui/icons";
import { Grid } from "@material-ui/core";

export default function PaxIcons(props: {
  adults?: number;
  children?: number;
  dogs?: number;
  size?: "small" | "large";
}) {
  const Adults = props.adults
    ? new Array(props.adults).fill(
        <Person fontSize={props.size || "default"} />
      )
    : [];
  const Children = props.children
    ? new Array(props.children).fill(
        <Face fontSize={props.size || "default"} />
      )
    : [];
  const Dogs = props.dogs
    ? new Array(props.dogs).fill(<Pets fontSize={props.size || "default"} />)
    : [];
  const PaxIcons: JSX.Element[] = [...Adults, ...Children, ...Dogs];

  return (
    <Grid container direction="row" alignItems="center" justifyContent="center">
      {PaxIcons}
    </Grid>
  );
}
