import React from 'react'

const  Cards= (props) => {
  return (
    <div>
        <div className='card'>
            <img src={props.img} alt="" />
            <div>
                <h1>{props.user},{props.age}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, eum.</p>
                <button>View Profile</button>
            </div>
        </div>
    </div>
  )
}

export default Cards