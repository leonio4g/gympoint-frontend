import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '~/pages/_layouts/signIn';
import DefaultLayout from '~/pages/_layouts/default';

export default function RouteWapper({
  component: Component,
  isPrivate= false,
  ...rest
}) {
  const signed = true;

  if(!signed && isPrivate){
    return <Redirect to="/" />
  }

  if(signed && !isPrivate){
    return <Redirect to="/Students"/>
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
    {...rest}
    render={props => (
      <Layout>
        <Component {...props}/>
      </Layout>
    )}
    />
  )

}
RouteWapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
}

RouteWapper.defaultProps ={
  isPrivate: false,
}
