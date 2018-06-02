import uniqid from 'uniqid'

const contacts = [
  {
    "_id": "5a56640269f443a5d64b32ca",
    "picture": "https://www.shareicon.net/data/128x128/2016/05/24/769981_man_512x512.png",
    "name": "Ochoa Hyde",
    "email": "ochoahyde@renovize.com",
    "phone": "+1 (968) 593-3824"
  },
  {
    "_id": "5a5664025f6ae9aa24a99fde",
    "picture": "https://thumbs.dreamstime.com/z/happy-girls-icon-vector-young-woman-icon-illustration-face-people-icon-flat-cartoon-style-person-head-avatar-white-74926711.jpg",
    "name": "Hallie Mclean",
    "email": "halliemclean@renovize.com",
    "phone": "+1 (948) 464-2888"
  },
  {
    "_id": "5a56640252d6acddd183d319",
    "picture": "https://www.shareicon.net/data/128x128/2016/05/24/769977_people_512x512.png",
    "name": "Parsons Norris",
    "email": "parsonsnorris@renovize.com",
    "phone": "+1 (958) 502-3495"
  },
  {
    "_id": "5a566402ed1cf349f0b47b4d",
    "picture": "https://www.shareicon.net/data/128x128/2016/06/27/787486_people_512x512.png",
    "name": "Rachel Lowe",
    "email": "rachellowe@renovize.com",
    "phone": "+1 (911) 475-2312"
  },
  {
    "_id": "5a566402abce24c6bfe4699d",
    "picture": "https://thumbs.dreamstime.com/z/woman-cartoon-portrait-10940803.jpg",
    "name": "Dominique Soto",
    "email": "dominiquesoto@renovize.com",
    "phone": "+1 (807) 551-3258"
  },
  
  
];

function sort(arr) {
  return arr.sort( (a, b) => {
    if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
      return -1;
    }
    if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
      return 1;
    }

    return 0;
  })
}

function getContacts (filterBy = null) {
  return new Promise((resolve, reject) => { 
    var contactsToReturn = contacts;
    if (filterBy) {
      const {term} = filterBy;
      contactsToReturn = contacts.filter( contact => {
        return contact.name.toLocaleLowerCase().includes(term.toLowerCase()) ||
               contact.phone.toLocaleLowerCase().includes(term.toLowerCase()) ||
               contact.email.toLocaleLowerCase().includes(term.toLowerCase())
      })
    }
    resolve(sort(contactsToReturn))
  })
}

function getContactById (id) {
    return new Promise((resolve, reject) => {
      const contact = contacts.find( contact => contact._id === id)
      contact ? resolve(contact) : reject(`Contact id ${id} not found!`)
    })
}

function deleteContact(id) {
  return new Promise((resolve, reject) => { 
    const index = contacts.findIndex( contact => contact._id === id)
    if (index !== -1) {
      contacts.splice(index, 1)
    }

    resolve(contacts)
  })
}

function _updateContact(contact) {
  return new Promise((resolve, reject) => { 
    const index = contacts.findIndex( c => contact._id === c._id)
    if (index !== -1) {
      contacts[index] = contact
    }

    resolve(contacts)
  })
}

function _addContact(contact) {
  return new Promise((resolve, reject) => { 
    contact._id = uniqid()
    contact.picture = 'https://orig00.deviantart.net/28ad/f/2017/070/f/6/girl_transparent_by_artloverrarts-db1wzz2.png'      
    contacts.push(contact)
    resolve(contacts)
  })
}

function saveContact(contact) {
  return contact._id ? _updateContact(contact) : _addContact(contact)
}

function getEmptyContact() {
  return {
    picture: '',
    name: '',
    email: '',
    phone: ''
  }
}

export default {
  getContacts,
  getContactById,
  deleteContact,
  saveContact,
  getEmptyContact
}