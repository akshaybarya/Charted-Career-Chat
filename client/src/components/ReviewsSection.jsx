// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import React from 'react';

// import Swiper core and required modules
import SwiperCore, {
  Autoplay,
  FreeMode,
  Pagination,
} from 'swiper';
import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';

import {
  Container,
  Grid,
  Link,
  makeStyles,
  Typography,
} from '@material-ui/core';

import SliderCard from './SliderCard';

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
      marginLeft: 15,
      marginRight: 15
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
                user="CA Raghu Lamba"
                content="It was a wonderful experience where i come to know that where i lack off during the interview. They are also sharing the feedback after analysing each and every part. I would say every fresher CA should try this."
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderCard
                user="CA Diksha Sahu"
                content="A great initiative has been taken by the members of Chartered chat and career in conducting the mock interviews for CA Freshers with proper feedback and CV Screening."
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderCard
                user="Poorva Patwardhan"
                content="Hello everyone, I recently took a mock interview conducted by chartered chat and career. Thank you for conducting it. It was really very helpful. Evalu ation of CV and feedback was really great."
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderCard
                user="Pragya Golechha"
                content="Thank you Chartered Chat Career for providing constant support and guidance to freshers who are clueless after the results are announced. From giving us a platform to interact & to prepare, to providing placement opportunities, it is indeed a great initiative."
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderCard
                user="CA Bhawya Bansal"
                content="A huge thanks to CCC team for starting this great initiative of guiding and advising CA fresher about their carrier opportunities.
                I have availed service of Screening and redrafting of CV and it's benefitting me in many ways.
                Much appreciated"
              />
            </SwiperSlide>
          </Swiper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ReviewsSection;
