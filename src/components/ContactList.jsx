import React from 'react'
import ContactCard from './ContactCard';

const ContactList = (props) => {
    // console.log(props.contacts);
    
    const renderContact=props.contacts.map((contact)=>{
      return(
        <ContactCard contact={contact}/>
      )
    })
  return (
    <div className='ui celled list'>
      {renderContact}
    </div>
  )
}

export default ContactList
