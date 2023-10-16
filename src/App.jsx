import {React,Component} from "react";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './css/style.css';
import Rps from "./pages/Rps";
import { RpsProvider } from "./context";
import Navbar from "./components/Navbar";

class App extends Component{
    render(){

        return(
          <RpsProvider>
            <Router>
              <Navbar />
              <Routes>
                <Route path="/" element={ <Rps /> } exact/>
              </Routes>
            </Router>
            
          </RpsProvider>
          
        )
        }
}
export default App