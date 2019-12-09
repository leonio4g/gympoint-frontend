import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import Register from '~/pages/Register';
import Student from '~/pages/Student';
import Plan from '~/pages/Plan';
import HelpOrder from '~/pages/HelpOrder';

export default function Routes(){
  return(
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route  path="/register" component={Register} isPrivate />
      <Route  path="/register/list" component={Register} isPrivate/>
      <Route  path="/students" component={Student} isPrivate/>
      <Route  path="/students/list" component={Student} isPrivate/>
      <Route  path="/plans" component={Plan} isPrivate />
      <Route  path="/plans/list" component={Plan} isPrivate />
      <Route  path="/help-order" component={HelpOrder} isPrivate/>
      <Route  path="/help-order/list" component={HelpOrder} isPrivate/>


    </Switch>
  )
}
