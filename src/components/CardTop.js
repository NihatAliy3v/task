import React from 'react';

function CardTop(props) {
  return (
    <div>
        <div className='card-top'>
            <h2 className='notifications'>Notifications <span>{props.count}</span></h2>
            <p className='mark'>Mark all as read</p>
        </div>   
    </div>
  )
}

export default CardTop;