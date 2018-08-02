import React from 'react';
import PropTypes from 'prop-types';

const emptyState = {
  bio: '',
  firstName: '',
  lastName: '',
};

export default class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.profile || emptyState;
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onComplete(this.state);
  }

  render() {
    return (
      <form className="profile-form">
        <label htmlFor="bio">biography</label>
        <textarea
        name="bio"
        />
        <label htmlFor="firstName">First</label>
        <input
          name="firstName"
        />
        <label htmlFor="lastName">Last</label>
        <input
          name="lastName"
          />
          <button type="submit">BUTTON</button>
      </form>
    );
  }
}

ProfileForm.propTypes = {
  onComplete: PropTypes.func,
  profile: PropTypes.object,
};
