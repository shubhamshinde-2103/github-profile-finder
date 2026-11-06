import React from 'react'
import RepositoryCard from './RepositoryCard';


function RepositoryList({repositories}) {
  return (
    <div className='w-full flex flex-col gap-4 mt-6'>
        <h2 className='text-xl font-bold text-center text-white mb-2'>Public Repositories</h2>
    {repositories.map((repo) =>(
        <RepositoryCard key={repo.id} repo={repo}/> //React uses a unique key to identify each element in a rendered list. It helps React update lists efficiently.
    ))}
    </div>
  );
}

export default RepositoryList