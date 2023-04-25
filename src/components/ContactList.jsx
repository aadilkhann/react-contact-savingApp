import React from 'react'
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';

const ContactList = (props) => {

  // const contacts = [{
  //   "id": 1,
  //   "Name": "Adil",
  //   "email": "email.com",
  //   "contact": 6969696
  // }]

  // const renderContact = contacts.map((contact) => {
    const renderContact = props.contacts.map((contact) => {
    return (
      <ContactCard contact={contact} />
    )
  })
  return (
    <div className="main">
      <h2>Contact List</h2>
      <Link to="/add">
      <button className='ui button blue right'>Add Contact</button>
      </Link>
      <div className='ui celled list'>
        {renderContact}
      </div>
    </div>
  )
}

export default ContactList
