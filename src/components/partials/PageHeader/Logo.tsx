import { useHistory } from "react-router-dom";
import Images from "assets/images";

export default function Logo() {
  const history = useHistory();
  return <img onClick={() => history.push("/")} src={Images.bannerLogo} />;
}
