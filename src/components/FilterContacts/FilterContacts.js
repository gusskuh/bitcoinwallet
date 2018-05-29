import React from 'react'; 

const FilterContacts = (props) => {



  return (
  <div>
    <form onInput={props.search}>
      Search: <input  type="text" />
    </form>
  </div>
  )
      }


export default FilterContacts;


