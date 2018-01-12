import React from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

const style={
  paperStyle:{
    width: "272px",
  height: "476px",
  borderRadius: "6px",
  backgroundColor: "#ffffff",
  border: "solid 1px #d5d5d5"
  },
  labelStyle:{
    width: "120px",
    height: "17px",
    fontFamily: "Helvetica",
    fontSize: "14px",
    fontWeight: "bold",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#333333"
  },
}
export default class TradePortalComponent extends React.Component {
  
  render() {
      return (
       
          <div style={style.paperStyle} >
          <div style={{marginLeft:"20px"}}>
        <span style={style.labelStyle}>Trade Portfolio</span>
        <br />
        <span style={style.TraderName}> ShellTrader </span>
        <ListItem
        
        primaryText="Photos"
        secondaryText="Jan 9, 2014"
      />
      <Divider />
      <ListItem
       
        primaryText="Photos"
        secondaryText="Jan 9, 2014"
      />
      <Divider />
      <ListItem
       
        primaryText="Photos"
        secondaryText="Jan 9, 2014"
      />

        </div>
           </div>
          
      )
    }
  }



