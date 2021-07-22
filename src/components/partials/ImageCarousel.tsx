import { Grid, IconButton, makeStyles } from "@material-ui/core";
import { ArrowBack, ArrowForward } from "@material-ui/icons";
import clsx from "clsx";
import { useState } from "react";
import useInterval from "components/hooks/useInterval";

const useStyles = makeStyles({
  image: {
    height: "32vh",
    width: "24vh",
    borderRadius: "2vh",
    border: "2px solid black",
    background: "black",
    position: "absolute",
    top: 0,
    left: "20%",
    transition: "0.7s",
  },
  main: {
    zIndex: 3,
    boxShadow: "0 0 10px black",
  },
  prev: {
    zIndex: 2,
    transform: "matrix(0.8, 0, 0, 0.8, -40, 0)",
    boxShadow: "0 0 5px black",
  },
  next: {
    zIndex: 2,
    transform: "matrix(0.8, 0, 0, 0.8, 40, 0)",
    boxShadow: "0 0 5px black",
  },
  default: {
    transform: "matrix(0.2, 0, 0, 0.2, 0, 0)",
    zIndex: 1,
  },
  container: {
    width: "40vh",
    height: "32vh",
    position: "relative",
  },
});

export default function ImageCarousel(props: Props) {
  const classes = useStyles();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState<boolean>(props.autoplay || true);

  const length = props.slides.length;
  const slides = props.slides.map((image, index) => {
    const className = () => {
      switch (true) {
        case currentIndex === index:
          return clsx(classes.image, classes.main);
        case currentIndex - index === 1 ||
          (currentIndex === 0 && index === length - 1):
          return clsx(classes.image, classes.prev);
        case currentIndex - index === -1 ||
          (currentIndex === length - 1 && index === 0):
          return clsx(classes.image, classes.next);
        default:
          return clsx(classes.image, classes.default);
      }
    };
    return <img src={image} className={className()} alt={index.toString()} />;
  });

  function nextImage() {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  }

  function prevImage() {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  }

  const intervalId = useInterval(
    nextImage,
    autoplay ? props.interval || null : null
  );

  return (
    <Grid container justify="space-around" alignItems="center">
      <Grid item xs>
        {props.arrows ? (
          <IconButton
            size="small"
            onClick={() => {
              setAutoplay(false);
              prevImage();
            }}
          >
            <ArrowBack />
          </IconButton>
        ) : null}
      </Grid>
      <Grid item xs>
        <div className={classes.container}>{slides}</div>
      </Grid>
      <Grid item xs>
        <IconButton
          size="small"
          onClick={() => {
            setAutoplay(false);
            nextImage();
          }}
        >
          <ArrowForward />
        </IconButton>
      </Grid>
    </Grid>
  );
}

interface Props {
  slides: string[];
  autoplay?: boolean;
  arrows?: boolean;
  interval?: number;
}
