import React from 'react'

import './LeftSidebar.css'
import {NavLink} from 'react-router-dom'
import Globe from '../../assets/Globe.png'

const LeftSidebar = () =>{
    return(
       <div className='left-sidebar'>
         <nav className='side-nav'>
            <NavLink to='/' className='side-nav-links' activeClassName='active'>
               <p>Home</p>
            </NavLink>
         </nav>
           <div className='side-nav-div'>
             <div><p>PUBLIC</p></div>
             <NavLink to='/Questions' className='side-nav-links' activeClassName='active' style={{paddingLeft: "40px"}}>
                <img src= {Globe} alt='Globe' style={{width: '18px', paddingLeft:"5px"}}/>
                <p style={{paddingleft: "10px"}}>Questions</p>
             </NavLink>
             <NavLink to='/tags' className='side-nav-links' activeClassName='active'>
                 <p>Tags</p>
             </NavLink>
             <NavLink to='/Users' className='side-nav-links' activeClassName='active'>
                 <p>Users</p>
             </NavLink>
           </div>

       </div>

    )
}

export default LeftSidebar