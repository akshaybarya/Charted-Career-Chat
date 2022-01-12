import React from "react";
import {
  Container,
  Grid,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";
import SliderCard from "./SliderCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import Swiper core and required modules
import SwiperCore, { FreeMode, Pagination, Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([FreeMode, Pagination, Autoplay]);

const useStyles = makeStyles((theme) => ({
  container: {
    height: "inherit",
  },
  heading: {
    marginTop: 50,
    color: "#fff",
    [theme.breakpoints.down("md")]: {
      fontSize: 20,
    },
  },
  swiper: {
    marginTop: 80,
    width: "inherit",
    height: " inherit",
    marginLeft: 50,
    marginRight: 50,

    [theme.breakpoints.down("md")]: {
      marginLeft: 35,
    },
  },
  swiperSlide: {
    textAlign: "center",
    borderRadius: 25,
  },
}));

const ReviewsSection = () => {
  const classes = useStyles();
  return (
    <Container
      maxWidth={"xl"}
      style={{ backgroundColor: "grey", height: "inherit" }}
    >
      <Grid container className={classes.container}>
        <Grid item md={12} xs={12}>
          <Typography variant="h3" component="h2" className={classes.heading}>
            What the learner community{" "}
            <Link color="primary" style={{ textDecoration: "none" }}>
              has to say...
            </Link>
          </Typography>
        </Grid>

        <Grid item xs={12} md={12} style={{ marginBottom: 100 }}>
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            pagination={false}
            loop={true}
            className={classes.swiper}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            <SwiperSlide>
              <SliderCard
                user="Akshay"
                content="This workshop helped me to remove my hesitation and helped me to be confident while giving an interview. Thank you so much to the CA Monk team. It really helped us."
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderCard
                user="Akshay"
                content="This workshop helped me to remove my hesitation and helped me to be confident while giving an interview. Thank you so much to the CA Monk team. It really helped us."
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderCard
                user="Akshay"
                content="This workshop helped me to remove my hesitation and helped me to be confident while giving an interview. Thank you so much to the CA Monk team. It really helped us."
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderCard
                user="Akshay"
                content="This workshop helped me to remove my hesitation and helped me to be confident while giving an interview. Thank you so much to the CA Monk team. It really helped us."
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderCard
                user="Akshay"
                content="This workshop helped me to remove my hesitation and helped me to be confident while giving an interview. Thank you so much to the CA Monk team. It really helped us."
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderCard
                user="Akshay"
                content="This workshop helped me to remove my hesitation and helped me to be confident while giving an interview. Thank you so much to the CA Monk team. It really helped us."
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderCard
                user="Akshay"
                content="This workshop helped me to remove my hesitation and helped me to be confident while giving an interview. Thank you so much to the CA Monk team. It really helped us."
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderCard
                user="Akshay"
                content="This workshop helped me to remove my hesitation and helped me to be confident while giving an interview. Thank you so much to the CA Monk team. It really helped us."
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderCard
                user="Akshay"
                content="This workshop helped me to remove my hesitation and helped me to be confident while giving an interview. Thank you so much to the CA Monk team. It really helped us."
              />
            </SwiperSlide>
          </Swiper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ReviewsSection;
