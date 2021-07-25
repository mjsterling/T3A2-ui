import { Face, Person, Pets } from "@material-ui/icons";

export default function PaxIcons(props: {
  adults: number;
  children: number;
  dogs: number;
}) {
  const Adults = new Array(props.adults).fill(<Person />);
  const Children = new Array(props.children).fill(<Face />);
  const Dogs = new Array(props.dogs).fill(<Pets />);
  const PaxIcons: JSX.Element[] = [...Adults, ...Children, ...Dogs];

  return <>{PaxIcons}</>;
}
