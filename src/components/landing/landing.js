import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AuthForm from '../auth-form/auth-form';
import * as authActions from '../../actions/auth';
import * as routes from '../../lib/routes';

const mapStateToProps = state => ({
  token: state.token,
});

const mapDispatchToProps = dispatch => ({
  userSignup: user => dispatch(authActions.userSignup(user)),
  userLogin: user => dispatch(authActions.userLogin(user)),
});

class Landing extends React.Component {
  handleSignup = (user) => {
    this.props.userSignup(user)
      .then(() => {
        this.props.history.push(routes.DASHBOARD_ROUTE);
      })
      .catch(console.error);
  }

    handleLogin = (user) => {
      this.props.userLogin(user)
        .then(() => {
          this.props.history.push(routes.DASHBOARD_ROUTE);
        })
        .catch(console.error);
    }

    renderJSX = (pathname) => {
      const rootJSX = // eslint-disable-line
      <div>
          <h2>Hey there!</h2>
          <ul>
            <li><Link to="/signup">Sign Up Homie</Link></li>
            <li><Link to="/login">Log In My Folx</Link></li>
          </ul>
        </div>;
      
      const signUpJSX = //eslint-disable-line
      <div>
        <h2>Sign On Up Yo</h2>
        <AuthForm onComplete={ this.handleSignup }/>
        <p>You already got an account do ya?</p>
        <Link to="/login"> Log on in ya dingus </Link>
      </div>;

      const loginJSX = //eslint-disable-line
      <div>
          <h2>Log on in plz!</h2>
          <AuthForm type="login" onComplete={this.handleLogin} />
          <p> Need an account? </p>
          <Link to="/signup"> Sign on up!</Link>
        </div>;

      switch (pathname) {
        case routes.ROOT_ROUTE:
          return rootJSX;
        case routes.SIGNUP_ROUTE:
          return signUpJSX;
        case routes.LOGIN_ROUTE:
          return loginJSX;
        default:
          return null;
      }
    }

    render() {
      const { location } = this.props;
      return (
        <div>
          { this.renderJSX(location.pathname) }
        </div>
      );
    }
}

Landing.propTypes = {
  userLogin: PropTypes.func,
  userSignup: PropTypes.func,
  history: PropTypes.object,
  location: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
