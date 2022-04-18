import {Fragment, useState, useEffect} from 'react';
import {Carousel} from 'react-responsive-carousel';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './home.module.css';
import useHttp from '../../hooks/useHttp';
import {getBanner} from '../../@crema/services/homeService';
import Image from 'next/image';
import {Button, Typography} from '@mui/material';

const BannerHome = () => {
  const [resBanner, setBanner] = useState([]);

  const {isLoading, error, sendRequest: fetchTasks} = useHttp();

  useEffect(() => {
    const transformTasks = (tasksObj) => {
      //   const loadedTasks = [];

      //   for (const taskKey in tasksObj) {
      //     loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
      //   }
      //   for (const bannerkey of tasksObj.arBannerTop) {
      //     console.log(bannerkey.title);
      //   }

      setBanner(tasksObj);
    };
    fetchTasks(getBanner, transformTasks);

    return () => {};
  }, [fetchTasks]);

  const carouselProp = {
    showStatus: false,
    useKeyboardArrows: true,
    infiniteLoop: false,
    autoPlay: false,
    stopOnHover: true,
    emulateTouch: true,
    showIndicators: false,
    transitionTime: 1000,
    showArrows: true,
    showThumbs: false,
    renderArrowPrev: (clickHandler, hasPrev, label) => {
      return (
        hasPrev && (
          <span
            style={{cursor: 'pointer'}}
            className={styles.arrow_left}
            onClick={clickHandler}
          >
            <span className={styles.icon_keyboard_arrow_left}>
              <ArrowBackIosOutlinedIcon></ArrowBackIosOutlinedIcon>
            </span>
          </span>
        )
      );
    },
    renderArrowNext: (clickHandler, hasNext, label) => {
      return (
        hasNext && (
          <span className={styles.arrow_right} onClick={clickHandler}>
            <span
              style={{cursor: 'pointer'}}
              className={styles.icon_keyboard_arrow_right}
            >
              <ArrowForwardIosOutlinedIcon></ArrowForwardIosOutlinedIcon>
            </span>
          </span>
        )
      );
    },
  };

  return (
    <Fragment>
      <section className={`${styles.section} ${styles.boxBanner}`}>
        <div className=''>
          <div className='row'>
            <div className='col-12'>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  '& > :not(style)': {
                    m: 0,
                  },
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                }}
              >
                {/* <Paper elevation={5}> */}
                <Carousel
                  className={` ${styles.boxBanner}`}
                  dynamicHeight={false}
                  {...carouselProp}
                >
                  {!error && !isLoading ? (
                    resBanner.map((element) => {
                      return (
                        <div
                          key={`box-${element.id}`}
                          style={{position: 'relative'}}
                        >
                          <img
                            key={element.id}
                            // src={element.ppUrl}
                            src={'assets/images/banner_home1.png'}
                            alt='image1'
                            className={`img-fluid  ${styles.imgBanner}`}
                          />
                          <Box
                            sx={{
                              width: '70%',
                              position: 'absolute',
                              left: '50%',
                              top: '50%',
                              transform: 'translate(-50%,-50%)',
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: 'Montserrat',
                                color: '#fff',
                                textAlign: 'center',
                                fontWeight: '700',
                                fontSize: {xs: '13px', md: '36px'},
                                lineHeight: {xs: '17px', md: '43px'},
                              }}
                            >
                              Platform Penilaian Keberlanjutan <br /> Bagi
                              Bisnis dan Organisasi
                            </Typography>
                            <Button
                              sx={{
                                marginTop: {xs: '5px', md: '25px'},
                                fontSize: {xs: '11px', md: '16px'},
                                fontFamily: 'Montserrat',
                                fontWeight: '700',
                                borderRadius: '25px',
                                lineHeight: '19.5px',
                                backgroundColor: '#FFB401',
                                paddingTop: {xs: '3px', md: '10px'},
                                paddingLeft: {xs: '30px', md: '60px'},
                                paddingRight: {xs: '30px', md: '60px'},
                                paddingBottom: {xs: '3px', md: '10px'},
                              }}
                              variant='contained'
                            >
                              Ajukan Demo
                            </Button>
                          </Box>
                        </div>
                      );
                    })
                  ) : (
                    <div
                      key='idAlt'
                      className={`${styles.imgContainer}`}
                      style={{position: 'relative'}}
                    >
                      <img
                        src={'assets/images/banner_home1.png'}
                        alt='image1'
                        className={`img-fluid  ${styles.imgBanner}`}
                      />
                      <Box
                        sx={{
                          width: '70%',
                          position: 'absolute',
                          left: '50%',
                          top: '50%',
                          transform: 'translate(-50%,-50%)',
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: 'Montserrat',
                            color: '#fff',
                            fontSize: {xs: '13px', md: '36px'},
                            lineHeight: {xs: '17px', md: '43px'},
                          }}
                        >
                          Platform Penilaian Keberlanjutan <br /> Bagi Bisnis
                          dan Organisasi
                        </Typography>
                        <Button
                          sx={{
                            marginTop: {xs: '5px', md: '25px'},
                            fontSize: {xs: '11px', md: '16px'},
                            fontFamily: 'Montserrat',
                            fontWeight: '700',
                            borderRadius: '25px',
                            backgroundColor: '#FFB401',
                            paddingTop: {xs: '3px', md: '10px'},
                            paddingLeft: {xs: '30px', md: '60px'},
                            paddingRight: {xs: '30px', md: '60px'},
                            paddingBottom: {xs: '3px', md: '10px'},
                          }}
                          variant='contained'
                        >
                          Ajukan Demo
                        </Button>
                      </Box>
                    </div>
                  )}
                </Carousel>
                {/* </Paper> */}
              </Box>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default BannerHome;
