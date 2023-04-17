import React from 'react'

const ContactCard = (props) => {
    const {id,name,email,contact}=props.contact;
    console.log(name);
    console.log(email);
    console.log(contact);
  return (
    <div>
      <div className="item">
          <div className="content">
            <div className="header">{name}</div>
            <div>{email}</div>
            <div>{contact}</div>
          </div>
          <i className='trash alternate outline icon'
           style={{
            color:'red',marginTop:'7px'
          }}></i>
        </div>
    </div>
  )
}

export default ContactCard
