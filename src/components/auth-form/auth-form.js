import React from 'react';
import PropTypes from 'prop-types';

const emptyState = {
  username: '',
  email: '',
  password: '',
};

export default class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = emptyState;
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onComplete(this.state);
    this.setState(emptyState);
  }

  renderEmailInput = (type) => {
    return type === 'signup' && (
      <input
        name="email"
        placeholder="email"
        type="email"
        value={ this.state.email }
        onChange={ this.handleChange }
        />
    );
  }

  render() {
    let { type } = this.props;
    type = type === 'login' ? type : 'signup';
    return (
      <form className="auth-form" onSubmit={ this.handleSubmit }>
        <input
          name="username"
          placeholder="username"
          type="text"
          value={ this.state.username }
          onChange={ this.handleChange }
        />

        { this.renderEmailInput(type) }

        <input
          name="password"
          placeholder="password"
          type="password"
          value={ this.state.password }
          onChange={ this.handleChange }
        />
        <button type="submit">{ type }</button>
      </form>
    );
  }
}

AuthForm.propTypes = {
  onComplete: PropTypes.func,
  type: PropTypes.string,
};
