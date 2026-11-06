
function ProfileCard({userData}) {
  return (
    <div className='w-full max-w-2xl bg-slate-800 rounded-sm p-6 flex items-center gap-6 border border-slate-700'>
        <img className="w-28 h-28 rounded-full border-4 border-slate-600 object-cover" src={userData.avatar_url} alt="github avatar" />
        <div className="flex-1 min-w-0">
        <h2 className="text-2xl font-bold text-white">{userData.name || userData.login}</h2>
        <p className="text-slate-400 text-sm">@{userData.login}</p>
        <p className="text-slate-400 text-sm mt-1">📍{userData.location || "Location not available"}</p>
        <a href={userData.html_url} target="_blank" rel="noreferrer" className="inline-block mt-3 text-blue-400 hover:text-blue-300 text--sm font-semibold">View Github Profile</a>
        <p className="text-slate-300 text-sm mt-2">{userData.bio || "No bio available"}</p>
        <div  className="flex flex-wrap gap-6 mt-4 text-slate-300 font-semibold">
        <p>Followers: {userData.followers}</p>
        <p>Following: {userData.following}</p>
        <p>Repositories: {userData.public_repos}</p>
            </div>
        </div>
    </div>
  )
}

export default ProfileCard