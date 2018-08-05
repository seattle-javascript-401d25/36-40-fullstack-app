import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ImageForm from '../image-form/image-form';
import createImageApiRequest from '../../actions/image';

const mapDispatchToProps = dispatch => ({
  createImage: image => dispatch(createImageApiRequest(image)),
});


class Dashboard extends React.Component {
  render() {
    const { createImage } = this.props;
    return (
      <div className="dashboard">
        <h1>Hello from Dashboard</h1>
        <ImageForm onComplete={ createImage } />
      </div>
    );
  }
}

Dashboard.propTypes = {
  createImage: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Dashboard);
