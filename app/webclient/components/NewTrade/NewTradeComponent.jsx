import React from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import {Table,TableBody,TableHeader,TableHeaderColumn,TableRow,TableRowColumn} from 'material-ui/Table';

const style={
textStyle:{
  width:"100%"
},
colStyle:{
  padding:"0"
},
btnStyle:{
margin:"10px 30px"
}
}
export default class NewTradeComponent extends React.Component {
  state = {
    value: "",
    open: false,
    firstPartyTxt:"",
    showCheckboxes: false,
    height: '300px',
    };
  
    handleOpen = () => {
      this.setState({open: true});
    };
  
    handleClose = () => {
      this.setState({open: false});
    };
  
    handleChange = (event, index, value) => this.setState({value});

    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }

    handleChangeFirstPartyTxt=(e)=>{
      this.setState({firstPartyTxt:e.target.value});
    }

    submitNewTrade=()=>{
      var newTradeObj={
        firstPartyTxt:this.state.firstPartyTxt
      }

      this.props.submitNewTrade(newTradeObj);
      console.log(newTradeObj);
      
    }
  
  render() {
    console.log('-------------data of first textbox--------');
    console.log(this.state.firstPartyTxt);
    
    
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <div style={{paddingLeft:"40px",float:"left"}}><b>Total</b></div>,
      <div style={{paddingLeft:"40px",float:"left"}}><b>$3756347</b></div>
    ];
      return (
        <div style={{marginTop:"65px"}}>
          {/* <h1 style={{marginTop:"100px"}}> New Trade Component </h1> */}
          <Grid>
          <form>
          <Row>
            <Col xs={6}><h1>New Trader</h1>
            </Col>
            <Col>
            <RaisedButton label="Submit" primary={true} style={{float:"right",marginTop:"40px"}}
             onTouchTap={this.submitNewTrade}/>
            </Col>
          </Row>
          
          <Row>
            <Col xs={6}>
            <h3>Trader Details</h3>
            <Col xs={4}>
             <TextField name="firstParty"
           style={style.textStyle}
           hintText="1st Party"
          floatingLabelText="1st Party"
          value={this.state.firstPartyTxt}
          onChange={this.handleChangeFirstPartyTxt}
          /></Col>
          <Col xs={4}><SelectField name="secondParty"
           style={style.textStyle}
           hintText="2st Party"
          floatingLabelText="2nd Party"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem value={1} primaryText="STAT-OIL" />
          <MenuItem value={2} primaryText="Every Night" />
          <MenuItem value={3} primaryText="Weeknights" />
          <MenuItem value={4} primaryText="Weekends" />
          <MenuItem value={5} primaryText="Weekly" />
        </SelectField></Col>
          <Col xs={4} style={style.textStyle}></Col>
          
          <Col xs={4}> <SelectField name="inco"
           style={style.textStyle}
           hintText="INCO Term"
          floatingLabelText="INCO Term"
          value=""
          onChange={this.handleChange}
        >
          <MenuItem value={1} primaryText="BRENT" />
          <MenuItem value={2} primaryText="Every Night" />
          <MenuItem value={3} primaryText="Weeknights" />
          <MenuItem value={4} primaryText="Weekends" />
          <MenuItem value={5} primaryText="Weekly" />
        </SelectField></Col>
          <Col xs={4}><SelectField name="tradeLocation"
           style={style.textStyle}
           hintText="Trade Location"
          floatingLabelText="Trade Location"
          value=""
          onChange={this.handleChange}
        >
          <MenuItem value={1} primaryText="NETHERLANDS" />
          <MenuItem value={2} primaryText="Every Night" />
          <MenuItem value={3} primaryText="Weeknights" />
          <MenuItem value={4} primaryText="Weekends" />
          <MenuItem value={5} primaryText="Weekly" />
        </SelectField></Col>
         <Col xs={4}><SelectField name="tradeSub"
          style={style.textStyle}
          floatingLabelText="A"
          value=""
          onChange={this.handleChange}
        >
          <MenuItem value={false} primaryText="No" />
          <MenuItem value={true} primaryText="Yes" />
        </SelectField></Col>
        <Col xs={6}>
       <Col xs={6} style={style.colStyle}>
        <DatePicker name="fromDate"
          style={style.textStyle}
          textFieldStyle={style.textStyle}
            onChange={this.handleChangeMaxDate}
            autoOk={this.state.autoOk}
            floatingLabelText="Delivery Date"
            defaultDate={this.state.maxDate}
            disableYearSelection={this.state.disableYearSelection}
          />
         </Col>
         <Col xs={6}>
         <DatePicker name="endDate"
          style={style.textStyle}
          textFieldStyle={{height:"71px",width:"100%",lineHeight:"6"}}
            onChange={this.handleChangeMaxDate}
            autoOk={this.state.autoOk}
            floatingLabelText=""
            defaultDate={this.state.maxDate}
            disableYearSelection={this.state.disableYearSelection}
          />
         </Col>
         
        </Col>

        <Col xs={6}>
        <Col xs={6} style={style.colStyle}>
       <DatePicker name="lcFromDate"
         style={style.textStyle}
         textFieldStyle={style.textStyle}
           onChange={this.handleChangeMaxDate}
           autoOk={this.state.autoOk}
           floatingLabelText="Laycan Date"
           defaultDate={this.state.maxDate}
           disableYearSelection={this.state.disableYearSelection}
         />
        </Col>
        <Col xs={6}>
         <DatePicker name="lcFromDate"
          style={style.textStyle}
          textFieldStyle={{height:"71px",width:"100%",lineHeight:"6"}}
            onChange={this.handleChangeMaxDate}
            autoOk={this.state.autoOk}
            floatingLabelText=""
            defaultDate={this.state.maxDate}
            disableYearSelection={this.state.disableYearSelection}
          />
         </Col>
        
       </Col>
          </Col>
          <Col xs={6}>
          <h3>Commodity Details</h3>
          
          <Col xs={4}><SelectField name="commodity"
           style={style.textStyle}
           hintText="Commodity"
          floatingLabelText="Commodity"
          value=""
          onChange={this.handleChange}
        >
          <MenuItem value={1} primaryText="STAT-OIL" />
          <MenuItem value={2} primaryText="Every Night" />
          <MenuItem value={3} primaryText="Weeknights" />
          <MenuItem value={4} primaryText="Weekends" />
          <MenuItem value={5} primaryText="Weekly" />
        </SelectField></Col>
          <Col xs={4} style={style.textStyle}></Col>
          <Col xs={4} style={style.textStyle}> </Col>
          <Col xs={4}><SelectField name="productName"
           style={style.textStyle}
           hintText="Product Name"
          floatingLabelText="Product Name"
          value=""
          onChange={this.handleChange}
        >
          <MenuItem value={1} primaryText="STAT-OIL" />
          <MenuItem value={2} primaryText="Every Night" />
          <MenuItem value={3} primaryText="Weeknights" />
          <MenuItem value={4} primaryText="Weekends" />
          <MenuItem value={5} primaryText="Weekly" />
        </SelectField></Col>
        <Col xs={4}><SelectField name="volume"
           style={style.textStyle}
           hintText="Voulme"
          floatingLabelText="Volume"
          value=""
          onChange={this.handleChange}
        >
          <MenuItem value={1} primaryText="STAT-OIL" />
          <MenuItem value={2} primaryText="Every Night" />
          <MenuItem value={3} primaryText="Weeknights" />
          <MenuItem value={4} primaryText="Weekends" />
          <MenuItem value={5} primaryText="Weekly" />
        </SelectField></Col>
        <Col xs={4} style={style.textStyle}></Col>
        <Col xs={4}> <TextField name="qapi"
           style={style.textStyle}
      hintText="Quality (API)"
     
      floatingLabelText="Quality (API)"
      
    /></Col>
              <Col xs={4}> <TextField name="qsul"
           style={style.textStyle}
          hintText="Quality (SUL)"
          floatingLabelText="Quality (SUL)"
    /></Col>
              <Col xs={4}> <TextField name="tolerence"
           style={style.textStyle}
      hintText="Tolerence"
      floatingLabelText="Tolerence"
    /></Col>
          </Col>
            </Row>
            <Row>
          <Col xs={6}>
          <h3>Price Details</h3>
          <Col xs={4}> <TextField name="priceType"
           style={style.textStyle}
      hintText="Price Type"
     
      floatingLabelText="Price Type"
     
    /></Col>
          <Col xs={4}><SelectField name="index"
           style={style.textStyle}
           hintText="Index"
          floatingLabelText="Index"
          value=""
          onChange={this.handleChange}
        >
          <MenuItem value={1} primaryText="STAT-OIL" />
          <MenuItem value={2} primaryText="Every Night" />
          <MenuItem value={3} primaryText="Weeknights" />
          <MenuItem value={4} primaryText="Weekends" />
          <MenuItem value={5} primaryText="Weekly" />
        </SelectField></Col>
          <Col xs={4} style={style.textStyle}></Col>
          <Col xs={4}> <TextField name="priceUoM"
           style={style.textStyle}
      hintText="Price + UoM"
     
      floatingLabelText="Price + UoM"
     
    /></Col>
          <Col xs={5}><SelectField name="associatedFees"
           style={style.textStyle}
           hintText="Associated Fees"
          floatingLabelText="Associated Fees (Total)"
          value=""
          onChange={this.handleChange}
        >
          <MenuItem value={1} primaryText="STAT-OIL" />
          <MenuItem value={2} primaryText="Every Night" />
          <MenuItem value={3} primaryText="Weeknights" />
          <MenuItem value={4} primaryText="Weekends" />
          <MenuItem value={5} primaryText="Weekly" />
        </SelectField></Col>
        <Col xs={3} style={style.colStyle}><div label="Dialog" onClick={this.handleOpen} style={{lineHeight:"8"}}>VIEW/EDIT DETAILS</div>
        </Col>
        <Col xs={4}><div style={{fontSize:'12px'}}>Total Amount</div><div style={{fontSize:'20px'}}><b>$7.22 mn</b></div></Col>
          </Col>
          <Col xs={6}>
         <textarea className="newTrade_textarea" placeholder="Enter your comments...">

           </textarea>
          </Col>
          </Row>
          </form>
          <Dialog
          title="Header"
          titleStyle={{background:"#1f497d",color:"#fff",lineHeight:"0"}}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
         <div className="">
         <Col md={6}>
           <h2>New Trade</h2>
           <h4>TR13312</h4>
          </Col>
          <Col md={6}>
          <RaisedButton label="Save" primary={true} style={{float:"right",marginTop:"40px"}} />
          </Col>
          <div className="clearfix"></div>
         </div>

         <div className="line"></div>
         <Table  height={this.state.height}>
    <TableHeader
    displaySelectAll={this.state.showCheckboxes}
    adjustForCheckbox={this.state.showCheckboxes}
    >
      
      <TableRow>
        <TableHeaderColumn>Associated Fees Detail</TableHeaderColumn>
        <TableHeaderColumn>Share</TableHeaderColumn>
        <TableHeaderColumn>Total</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={this.state.showCheckboxes}>
    
      <TableRow>
        <TableRowColumn>Marine Freight Estimate</TableRowColumn>
        <TableRowColumn>100%</TableRowColumn>
        <TableRowColumn>$ 650,000</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Inspector Fees</TableRowColumn>
        <TableRowColumn></TableRowColumn>
        <TableRowColumn>ADD</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Agent Fees</TableRowColumn>
        <TableRowColumn></TableRowColumn>
        <TableRowColumn>ADD</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Demurrage Estimate</TableRowColumn>
        <TableRowColumn></TableRowColumn>
        <TableRowColumn>ADD</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Throughput</TableRowColumn>
        <TableRowColumn></TableRowColumn>
        <TableRowColumn>ADD</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Storage Lease</TableRowColumn>
        <TableRowColumn></TableRowColumn>
        <TableRowColumn>ADD</TableRowColumn>
      </TableRow>
      
    </TableBody>
  </Table>
        </Dialog>
          <Row>
            <div className="terms_conditions">
            <h3>General Terms and Condition</h3>
            <h4>This Trade comes under the <a href="#">terms and condition</a> of:</h4>
            <RaisedButton label="SHELL" primary={true} style={style} />
            <RaisedButton label="STAT-OIL" primary={true} style={style.btnStyle} />
            </div>
            </Row>
            </Grid>
          </div>
      )
    }
  }



