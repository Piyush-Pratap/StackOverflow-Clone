import React from 'react'

const Avatar = ({children, backgroundColor, py, px, color , fontSize,borderRadius, cursor}) =>{
     const style={
        backgroundColor,
        padding: '${py} ${px}',
        color: color || 'black',
        fontSize,
        borderRadius,
        textAlign: "center",
        cursor: cursor || null,
        textDecoration: "none"
       
     }

    return(
       <div style={style}>
           {children}

       </div>

    )
}

export default Avatar