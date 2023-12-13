import React, {useState} from 'react'
import Tour from './Tour'
function Tours ({tours, removeTour}){
    
  
    return (
      <section className="container">
        <div >
            <h2>Our Tours</h2>
            <div className="bottom-border"></div>
        </div>

        <div className="box">
            {tours.map((tour) => {
                return (<Tour key={tour.id} {...tour} removeTour={removeTour}>

                </Tour>)
            })}
        </div>
      </section>
    )
  }
  
  export default Tours
  