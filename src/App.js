import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('primary');
  const [alert, setAlert] = useState(null);
  const [myStyle, setMyStyle] = useState({
    color:'black',
    backgroundColor:'white'
  });
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  // Code for color pallets
  // const removeBodyClasses = ()=>{
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-dark');
  //   document.body.classList.remove('bg-success');
  //   document.body.classList.remove('bg-warning');
  //   document.body.classList.remove('bg-primary');
  //   document.body.classList.remove('bg-info');
  //   document.body.classList.remove('bg-danger');
  // }

  const toggleMode = (cls)=>{
    // Code for color pallets
    // removeBodyClasses();
    // document.body.classList.add('bg-' + cls);
    if(mode === 'primary'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabeled", "warning");
      // document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing !";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now !";
      // }, 1500);
      setMyStyle({
        color:'white',
        backgroundColor:'rgb(19, 70, 110)'
      });
    }
    else{
      setMode('primary');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabeled", "success");
      // document.title = "TextUtils - Light Mode";
      setMyStyle({
        color:'black',
        backgroundColor:'white',
        border:'1px solid white'
      });
    }
  };

  return (
    <>
      <Router>
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <Switch>
          <Route exact path="/">
            <TextForm heading='Enter the text to analyze below:' mode={mode} showAlert={showAlert}/>
          </Route>
          <Route path="/home">
            <TextForm heading='Enter the text to analyze below:' mode={mode} showAlert={showAlert}/>
          </Route>
          <Route exact path="/about">
            <About myStyle={myStyle} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
