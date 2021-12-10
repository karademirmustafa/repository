
import './app.css';
import Navbar from './components/navbar/Navbar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="app">
   <Topbar/>
   <Navbar/>
   <Home/>
    </div>
  );
}

export default App;
