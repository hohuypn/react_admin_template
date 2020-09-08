import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './scss/style.scss';
import history from './constant/history';


const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const Home = React.lazy(() => import('./containers/TheLayout'));
const Login = React.lazy(() => import('./views/pages/login/Login'));

const PrivateRoute = ({ component: Component, ...rest}) => (
  <Route {...rest} render={props =>(
    window.localStorage.getItem('token') ? <Component {...props} /> : <Redirect to={{pathname: '/login'}} />
  )} 
  />
);

class App extends Component {

  render() {
    return (
      <>
        <Router history={history}>
          <Suspense fallback={loading}>
            <Switch>
              <Route path='/login' name='Login' component={Login} />
              <PrivateRoute path="/" name="Home" component={Home} />
            </Switch>
          </Suspense>
        </Router>
      </>
    );
  }
}

export default App;
