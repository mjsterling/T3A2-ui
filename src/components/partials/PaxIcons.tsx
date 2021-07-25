import { Face, Person, Pets } from "@material-ui/icons";
import { Grid } from '@material-ui/core'

export default function PaxIcons(props: {
  adults?: number;
  children?: number;
  dogs?: number;
}) {
  const Adults = props.adults ? new Array(props.adults).fill(<Person />) : [];
  const Children = props.children
    ? new Array(props.children).fill(<Face />)
    : [];
  const Dogs = props.dogs ? new Array(props.dogs).fill(<Pets />) : [];
  const PaxIcons: JSX.Element[] = [...Adults, ...Children, ...Dogs];

  return <Grid container direction="row" alignItems="center" justifyContent="center">{PaxIcons}</Grid>;
}
