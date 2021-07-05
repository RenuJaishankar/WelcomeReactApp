import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
//import ReactDOM from "react-dom";
// This program calls the Welcome function with different props.
function Welcome(props){
    return  <h1> Hello,   {props.name}    </h1>

}
function Name(){
    return( <div>
           <Welcome name = "Emma" />                      />
           <Welcome name = "Amelia" />
           <Welcome name = "Samantha" />
           </div>
        );
}

ReactDOM.render(<Name/>,document.getElementById('root'));


//ReactDOM.render(
 
  //<React.StrictMode>
    
  //  <App />
 // </React.StrictMode>,
  //document.getElementById('root')
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
