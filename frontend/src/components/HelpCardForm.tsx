"use client";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';



const HelpCardForm = () => {
    const router = useRouter();
    const [ID, setID] = useState<string>("")
    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<string>("")


     const handleDataSubmit = async (e: any) => {
        e.preventDefault();
     const res =  await axios.post("http://localhost:3500/postHelpCard", {
            ID, title, description
        })
        setID("");
        setDescription("");
        setTitle("");
        router.push("/");
     };

  return (
    <div className=''>
        <div className="max-w-xl py-6 px-8 h-96 mt-20 rounded shadow-xl bg-purple-500">
  <form action="" >
    <div className="mb-6">
      <label htmlFor="cardId" className="block text-gray-800 font-bold">
        ID:
      </label>
      <input
        type="text"
        id="cardId"
        placeholder="username"
        className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
        value={ID}
        onChange={(e) => setID(e.target.value)}
      />
    </div>
    <div className='mb-6'>
      <label htmlFor="title" className="block text-gray-800 font-bold">
        Title:
      </label>
      <input
        type="text"
        id="title"
        placeholder="Title"
        className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      
     
    </div>
    <div className='mb-6'>
      <label htmlFor="description" className="block text-gray-800 font-bold">
        Description:
      </label>
      <input
        type="text"
        id="description"
        placeholder="Description"
        className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      
      />
     
    </div>
    
    <button className="cursor-pointer py-2 px-4 block mt-6 bg-blue-700 hover:bg-blue-600 text-white font-bold w-full text-center rounded" onClick={handleDataSubmit}>
      Add Card
    </button>
  </form>
</div>

    </div>
  )
}

export default HelpCardForm