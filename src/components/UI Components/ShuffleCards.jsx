import React from 'react'

const ShuffleCards = () => {
  return (
    // <div className=' left-[6%] flex  mt-20'>
    //     <img className=' relative z-20 w-[35%]'
    //         src="../assets/card1.png" alt="card1-logo"
    //     />
    //     <img className=' relative left-[25%] -top-[10vh] z-30 w-[40%]'
    //         src="../assets/card2.png" alt="card2-logo" 
    //     />
    //     <img className=' relative left-[53%] -top-[6vh] z-40 w-[40%]'
    //         src="../assets/card3.png" alt="card3-logo" 
    //     />
    // </div>

    <div className=' flex relative left-[7%] mt-24'>
        <img className=' relative z-20 w-[40vw] h-[60vh]'
            src="../assets/card1.png" alt="card1-logo"
        />
        <img className=' relative right-[8vw] bottom-[8vh] z-30 w-[45%] '
            src="../assets/card2.png" alt="card2-logo" 
        />
        <img className=' relative right-[17vw] bottom-[5vh] z-40 w-[40vw] h-[70vh]'
            src="../assets/card3.png" alt="card3-logo" 
        />
    </div>
  )
}

export default ShuffleCards