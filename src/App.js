 import { useState } from "react";
import Navbar from "./component/Navbar";
import Textform from "./component/Textform";

import "./App.css";
import About from "./component/About";
import Alert from "./component/Alert";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
function App() {

// change dark mode or light mode use useState

const [mode, setMode] = useState('light');
const [alert, setAlert] = useState(false);


// show alert function

const showAlert = (massage , type) =>{
  setAlert({
    msg : massage,
    type : type
  })

  setTimeout(()=>{
    setAlert(false);
  },1500)

}
 

const toggleMode = ()=>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = 'gray';
    document.body.style.color = 'white';
    showAlert("Enable Dark Mode...","success");
    document.title = "Text editor-Dark mode";
    
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    showAlert("Enable Light Mode...","warning");
    document.title = "Text edito-light mode";
    
  }
}

  return (
    <>

    <BrowserRouter>
    <Navbar title="Text Editor" mode={mode} toggleMode={toggleMode} showAlert={showAlert}  />
    <Alert alert={alert} />
      <Routes>
        <Route path="/" exact element={<Textform  showAlert={showAlert}/>} />
        <Route path="/about"  element={<About toggleMode={toggleMode} mode={mode} />}/>
       

      </Routes>

    </BrowserRouter>
    
     
    
    
    </>
  );
}

export default App;
  