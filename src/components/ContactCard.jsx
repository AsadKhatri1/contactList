import React from 'react';
import product from '../images/user.png'

const ContactCard = ({contact,index}) => {
  return (
   
        <div className="item row">
          <img src={product} alt="man"  className='ui avatar image' />
                <div className="content">
                    <h1 className="header">
                    {contact.name} </h1>
                    <p>{index+1}</p>
                    <div style={{color:'black', fontSize:'1.4rem', paddingBottom:'15px'}}>{contact.email}</div>
                    <div style={{color:'black', fontSize:'1.4rem', paddingBottom:'15px'}}>{contact.number}</div>
                  
                </div>
                <i className='trash alternate outline icon' style={{color:'red', fontSize:'1.1rem', cursor:'pointer'}} ></i>
            </div>
   
  );
}

export default ContactCard;
