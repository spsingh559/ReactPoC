import React from 'react';
import {
    Step,
    Stepper,
    StepLabel,
    StepContent,
  } from 'material-ui/Stepper';
  import RaisedButton from 'material-ui/RaisedButton';
  import FlatButton from 'material-ui/FlatButton';

  import SelectBuyTradeComponent from './ParcelStep/SelectBuyTradeComponent.jsx';
  import BuyTradeDetailComponent from './ParcelStep/BuyTradeDetailComponent.jsx';
  import SelectSellTradeComponent from './ParcelStep/SelectSellTradeComponent.jsx';
  import SelectVesselComponent from './ParcelStep/SelectVesselComponent.jsx';
  import NewParcelCreated from './ParcelStep/NewParcelCreated.jsx';
export default class parcelHome extends React.Component{

    state = {
        finished: false,
        stepIndex: 0
    }

    handleNext = () => {
        const {stepIndex} = this.state;
        this.setState({
          stepIndex: stepIndex + 1,
          finished: stepIndex >= 3,
        });
      };
    
      handlePrev = () => {
        const {stepIndex} = this.state;
        if (stepIndex > 0) {
          this.setState({stepIndex: stepIndex - 1});
        }
      };

      renderStepActions(step) {
        const {stepIndex} = this.state;
    
        return (
          <div style={{margin: '12px 0'}}>
            <RaisedButton
              label={stepIndex === 2 ? 'Finish' : 'Next'}
              disableTouchRipple={true}
              disableFocusRipple={true}
              primary={true}
              onTouchTap={this.handleNext}
              style={{marginRight: 12}}
            />
            {step > 0 && (
              <FlatButton
                label="Back"
                disabled={stepIndex === 0}
                disableTouchRipple={true}
                disableFocusRipple={true}
                onTouchTap={this.handlePrev}
              />
            )}
          </div>
        );
      }

      
    render(){
        const {finished, stepIndex} = this.state;

        return(
           
          
           <div style={{maxWidth: 'auto', maxHeight: 'auto', margin: 'auto',marginTop:"100px"}}>
        <Stepper activeStep={stepIndex} orientation="vertical">
          <Step>
            <StepLabel>Select Buy Trade</StepLabel>
            <StepContent>
           <SelectBuyTradeComponent />
              {this.renderStepActions(0)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Buy Trade Detail </StepLabel>
            <StepContent>
            <BuyTradeDetailComponent />
              {this.renderStepActions(1)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Select Sell Trade</StepLabel>
            <StepContent>
             <SelectSellTradeComponent />
              {this.renderStepActions(2)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Select Vessel</StepLabel>
            <StepContent>
              <SelectVesselComponent />
              {this.renderStepActions(3)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>New Parcel Created</StepLabel>
            <StepContent>
             <NewParcelCreated />
              {this.renderStepActions(4)}
            </StepContent>
          </Step>
        </Stepper>
        {finished && (
          <p style={{margin: '20px 0', textAlign: 'center'}}>
              Parcel Step completed
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                this.setState({stepIndex: 0, finished: false});
              }}
            >
           click here
          </a> to go back to start.
          </p>
        )}
      </div>
           
        )
    }
}