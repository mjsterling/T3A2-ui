import { useHistory } from "react-router-dom";
import Images from "assets/images";

export default function Logo() {
  const { bannerLogo } = Images;
  const history = useHistory();
  return (
    <img onClick={() => history.push("/")} src={bannerLogo} width="100%" />
  );
}
