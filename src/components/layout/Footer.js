import Link from 'next/link';
import {Fragment} from 'react';

import {Typography, Box, Button} from '@mui/material';

const FooterPage = () => {
  return (
    <Fragment>
      <footer className='footer'>
        <div className='footer-top'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 text-left '>
                <img
                  className='footer_logo'
                  src='/assets/images/logo_white.svg'
                  alt='Logo'
                />
              </div>
            </div>

            <Box sx={{display: {xs: 'none', md: 'block'}}}>
              <div className='row'>
                <div className='col-lg-9'></div>
                <div className='col-lg-3 kontak '>
                  <span style={{color: '#ffffff'}}>Kontak</span>
                </div>
              </div>
            </Box>

            <Box sx={{display: {xs: 'none', md: 'block'}}}>
              <div className='row'>
                <div className='col-lg-3 col-md-6 col-12'>
                  <div className='single-footer f-link'>
                    <div className='row'>
                      <div className='col-lg-12 col-md-12 col-12'>
                        <ul>
                          <li>
                            <Link href='/pernilain'>
                              <a>Tentang SatuPlatform</a>
                            </Link>
                          </li>

                          <li>
                            <a>Pernilain Keberlanjutan</a>
                          </li>
                          <li>
                            <a>Daftar Harga</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-6 col-12'>
                  <div className='single-footer f-link'>
                    <div className='row'>
                      <div className='col-lg-12 col-md-12 col-12'>
                        <ul>
                          <li>
                            <a>Pusat Informasi</a>
                          </li>
                          <li>
                            <a>Keamanan Data</a>
                          </li>
                          <li>
                            <a>Kriteria Penilaian</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-6 col-12'>
                  <div className='single-footer f-link'>
                    <div className='row'>
                      <div className='col-lg-12 col-md-12 col-12 '>
                        <ul>
                          <li>
                            <a>Blog</a>
                          </li>
                          <li>
                            <a>Karir</a>
                          </li>
                          <li>
                            <a>Bantuan</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-6 col-12'>
                  <div className='single-footer f-link'>
                    <div className='row'>
                      <div className='col-lg-12 col-md-12 col-12'>
                        <ul>
                          <li>
                            <div className='box_icon'>
                              <div className='icon_div'>
                                <img src='assets/images/footer/phone_icon.png' />
                              </div>
                              <div className='text_div'>
                                <span> 021-3517984 / 021-3520701</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className='box_icon'>
                              <div className='icon_div'>
                                <img src='assets/images/footer/wa_icon.png' />
                              </div>
                              <div className='text_div'>
                                <span>6282110896311</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className='box_icon'>
                              <div className='icon_div'>
                                <img src='assets/images/footer/email_icon.png' />
                              </div>
                              <div className='text_div'>
                                <span>contact@satuplatform.com</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Box>
          </div>
        </div>
        <Box sx={{display: {xs: 'none', md: 'block'}}}>
          <div className='footer-bottom'>
            <div className='container'>
              <div className='row '>
                <div className='col-3'>
                  <img
                    className='iso_img'
                    src='/assets/images/footer/isologo_1.png'
                  />
                  <img
                    className='iso_img'
                    src='/assets/images/footer/isologo_2.png'
                  />
                </div>
                <div
                  className='col-6'
                  style={{
                    display: ' flex',
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div className='footer_social text-center'>
                    <img
                      className='social_img'
                      src='assets/images/footer/linkedin.png'
                    />
                    <img
                      className='social_img'
                      src='assets/images/footer/Instagram.png'
                    />
                  </div>
                </div>
                <div className='col-3'>
                  <Button
                    sx={{
                      backgroundColor: (theme) => theme.palette.primary.main,
                      // marginTop: {xs: '5px', md: '10px'},
                      fontSize: {xs: '10px', md: '12px'},
                      lineHeight: {xs: '14px', md: '19px'},
                      fontFamily: 'Montserrat',
                      fontWeight: '400',
                      borderRadius: '20px',
                      padding: {
                        xs: '5px 5px 5px 5px',
                        md: '10px 30px 10px 30px',
                      },
                    }}
                    variant='contained'
                  >
                    <img
                      style={{marginRight: '5px', height: '20px'}}
                      src='assets/images/footer/wa_icon.png'
                    />
                    Hubungin Kami
                  </Button>
                </div>
              </div>
              <div className='row'>
                <div className='col-12 text-center'>
                  <span className='copyright_text text-center'>
                    © Copyright 2021 Satuplatform. All rights reserved.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Box>
        {/* mobile version================================================= */}
        <Box className='container' sx={{display: {xs: 'block', md: 'none'}}}>
          <div className='row'>
            <div className='col-6'>
              <div className='single-footer f-link'>
                <div className='row'>
                  <div className='col-lg-12 col-md-12 col-12'>
                    <ul>
                      <li>
                        <Link href='/pernilain'>
                          <a>Tentang SatuPlatform</a>
                        </Link>
                      </li>

                      <li>
                        <a>Pernilain Keberlanjutan</a>
                      </li>
                      <li>
                        <a>Daftar Harga</a>
                      </li>
                      <li>
                        <a>Pusat Informasi</a>
                      </li>
                      <li>
                        <a>Keamanan Data</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='single-footer f-link'>
                <div className='row'>
                  <div className='col-lg-12 col-md-12 col-12'>
                    <ul>
                      <li>
                        <Link href='/pernilain'>
                          <a>Kriteria Penilaian</a>
                        </Link>
                      </li>

                      <li>
                        <a>Blog</a>
                      </li>
                      <li>
                        <a>Karir</a>
                      </li>
                      <li>
                        <a>Bantuan</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-5'>
              <div className='box_iso_mobile'>
                <img
                  className='iso_img'
                  style={{marginBottom: '15px', width: '85px'}}
                  src='/assets/images/footer/isologo_1.png'
                />
                <img
                  className='iso_img'
                  style={{width: '85px'}}
                  src='/assets/images/footer/isologo_2.png'
                />
              </div>
            </div>
            <div className='col-7'>
              <div className=' col-12 text-left '>
                <span
                  className='kontak_mobile'
                  style={{color: '#ffffff', marginLeft: '27px'}}
                >
                  Kontak
                </span>
              </div>
              <ul>
                <li>
                  <div className='box_icon'>
                    <div className='icon_div'>
                      <img src='assets/images/footer/phone_icon.png' />
                    </div>
                    <div className='text_div'>
                      <span> 021-3517984 / 021-3520701</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='box_icon'>
                    <div className='icon_div'>
                      <img src='assets/images/footer/wa_icon.png' />
                    </div>
                    <div className='text_div'>
                      <span>6282110896311</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='box_icon'>
                    <div className='icon_div'>
                      <img src='assets/images/footer/email_icon.png' />
                    </div>
                    <div className='text_div'>
                      <span>contact@satuplatform.com</span>
                    </div>
                  </div>
                </li>
              </ul>
              <Button
                sx={{
                  backgroundColor: (theme) => theme.palette.primary.main,
                  marginTop: {xs: '15px', md: '10px'},
                  fontSize: {xs: '10px', md: '12px'},
                  width: '100%',
                  lineHeight: {xs: '14px', md: '19px'},
                  fontFamily: 'Montserrat',
                  fontWeight: '400',
                  borderRadius: '20px',
                  padding: {
                    xs: '5px 5px 5px 5px',
                    md: '10px 30px 10px 30px',
                  },
                }}
                variant='contained'
              >
                <img
                  style={{marginRight: '5px', height: '20px'}}
                  src='assets/images/footer/wa_icon.png'
                />
                Hubungin Kami
              </Button>
            </div>
          </div>
          <div className='row' style={{marginTop: '20px'}}>
            <div className='col-12 text-center'>
              <div className='footer_social text-center'>
                <img
                  className='social_img'
                  src='assets/images/footer/wa_icon.png'
                />
                <img
                  className='social_img'
                  src='assets/images/footer/wa_icon.png'
                />
              </div>
              <span className='copyright_text text-center'>
                © Copyright 2021 Satuplatform. All rights reserved.
              </span>
            </div>
          </div>
        </Box>
      </footer>
    </Fragment>
  );
};

export default FooterPage;
