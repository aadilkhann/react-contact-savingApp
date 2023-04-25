import React from 'react'
import dp from '../assets/DP.jpg'

const ContactCard = (props) => {
  const { name, email, contact } = props.contact;
  
  return (
    <div className="item">
      <img className='ui avatar image' src={dp} alt="user" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
        <div>{contact}</div>
      </div>
      <i className='trash alternate outline icon'
        style={{
          color: 'red', marginTop: '7px'
        }}></i>
    </div>
  )
}

export default ContactCard
