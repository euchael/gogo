import {Fragment} from 'react';
import MainNavigation from './MainNavigation';

import {useRouter} from 'next/router';
import LoginRegisNavigation from './LoginRegisNavigation';
// import { useSession } from "next-auth/react";
import DashboardNavigation from './DashboardNavigation';

const HeaderLayout = () => {
  // const {data: session, status: isloading} = useSession();
  // const {user, isLoading} = useAuthUser();

  const router = useRouter();

  let navigation = <MainNavigation></MainNavigation>;
  if (
    router.pathname.startsWith('/login') ||
    router.pathname.startsWith('/register')
  ) {
    navigation = <LoginRegisNavigation></LoginRegisNavigation>;
  }

  // if (user && router.pathname.startsWith('/dashboard'))
  //   navigation = <DashboardNavigation></DashboardNavigation>;

  return <Fragment>{navigation}</Fragment>;
};

export default HeaderLayout;
