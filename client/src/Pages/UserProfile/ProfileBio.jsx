import React from 'react'

const ProfileBio = ({currentprofile}) => {
    return(
        <div>
          <div>
          {
            currentprofile?.tags.length !== 0 ? (
                <>
                    <h4>Tags Watched</h4>
                    {
                        currentprofile?.tags.map((tag) => (
                            <p key={tag}>{tag}</p>
                        ))
                    }
                </>
            ) : (
                <p>0 tags watched</p>
            )
           }

          </div>
            <div>
             {
                currentprofile?.about ? (
                    <>
                        <h4>About</h4>
                        <p>{currentprofile?.about}</p>
                    </>
                ) : (
                    <p>no bio found</p>
                )
             }
            </div>
          
        </div>
    )
}

export default ProfileBio