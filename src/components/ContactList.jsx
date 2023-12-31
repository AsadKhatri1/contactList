import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {
    
    const renderContactList=props.contacts.map((contact, index)=>{
        return(
            <ContactCard key={index} contact={contact} index={index} />
        )
    })

  return (
    <div className='ui celled list container'>
        
    {renderContactList}
    
    </div>
  );
}

export default ContactList;
