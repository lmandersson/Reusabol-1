import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import './UserHome.css';
import Header from '../Header/Header';
import Title from '../atomic-components/Title/Title';
import Map from '../Map/Map';
import actions from '../../redux/actions';

export function UserHome ({ userData, getUserName, getUserByEmail }) {

  useEffect(() => {
    getUserName();
    getUserByEmail('linnea.m.andersson@gmail.com');
  }, []);

  return (
    <div className="user-home">
      <Header />
      {userData && <Title text={`Hi ${userData.firstName}!`} />}
      <Map />
    </div>
  )
}

const mapStateToProps = (state) => {
  return { userData: state.user.userData, }
}

const mapDispatchToProps = (dispatch) => ({
  getUserName: () => dispatch(actions.user.getUserName()),
  getUserByEmail: (email) => dispatch(actions.user.getUserByEmail(email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserHome);
