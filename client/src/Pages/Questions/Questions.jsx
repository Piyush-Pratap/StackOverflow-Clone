import React from 'react'

import '../../App.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RIghtSidebar from '../../components/RightSidebar/RightSidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'

const Questions = () => {
    return(
        <div className='home-container-1'>
          <LeftSidebar/>
            <div className='home-container-2'>
                <HomeMainbar/>
                <RIghtSidebar/>
            </div>
        </div>
    )
}

export default Questions