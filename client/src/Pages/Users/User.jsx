import React from 'react'
import { Link } from 'react-router-dom'
import './Users.css'

const User = ({users}) => {
    return(
       <Link to={`/Users/${users._id}`} className='user-profile-link'>
         <h3>{ users.name.charAt(0).toUpperCase() }</h3>
        <h5>{ users.name }</h5>
       </Link>
    )
}

export default User