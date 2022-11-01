import Home from "./pages/Home";
import SignUp from "./pages/Signup";
import SignIn from './pages/Signin';
import Error  from "./pages/Error";
import Profiles from "./pages/Profiles";
import Footer from "./Components/Footer";
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import Navbar from "./Components/Navbar";

function App() {
  return (<>
    <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Signup" element={<SignUp/>}></Route>
        <Route path="/Signin" element={<SignIn/>}></Route>
        <Route path="/Profiles/:userName" element={<Profiles/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
