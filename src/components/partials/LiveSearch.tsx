import { Search } from "@material-ui/icons";
import { Input } from "@material-ui/core";

export default function LiveSearch(props: {
  value: string;
  onChange: Function;
}) {
  return (
    <Input
      placeholder="Filter results"
      inputProps={{ endAdornment: <Search /> }}
      value={props.value}
      onChange={(e) => props.onChange(e.target.value as string)}
    />
  );
}
