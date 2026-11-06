import React from 'react'

function RepositoryCard({repo}) {
  return (
    <div className='w-full bg-stone-100 rounded-xl p-5 border border-slate-700 shadow-lg'>
        <h3 className='text-lg font-bold text-black mb-2'>{repo.name}</h3>
        <p className='text-red-600 text-sm mb-3'>{repo.description || "No description available"}</p>
        <p className='text-xs text-red-600 mb-3'>{repo.language || "Not specified"}</p>
        <p className='text-sm text-yellow-600 font-semibold'>⭐ {repo.stargazers_count} Stars</p>
        <a className='inline-block mt-3 text-sm text-blue-400 hover:text-blue-300 font-semibold transition' href={repo.html_url} target="_blank" rel="noreferrer">View Repository</a>
    </div>
  )
}

export default RepositoryCard