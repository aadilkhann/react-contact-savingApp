import React from 'react'

const AddContact = () => {
  return (
    <div className='ui main'>
        <h2>Add Contact</h2>
        <form className="ui form">
            <div className="Field">
                <label>Name</label>
                <input type="text" name="name" placeholder='Enter Your Name'/>
            </div>
            <div className="field">
                <label>Email</label>
                <input type="email" name="name" placeholder='Enter Your Email'/>
            </div>
            <div className="field">
                <label>Contact No.</label>
                <input type="number" name="name" placeholder='Enter Your Contact no.'/>
            </div>
            <button className='ui button blue'>Add</button>
        </form>
    </div>
  )
}

export default AddContact
