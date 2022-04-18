import React from 'react';
import PublicPage from '../@crema/hoc/PublicPage/index';
import asyncComponent from '../@crema/utility/asyncComponent';

const HomePage = asyncComponent(() => import('../components/home/index'));
export default PublicPage(() => <HomePage />);
