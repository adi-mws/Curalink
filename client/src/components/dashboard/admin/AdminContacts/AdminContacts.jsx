import React from 'react'
import './AdminContacts.css'
import searchIcon from '../../../../assets/icons/search-normal.png'


export default function AdminContacts() {

  const contactList = [
    {
      name: "Alice Johnson",
      gmail: "alice.j@gmail.com",
      phoneNo: "9876543210",
      date: "2025-06-20"
    },
    {
      name: "Bob Smith",
      gmail: "bob.smith@gmail.com",
      phoneNo: "9123456780",
      date: "2025-05-15"
    },
    {
      name: "Charlie Ray",
      gmail: "charlie.ray@gmail.com",
      phoneNo: "9988776655",
      date: "2025-06-01"
    },
    {
      name: "Diana Cruz",
      gmail: "diana.cruz@gmail.com",
      phoneNo: "8877665544",
      date: "2025-04-25"
    },
    {
      name: "Evan Lee",
      gmail: "evan.lee@gmail.com",
      phoneNo: "9112233445",
      date: "2025-06-10"
    }
  ];

  return (
    <div className='AdminContacts admin-page'>
      <div className='contacts-header admin-page-header'>
        <div className="header-title">Contacts</div>
        <div className="search-bar-wrapper">
          <input type="text" className="search-bar" placeholder='Search contacts' />
          <button className='search-submit-button'><img src={searchIcon} alt="search-icon" /></button>
        </div>
      </div>

      <div className="contacts-body admin-page-body">
        {
          contactList?.map((contact,index) => (
            <div className="admin-contacts" key={index} onClick={() => {}}>
              <p className='contact-name'>{contact.name}</p>
              <p className='contact-gmail'>{contact.gmail}</p>
              <p className='contact-phone'>{contact.phoneNo}</p>
              <p className='contact-date'>{contact.date}</p>
              <button className='view-button'>View</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}
