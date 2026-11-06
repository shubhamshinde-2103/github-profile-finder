import { useState } from "react";
import ProfileCard from "./ProfileCard";
import RepositoryList from "./RepositoryList";

function SearchBar({title}) {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error , setError] = useState("");

  async function  handleSearch(){
    if(!username.trim()){
      alert("Please enter a Github username");
      return;
    }
    setError("");
    setUserData(null);
    setRepositories([]);
    setLoading(true);
    try{
      const response = await fetch(`https://api.github.com/users/${username}`);

      if (!response.ok) {
      throw new Error("GitHub user not found");
    }
      const data = await response.json();
      setUserData(data)
      console.log(data);

      const repo = await fetch(`https://api.github.com/users/${username}/repos`);
      if(!repo.ok){
        throw new Error("Github is not found")
      }
      const repodata = await repo.json();
      setRepositories(repodata);
      console.log(repodata)
    }catch(error){
      setUserData(null);
      setRepositories([]);
      setError(error.message);
      console.log(error);
    }
    finally{
      setLoading(false);
    }
   
  }

  return (
    <div className="w-full max-w-3xl flex flex-col items-center gap-4 mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center  ">{title}</h1>
        <input type="text" 
        className="w-full bg-slate-800 text-white rounded-lg px-4 py-3 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-red-500"
         placeholder=' Enter Github username'
         onChange={(e)=> setUsername(e.target.value)}
         onKeyDown={(e)=>{
          if(e.key === "Enter"){
            handleSearch();
          }
         }}
         
         />
         {userData && <ProfileCard userData={userData}/>}
         {userData && <RepositoryList repositories={repositories}/>}
         
        <button 
        onClick={handleSearch}
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-6 py-3 transition mt-4 cursor-pointer"
        >{loading ? "Searching..." : "Search"}
         </button>

        {error && (
        <p className="text-red-200 text-lg mt-3 text-bold">
        {error}
        </p>
        )}
    </div>
  )
}

export default SearchBar