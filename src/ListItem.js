import React from 'react'
import './ListItems.css'
const ListItem = (props) => {
  const items=props.items;
  const listItems=items.map(e=>{
    return<div className='list' key='item.key'>
        <p>
            {e.text}
        </p>
    </div>
  })
    return (
    <div>
      {listItems}
    </div>
  )
}

export default ListItem
