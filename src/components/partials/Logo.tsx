import { useHistory } from "react-router-dom";
import Images from "assets/images";

export default function Logo() {
  const { bannerLogo } = Images;
  const history = useHistory();
  return (
    <img
      onClick={() => history.push(localStorage.getItem("jwt") ? "/admin" : "/")}
      src={bannerLogo}
      alt="Banner Logo"
      width="100%"
    />
  );
}
