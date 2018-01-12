import React from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';


const style={
  paperStyle:{
  width: "auto",
  height: "476px",
  borderRadius: "6px",
  backgroundColor: "#ffffff",
  border: "solid 1px #d5d5d5"
  }
}

export default class Notification extends React.Component {
  
  render() {
      return (
        
          <div style={style.paperStyle} zDepth={2} >
        Notification
           </div>
         
      )
    }
  }



