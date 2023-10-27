import React from 'react'

const ExploreCard = ({cardData, currentCard, setCurrentCard}) => {

    // console.log(cardData.title);

  return (
    <div className={`p-7 w-[25vw] flex flex-col gap-3 ${cardData.title === currentCard ? 
        'bg-white shadow-[12px_12px_0_#fdda0d]' : 
        'bg-gray-800'}`
    }>

        <h3 className={`font-bold text-xl ${cardData.title === currentCard ? 'text-black' : 'text-white'}`}>
            {cardData.title}
        </h3>

        <p className={`${cardData.title === currentCard ? 'text-gray-800' : 'text-slate-400'}`}>
            {cardData.description}
        </p>

        <div className={`flex justify-between p-4 mt-6 border-t-2 border-dashed ${cardData.title === currentCard ? 'border-gray-400' : 'border-slate-300'}`}>
            <p className={`${cardData.title === currentCard ? 'text-gray-800' : 'text-slate-400'}`}>
                {cardData.courseLevel}
            </p>
            <p className={`${cardData.title === currentCard ? 'text-gray-800' : 'text-slate-400'}`}>
                {cardData.Lesson}
            </p>
        </div>
    </div>
  )
}

export default ExploreCard