import React from 'react';
import { Link } from 'react-router';

export default class ConfirmTradeComponent extends React.Component {
  
  render() {
    console.log('-------Inside ConfirmTrade Page------------')
    console.log(sessionStorage.getItem(name));
    
      return (
        <div>
          <h1 style={{marginTop:"100px"}}> Confirm Trade Component </h1>
          </div>
      )
    }
  }



