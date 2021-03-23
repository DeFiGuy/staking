import React, { Component } from 'react';
import Countdown from 'react-countdown';

export default class DxDrop extends Component {

  render() {
    return (
      <div className="tab-pane fade active show" id="dxstake">
        <div className="container">

          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-xs-12 vertical-center" style={{ backgroundColor: "#f0eaff" }}>
                <h6 style={{ color: "#000", fontSize: "80%", marginTop: "5px" }}>
                Lifetime SALE Airdropped to Stakers:
                <br/><span style={{color: "#1e30ed"}}>{this.props.totalAirdropAmt.toFixed(0)} ({(this.props.totalAirdropAmt*this.props.salePrice).toFixed(2)} USD)</span>
                </h6>
            </div>
            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-12">
              <br className="d-block d-sm-none"/>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-xs-12 vertical-center" style={{ backgroundColor: "#f0eaff" }}>
                <h6 style={{ color: "#000", fontSize: "80%", marginTop: "5px" }}>
                Your Available SALE Airdrop:
                {Date.now() < this.props.registrationData['deadline']*1000
                ?
                  <div>
                    <span>0 (0 USD)</span>
                  </div>
                :
                  <div>
                    <span style={{color: "#1e30ed"}}>{this.props.userAirdropAmt} ({(this.props.userAirdropAmt*this.props.salePrice).toFixed(2)} USD)</span>
                  </div>
                }
                </h6>
            </div>
          </div>
          <br/>
          <div id="showStaking">
            <form className="input-round">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                      {Date.now() < this.props.registrationData['deadline'] * 1000 
                      ?
                      <div>
                        {this.props.userRegistered 
                        ?
                        <div>
                          {this.props.registeredStakeAmount+1 != this.props.yourSaleStakedx+1
                          ?
                          <div>
                            <span style={{ color: '#8A61F8', fontSize: '80%' }}>You registered earlier but your staked amount doesn't match your registered amount. Please click the button below to re-regsiter!</span>
                            <br/>
                            <button disabled={false} className="btn btn-secondary" type="button" onClick={this.props.registerForAirdrop} style={{fontSize: '80%', width:"150px"}}>
                              Register
                            </button>
                            <br/><br/>
                            Registration ends in:
                            <br/>
                            <Countdown date={this.props.registrationData['deadline']*1000} />
                            <br/>
                          </div>
                          :
                          <div>
                            <span style={{ color: '#8A61F8', fontSize: '80%' }}>You are already registered! Claiming your airdrop will be available once the registration deadline is finished!</span>
                            <br/><br/>
                            Registration ends in:
                            <br/>
                            <Countdown date={this.props.registrationData['deadline']*1000} />
                            <br/>
                          </div>
                          }
                        </div>
                        :
                        <div>
                          <span style={{ color: '#8A61F8', fontSize: '80%' }}>Click the button below to register for all future airdrops.</span>
                          <br/>
                          <button disabled={false} className="btn btn-secondary" type="button" onClick={this.props.registerForAirdrop} style={{fontSize: '80%', width:"150px"}}>
                            Register
                          </button>
                          <br/><br/>
                          Registration ends in:
                          <br/>
                          <Countdown date={this.props.registrationData['deadline']*1000} />
                          <br/>
                        </div>
                        }
                      </div>
                      :
                      <span>Registration will open on next airdrop and will be announced in our social media channels.<br/></span>
                      }
                      <br/>
                      <div>
                        {Date.now() < this.props.registrationData['deadline'] * 1000
                        ?
                        <div>
                          <span style={{ color: '#8A61F8', fontSize: '80%' }}>We are in the registration period. Claiming airdrops is only allowed after registration.</span><br/>
                        </div>
                        :
                        <div>
                          <span style={{ color: '#8A61F8', fontSize: '80%' }}>The button below should allow you to claim your SALE airdrop if you have any available!</span><br/>
                          <button disabled={this.props.userAirdropAmt <= 0} className="btn btn-primary" type="button" onClick={this.props.claimUserAirdrop} style={{fontSize: '80%', width:"150px"}}>
                            Claim
                          </button>
                        </div>
                        }
                      </div>
                  </div>
                </div>
            </form>
            {this.props.earlyStaker
            ?
            <div>
              <br/><span style={{ color: 'black'}}>✅ Early Staker<br/>Congratulations you are an early staker!<br/>You will receive more airdrop allocation than others.<br/>Thank you for supporting DxSale</span>
            </div>
            :
            null
            }
          </div>
        </div>
        <div className="row justify-content-center">
        <span style={{ color: 'black', fontSize: '80%', alignContent: 'left' }}>
            <br/><br/><strong>Registration Instructions:</strong><br/>
            - Registration only opens for a limited period when a new airdrop round goes live.<br/> 
            - Registration is only ever required once as long as your staked amount of SALE remains the same.<br/>
            - New users that have never registered before must register at this time to be eligible for all future airdrops.<br/>
            - If you have staked more SALE you must register to be eligible for airdrops on the additional SALE staked.<br/>
            - If you have unstaked SALE but still have some tokens staked you must register to remain eligible for airdrops.<br/>
            - If you missed this registration round, not to worry you will have a chance to register again before the next airdrop goes live!<br/>
        </span>
        </div>
      </div>
    );
  }
}
