import React from 'react'
import RepositoryCard from './RepositoryCard';
import { useState } from 'react';


function RepositoryList({repositories}) {

    const [sortBy, setSortBy] = useState('recent');

    const sortRepositories = [...repositories].sort((a,b) => {
        if(sortBy == "stars"){
            return b.stargazers_count - a.stargazers_count;
        }
        return new Date(b.updated_at) - new Date(a.updated_at);
    });

  return (
    <div className='w-full flex flex-col gap-4 mt-6'>
        <h2 className='text-xl font-bold text-center text-white mb-2'>Public Repositories</h2>
        <select 
            value={sortBy}
            onChange={(e)=> setSortBy(e.target.value)}
            className='bg-slate-800 text-white border border-slate-600 rounded-sm px-3 py-2'>
                <option value="recent">Most Recent</option>
                <option value="stars">Most Stars</option>
            </select>
        {/* we are using ternory operator to check if the repo exists or not if not exist them return the message */}
        {repositories.length >0 ? (
            sortRepositories.map((repo) =>(
                <RepositoryCard key={repo.id} repo={repo}/>//React uses a unique key to identify each element in a rendered list. It helps React update lists efficiently.
            ))
        ):(
            <p className="text-center text-red-200 py-6">No public repositories found.</p>
        )
            }                                       
    </div>
  );
}

export default RepositoryList