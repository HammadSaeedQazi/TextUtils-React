import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import {useState} from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('primary');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'primary'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabeled", "success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing !";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now !";
      // }, 1500);
    }
    else{
      setMode('primary');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabeled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      {/* <Router> */}
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/"> */}
            <TextForm heading='Enter the text to analyze below:' mode={mode} showAlert={showAlert}/>
          {/* </Route> */}
          {/* <Route path="/home">
            <TextForm heading='Enter the text to analyze below:' mode={mode} showAlert={showAlert}/>
          </Route> */}
        {/* </Switch>
      </Router> */}
    </>
  );
}

export default App;
