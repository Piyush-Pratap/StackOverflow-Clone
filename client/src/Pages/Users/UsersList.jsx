import React from 'react'
import { useSelector } from 'react-redux'
import User from './User'
import './Users.css'

const UsersList = () =>{

    const user = useSelector((state) => state.usersReducer)
    return(
        <div className='user-List-container'>
              {
                user.map((users) => (
                <User users={users} key={users?._id}/>
              ))
              }
        </div>
    )
}

export default UsersList