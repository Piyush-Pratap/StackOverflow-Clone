import React from 'react'

const WidgetTags = () =>{
    const tags = ['C', 'CSS', 'express', 'firebase', 'html', 'Java', 'JavaScript', 'Mongodb', 'Mysql', 'next.js', 'node.js','php','Python','reactjs' ]
    return(
        <div className='widget-tags'>
         <h3>Watched tags</h3>
            <div className='widget-tags-div'>
               {
                 tags.map((tag) => (
                    <p key={tag}>{tag}</p>
                 ))
               }
            </div>

        </div>
    )
}
export default WidgetTags