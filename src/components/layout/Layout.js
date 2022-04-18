import Header from './Header';
import Head from 'next/head';
import {Fragment} from 'react';
import FooterPage from './Footer';

function Layout(props) {
  return (
    <Fragment>
      {/* <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head> */}
      <Header />

      {props.children}
      <FooterPage></FooterPage>
    </Fragment>
  );
}

export default Layout;
