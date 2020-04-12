import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import * as serviceWorker from './serviceWorker';
import college from '/home/administrator/matheas/my_app/src/components/college';
import name from '/home/administrator/matheas/my_app/src//components/name';
import year from '/home/administrator/matheas/my_app/src//components/year';
import department from '/home/administrator/matheas/my_app/src//components/department';

export class MainPage extends React.Component{
render(){
return(
   ReactDOM.render(<name/>, document.getElementById('root'));
ReactDOM.render(<college/>, document.getElementById('root'));
ReactDOM.render(<year/>, document.getElementById('root'));
ReactDOM.render(<department/>, document.getElementById('root'));

    )
  }
}
serviceWorker.unregister();
