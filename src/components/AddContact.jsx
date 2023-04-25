import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const AddContact = (props) => {
    const [contacts, setContacts] = useState({ name: "", email: "", contact: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        if(contacts.name==="" || contacts.email==="" || contacts.contact===""){
            alert("All the fields are manadtory")
        }
        props.contactHandler(contacts)
        setContacts({ name: "", email: "", contact: "" });
    }
    let name, value;
    const handleChange = (e) => {
        name = e.target.name;
        value = e.target.value;
        setContacts({ ...contacts, [name]: value })
    }
    return (
        <div className='ui main'>
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="Field">
                    <label>Name</label>
                    <input type="text" name="name" value={contacts.name} placeholder='Enter Your Name' onChange={handleChange} />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="email" name="email" value={contacts.email} placeholder='Enter Your Email' onChange={handleChange} />
                </div>
                <div className="field">
                    <label>Contact No.</label>
                    <input type="number" name="contact" value={contacts.contact} placeholder='Enter Your Contact no.' onChange={handleChange} />
                </div>
                <Link to="/">
                <button className='ui button blue'>Add</button>
                <button className='ui button blue'>Show Contact</button>
                </Link>
            </form>
        </div>
    )
}

export default AddContact
