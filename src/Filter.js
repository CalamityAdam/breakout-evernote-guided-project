import React from 'react';

const Filter = (props) => {
  return (
    <input 
      onChange={(event) => 
        props.addFilter(event.target.value)
      } 
      type="text" 
      name="filter" 
    />
  );
}

export default Filter;
