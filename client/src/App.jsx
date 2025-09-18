import './App.css'
import TopNavbar from './components/Layout/TopNavbar'
import Sidebar from './components/Layout/Sidebar'

function App() {
  return (
    <div className="App flex h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-50 dark:bg-gray-400">
        <TopNavbar />
        {/* Main content */}
      </div>
    </div>
  );
}


export default App
