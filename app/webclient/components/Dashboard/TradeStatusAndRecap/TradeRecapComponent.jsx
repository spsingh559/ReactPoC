import React from 'react';
import { Link } from 'react-router';

import Paper from 'material-ui/Paper';
const style={
  paperStyle:{
    width: "574px",
    height: "290px",
    borderRadius: "6px",
    marginLeft:"100px",
    marginTop:"30px",
    backgroundColor:" #ffffff",
    border: "solid 1px #d5d5d5"
  }
}


export default class TradeStatusAndRecapComponent extends React.Component {
  
  render() {
      return (
        
          <div style={style.paperStyle} zDepth={2} >
        TradeRecap
           </div>
          
      )
    }
  }



