import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopNavbar from "./components/Layout/TopNavbar";
import Sidebar from "./components/Layout/Sidebar";

// Pages
import Dashboard from "./pages/Dashboard";
import Messages from "./pages/Messages";


function App() {
  return (
    // <Router>
      <div className="App flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col bg-gray-50 dark:bg-gray-400">
          <TopNavbar />
          <main className="flex-1 overflow-y-auto p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/messages" element={<Messages />} />
            </Routes>
          </main>
        </div>
      </div>
    // </Router>
  );
}

export default App;
