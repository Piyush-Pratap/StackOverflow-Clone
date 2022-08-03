import React, { useState} from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import moment from 'moment'
import ProfileBio from './ProfileBio'
import EditProfileForm from './EditProfileForm'

import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import Avatar from '../../components/Avatar/Avatar'
import './UsersProfile.css'

const UserProfile = () =>{
    const { id } = useParams()
    const users = useSelector((state) => state.usersReducer)
    const currentprofile = users.filter((user) => user._id === id)[0]
    const currentUser = useSelector((state) => state.currentUserReducer)
    
    const [Switch, setSwitch] = useState(false)
   
    return(
        <div className='home-container-1'>
          <LeftSidebar/>
           <div className='home-container-2'>
             <section>
                <div className='user-deatils-container'>
                   <div className='user-details'>
                       <Avatar  backgroundColor="purpole" color='white' fontSize='50px' px='40px' py='30px'>
                           {currentprofile?.name.charAt(0).toUpperCase()}
                       </Avatar>
                       <div className='user-name'>
                           <h1>{currentprofile?.name}</h1>
                           <p>Joined {moment(currentprofile?.joinedOn).fromNow()}</p>
                       </div>
                   </div>
                   {
                    currentUser?.result._id === id && (
                        <button type='button' onClick={() => setSwitch(true)} className='edit-profile-btn'>Edit profile</button>
                                 
                        
                    )
                   }
                </div>
                <>
                    {
                        Switch ? (
                           <EditProfileForm currentUser={currentUser} setSwitch={setSwitch}/>
                        ) : (
                           <ProfileBio currentprofile ={currentprofile}/>
                        )
                    }
                </>
             </section>
           </div>
            
        </div>
    )
}

export default UserProfile