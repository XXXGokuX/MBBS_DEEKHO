import Navbar from "./components/Navbar";
import College from "./pages/College/College";
import Home from "./pages/Home/Home";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import SingleCollege from "./pages/SingleCollege/SingleCollege";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
     <div className="app">
       <BrowserRouter>
          <Routes>
               
               <Route path="/" element={<Home/>} />
               <Route path='/colleges' element= {<College/>}/>
               <Route path="/colleges/:id" element={<SingleCollege/>}/>
               <Route path='/login' element={<Login/>} />
               <Route path="/register" element={<Register/>} />
                
          </Routes>
          <Navbar/>

       </BrowserRouter>  
     </div>
  );
}

export default App;
