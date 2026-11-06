import "./App.css"
import SearchBar from './components/SearchBar'

function App() {


  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed text-white flex flex-col items-center px-4 py-12"
    style={{
      backgroundImage:"url('/images/stacked-peaks-haikei.png')"
    }}>
      <SearchBar title="Github Profile Finder" />
      
    </div>
  )
}

export default App
