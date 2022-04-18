import Link from 'next/link';
import {Fragment} from 'react';

import {useRouter} from 'next/router';
// import { signOut } from "next-auth/react";

const DashboardNavigation = () => {
  const router = useRouter();
  const logOutHandler = () => {
    // signOut();
    // router.replace("/");
  };
  return (
    <Fragment>
      <header className='header navbar-area'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-12'>
              <div className='nav-inner'>
                <nav className={'navbar navbar-expand-lg'}>
                  <Link href='/'>
                    <span
                      style={{cursor: 'pointer'}}
                      className='navbar-brand'
                      href='index.html'
                    >
                      <img src='/assets/images/logo.svg' alt='Logo' />
                    </span>
                  </Link>
                  <span>Dashboard Navigation</span>
                  <div className='login-button'>
                    <ul>
                      <li>
                        <button onClick={logOutHandler} className='btn-login'>
                          Keluar
                        </button>
                      </li>
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

export default DashboardNavigation;
