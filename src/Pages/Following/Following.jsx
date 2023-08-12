import React from 'react'
import "./Following.css"
const Following = () => {
  return (
    <div className='following'>
        <img src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.all_caught_up_feed_lightmode.png-26-1b95f406729630f5.png" alt="You All Caught Up" />
        
        <div className='caughtUptext'>You're all caught up</div>
        <div className='feedText'>Find More Content in your area of interest</div>
    </div>
  )
}

export default Following