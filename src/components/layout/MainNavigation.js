import Link from 'next/link';
import {Fragment, useState} from 'react';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faClockFour} from '@fortawesome/free-solid-svg-icons';
import {useRouter} from 'next/router';
import {AppLoader} from '@crema';
// import { useSession } from "next-auth/react";
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import {useAuthUser} from '../../@crema/utility/AuthHooks';

import Button from '@mui/material/Button';

import {styled} from '@mui/material/styles';
import styles from './mainavigation.module.css';

import IconClock from '../../assets/icon/clock.svg';
import IconMailBox from '../../assets/icon/coolicon.svg';
import IconPhone from '../../assets/icon/phone_outline.svg';

import Box from '@mui/material/Box';

import AppLngSwitcher from '../../@crema/core/AppLngSwitcher';

import {useIntl} from 'react-intl';

import IntlMessages from '../../@crema/utility/IntlMessages';

const MainNavigation = () => {
  // const {data: session, status: isloading} = useSession();
  const {user, isLoading} = useAuthUser();
  const [isOpen, setOpen] = useState(false);

  const {messages} = useIntl();

  const router = useRouter();

  const openMenuHandler = () => {
    setOpen(!isOpen);
  };

  if (isLoading) return <AppLoader />;

  const ColorButton = styled(Button)(({theme}) => ({
    color: '#ffffff',
    backgroundColor: '#0CA64B',
    fontSize: '13px',
    fontWeight: '500',
    '&:hover': {
      backgroundColor: '#0CA64B',
    },
  }));

  return (
    <Fragment>
      <header className='header navbar-area'>
        <Box
          sx={{
            display: {xs: 'none', md: 'inline'},
          }}
        >
          <div className={`${styles.header_top_bar} display-center`}>
            <div className='row align-items-center'>
              <div className='col-lg-12'>
                <ul
                  className={`${styles.top_bar_info} ${styles.list_inline_item} pl-0 mb-0 `}
                >
                  <li className={` ${styles.list_inline_item} `}>
                    {/* <FontAwesomeIcon
                      icon={faClockFour}
                      style={{color: 'primaryColor', marginRight: '3px'}}
                    /> */}
                    <IconClock style={{marginRight: '6px'}}></IconClock>
                    <span> Senin - Jumat : 08.00 - 17.00 WIB </span>
                  </li>
                  <li className={` ${styles.list_inline_item}  `}>
                    <IconMailBox style={{marginRight: '6px'}}></IconMailBox>
                    <span> Contact@satuplatform.com</span>
                  </li>
                  <li
                    className={` ${styles.list_inline_item} `}
                    style={{marginRight: '0px'}}
                  >
                    <IconPhone style={{marginRight: '6px'}}></IconPhone>
                    <span> 021-3517984/021-35020232</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Box>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-12'>
              <Box sx={{ml: 4}}>
                <AppLngSwitcher iconOnly={false} tooltipPosition='bottom' />
              </Box>
              <div className='nav-inner'>
                <nav
                  className={`navbar navbar-expand-lg ${
                    isOpen ? 'active' : ''
                  }`}
                >
                  <Link href='/'>
                    <span
                      style={{cursor: 'pointer'}}
                      className='navbar-brand'
                      href='index.html'
                    >
                      <img src={'/assets/images/logo.svg'} alt='Logo' />
                    </span>
                  </Link>
                  <button
                    onClick={openMenuHandler}
                    className='navbar-toggler mobile-menu-btn '
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                  >
                    <span className='toggler-icon'></span>
                    <span className='toggler-icon'></span>
                    <span className='toggler-icon'></span>
                  </button>
                  <div
                    className={`collapse navbar-collapse sub-menu-bar ${
                      isOpen ? 'show' : ''
                    }`}
                    id='navbarSupportedContent'
                  >
                    <ul id='nav' className='navbar-nav ms-auto'>
                      <li className='nav-item'>
                        <Link href='/pernilain'>
                          <a
                            className={
                              router.pathname.startsWith('/pernilain')
                                ? 'active'
                                : ''
                            }
                          >
                            Penilaian Keberlanjutan
                          </a>
                        </Link>
                        {/* <ul className="sub-menu collapse" id="submenu-1-1">
                            <li className="nav-item active">
                              <Link href="/pernilain/detail">
                                <a href="index.html">Home Default</a>
                              </Link>
                            </li>
                          </ul> */}
                      </li>
                      <li className='nav-item'>
                        <Link href='/daftarharga'>
                          <a
                            className={
                              router.pathname.startsWith('/daftarharga')
                                ? 'active'
                                : ''
                            }
                          >
                            {/* Daftar Harga */}
                            {/* {messages['menu.public.daftarHarga']} */}
                            <IntlMessages id='menu.public.daftarHarga' />
                          </a>
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link href='/harga' activeClass='active'>
                          Pusat Informasi
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link href='/harga' activeClass='active'>
                          Tentang
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link href='/harga' activeClass='active'>
                          Blog
                        </Link>
                      </li>
                      <li className='nav-item mobile-show'>
                        {!user && (
                          <Link href='/login'>
                            <ColorButton variant='contained'>Masuk</ColorButton>
                          </Link>
                        )}

                        {user && (
                          <Link href='/sample/page-1'>
                            <ColorButton variant='contained'>
                              Dashboard
                            </ColorButton>
                          </Link>
                        )}
                        <Button
                          sx={{
                            color: '#0CA64B',
                            fontSize: '13px',
                            marginLeft: '20px',
                          }}
                          variant='outlined'
                        >
                          Kontak
                        </Button>
                      </li>
                    </ul>
                  </div>
                  <div className='login-button'>
                    <ul>
                      <li>
                        {!user && (
                          <Link href='/login'>
                            <ColorButton variant='contained'>Masuk</ColorButton>
                          </Link>
                        )}

                        {user && (
                          <Link href='/sample/page-1'>
                            <ColorButton variant='contained'>
                              Dashboard
                            </ColorButton>
                          </Link>
                        )}
                      </li>
                      <li>
                        {/* <button className='btn-kontak'></button> */}
                        <Button
                          sx={{color: '#0CA64B', fontSize: '13px'}}
                          variant='outlined'
                        >
                          Kontak
                        </Button>
                      </li>

                      {/* {!user && (
                          <Link href='/login'>
                            <button className='btn-login'>Masuk</button>
                          </Link>
                        )} */}
                      {/* {user && (
                          <Link href='/dashboard'>
                            <button className='btn-login'>Dashboard</button>
                          </Link>
                        )} */}
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default MainNavigation;
