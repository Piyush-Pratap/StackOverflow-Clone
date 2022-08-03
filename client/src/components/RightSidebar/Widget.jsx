import React from 'react'

import './RightSidebar.css'
import comment from '../../assets/message.png'
import pen from '../../assets/pencil.png'
import blocklog from '../../assets/stacklogo.png'


const Widget = () =>{
    return (
       <div className='widget'>
            <h4>The Overflow blog</h4>
            <div className='right-sidebar-div-1'>
              <div className='right-sidebar-div-2'>
                <img src={pen} alt="pen" width='18'/>
                <p>Obeservability is the key of feature of software (and your Devops carrer)</p>
                </div>
              <div className='right-sidebar-div-2'>
                <img src={pen} alt="pen" width='18'/>
                <p>Podcast 374: How valuable is your screen name? </p>
               </div>
            </div>
            <h4>Featured on meta</h4>
            <div className='right-sidebar-div-1'>
              <div className='right-sidebar-div-2'>
                <img src={comment} alt="comment" width='18'/>
                <p>Review queue workflows: final release</p>
                </div>
              <div className='right-sidebar-div-2'>
                <img src={comment} alt="comment" width='18'/>
                <p>Please welcome Valued Associates: #958-V2blast #959-Spencer G</p>
               </div>
               <div className='right-sidebar-div-2'>
                <img src={blocklog} alt="comment" width='18'/>
                <p>Outdated Answers: accepted answer is now unpinned on Stack Overflow</p>
               </div>
            </div>
            <h4>Hot Meta Posts</h4>
            <div className='right-sidebar-div-1'>
              <div className='right-sidebar-div-2'>
                <p>38</p>
                <p>Why was this spam flag declined,yet the question marked as spam ?</p>
                </div>
              <div className='right-sidebar-div-2'>
                <p>20</p>
                <p>What is the best course of action when a user as high enough rep to.. </p>
               </div>
               <div className='right-sidebar-div-2'>
                <p>14</p>
                <p>Is a link to the 'How to ask' help page a useful comment ? </p>
               </div>
            </div>
       </div>

    )
}
export default Widget



















