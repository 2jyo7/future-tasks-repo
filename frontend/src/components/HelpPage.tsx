"use client"
import { formProps } from '@/types ';
// src/components/HelpPage.tsx
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';



const HelpPage= () => {
const [helpCards, setHelpCards] = useState<formProps[]>([])
const [searchQuery, setSearchQuery] = useState('');

 useEffect(() => {
     async function getHelpCards() {
      const res = await axios.get("http://localhost:3500/getHelpCard");
      return  setHelpCards(res.data);
      }
      getHelpCards();
 },[])

 console.log(helpCards);

 useEffect(() => {
  // Filter cards based on search query
  const filtered = helpCards.filter((card: any) =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  setHelpCards(filtered);
}, [searchQuery]);

 


  return (
    <div className=" w-full min-h-screen">
      <div className="container mx-auto p-4 h-48  bg-gradient-to-b rounded-md from-white-500 to-white-500 border-4 border-blue-200">
        <h1 className="text-4xl font-bold text-center m-4">How can we help?</h1>
        <div className="max-w-lg mx-auto mb-8">
          <input
            type="text"
            placeholder="Search "
            className="w-full p-3 border border-gray-300 rounded-md bg-slate-100"
            value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          
          />
        </div>
        </div>


 {/* cardss */}

 <section className="container p-6 mx-auto space-y-3 dark:text-white ">
  <h4 className="text-xl font-bold text-white capitalize dark:text-gray-300 md:text-3xl text-center">
   Solutions Card 
  </h4>
  <p className="text-center text-white">
    These cards will help you get answers to some of your questions, possibly save you a little time.
  </p>
  <div className="flex items-center justify-center">
    <div className="grid gap-20 my-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      {/* cards */}
            {helpCards && helpCards.map(card => (
            <div key={card.id}>
       <div className="max-w-2xl text-center">
          <div className="object-cover object-center w-full h-48 mx-auto rounded-lg
            bg-gradient-to-b from-white-500 to-white-500 border-4 border-blue-200  dark:border-gray-600">
            <div className=" px-4 py-8">
              <h2 className="text-lg font-bold dark:text-white">
              <Link href={`/help-card/${card.title}`}>
              {card.title}
              </Link>
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
  );
};

export default HelpPage;
