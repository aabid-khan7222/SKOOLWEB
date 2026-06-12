import React from 'react';
import { Outlet } from 'react-router-dom';
import SiteHeader from './SiteHeader';

const PublicLayout = () => (
  <>
    <SiteHeader />
    <Outlet />
  </>
);

export default PublicLayout;
