import React from 'react'
import { acData } from '../data/ac'

const MenFashions = () => {

    const firstFiveImages = acData.slice(0,5)
  return (
    <>
    <h2>AC</h2>
    <div className='ProSection'>
        
        {
            firstFiveImages.map((item)=>{
                return(
                  
                 
                    <div className="imageBox">
                        
                    <img  className='proImage' src={item.image} alt="image" />
                    

                    </div>
        )

    })
      





}
    </div>
    </>
  )
}

export default MenFashions