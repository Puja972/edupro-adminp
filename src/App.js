
import Header from "./component/Header";
import Trainers from "./component/Trainers";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Loginform from "./component/Loginform";
import Dashboard from "./component/Dashboard";
import Admins from "./component/Admins";
import TrainerLoginform from "./component/TrainerLoginform";
import Footer from "./component/Footer";

function App() {
  return (

    
      
      <BrowserRouter>
      <Header />
      <TrainerLoginform />
       <Routes>
         <Route path="/" element={<Loginform/>}></Route>
         <Route path="/dashboard" element={<Dashboard/>}></Route>
         <Route path="/admins" element={<Admins/>}></Route>
         <Route path="/trainers" element={<Trainers/>}></Route>
         
         </Routes>
         <Footer />
      </BrowserRouter>

  );
}

export default App;
