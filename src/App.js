import logo from './logo.svg';
import './App.css';

import Navbar from './Navbar/Navbar'
import UploadNews from './pages/UploadNews';
import RoutePage from './Routes/RoutePage';
import HomePage from './pages/HomePage';


function App() {

  
  return (
    <div >
     {/* <Navbar/>
     <UploadNews/> */}
     <RoutePage/>
     {/* <HomePage newstype="science"/> */}
    </div>
  );
}

export default App;
