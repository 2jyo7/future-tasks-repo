"use client"
import { formProps } from '@/types '
import axios from 'axios'
import { log } from 'console'
import React, { useEffect, useState } from 'react'

const HelpCardTitle = ({params}: {params: any}) => {
    const {title} = params;
    const [cardTitle, setCardTitle] = useState<formProps[]>([])
console.log(title);

 useEffect(() => {
     async function getCardTitle() {
      const res = await axios.get(`http://localhost:3500/getHelpCardByTitle/${title}`);
      console.log(res);
      
      return  setCardTitle(res.data);
      }
      getCardTitle();
 },[])

 console.log(cardTitle);





  return (
    <div className=" w-full min-h-screen">

<div className="grid gap-6 ">
<section className="container p-6 mx-auto space-y-3 dark:text-white ">
  <h4 className="text-xl font-bold text-white capitalize dark:text-gray-300 md:text-3xl text-center">
   Solutions Card 
  </h4>
  <p className="text-center text-white">
    These cards will help you get answers to some of your questions, possibly save you a little time.
  </p>
  <div className="flex items-center justify-center">
    <div className="grid gap-20 my-8 sm:grid-cols-1 lg:grid-cols-2 translate-x-1/4 xl:grid-cols-1 w-full">
      {/* cards */}
      {cardTitle && cardTitle.map(card => (
        <div key={card.id}>
       <div className="max-w-2xl text-center">
          <div className="object-cover object-center w-full h-48 mx-auto rounded-lg
            bg-gradient-to-b from-white-500 to-orange-500 border-4 border-blue-200  dark:border-gray-600">
            <div className=" px-4 py-8">
              <h2 className="text-lg font-bold dark:text-white">
              {card.title}
              </h2>
              <span className="mb-2 mt-2  font-medium dark:text-white">
                {card.description}
              </span>
            </div>
          </div>
      </div>
      </div>
            ))}
      
    </div>
  </div>
</section>



    </div>
    </div>
  )
}

export default HelpCardTitle