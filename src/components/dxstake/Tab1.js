import React, { Component } from 'react';


export default class Tab1 extends Component {

  render() {
    return (
      <div className="tab-pane fade active show" id="dxstake">
        <div className="container">
          <h6>Wallet Balance: <span>{this.props.saleBalance}</span> </h6>
          <h6>Staked SALE: <span>{this.props.yourSaleStaked}</span> </h6>
          { !this.props.approved
          ? 
          <div id="approvalRequired">
            <button className="btn btn-danger" onClick={this.props.approveContract}>
            Approve Contract to Spend SALE
            </button>
          </div>
          : 
          <div id="showStaking">
            <br/>
            <span style={{color: 'red'}}><strong>Staking has been discontinued! We have moved to a buyback and burn model!</strong></span>
            <br/>
            <span style={{color: 'black', fontSize: '80%'}}>Do not stake any tokens! Only users suggested to stake should stake to claim their old airdrop.</span>
            <br/>
            <span style={{color: 'black', fontSize: '80%'}}>For help or information please reach out to our telegram group <a href="https://t.me/dxsale">here</a></span>
            <br/><br/>
            <form className="input-round">
                <div style={{ fontSize: '80%' }}>2% Staking Fee</div>
                <div className="form-group input-group">
                  <input type="number" className="form-control" placeholder="SALE AMOUNT" value={this.props.stakeAmount} onChange={this.props.handleStakeUpdate}></input>
                  <div className="input-group-prepend">
                      <button className="btn btn-primary overlay opacity-95 " onClick={this.props.setStake} type="button" style={{borderColor: "#8A61F8", backgroundColor: "#8A61F8",  marginRight:"3px", width:"150px" }}>
                      Stake
                      </button>
                  </div>
                </div>
                <div style={{ fontSize: '80%' }}>1% Unstaking Fee</div>
                <div className="form-group input-group">
                  <input type="number" className="form-control" placeholder="SALE AMOUNT" value={this.props.unstakeAmount} onChange={this.props.handleUnStakeUpdate}></input>
                  <div className="input-group-prepend">
                      <button className="btn btn-primary overlay opacity-95" onClick={this.props.removeStake} type="button" style={{borderColor: "#8A61F8", backgroundColor: "#8A61F8",  marginRight:"3px", width:"150px" }}>
                      Unstake
                      </button>
                  </div>
                </div>
                <h6>Staking Rewards: <span>{this.props.userRewards}</span> </h6>

                <div className="row">
                  <div className="col-lg-4 col-md-12 col-sm-12">
                  <button disabled className="btn btn-primary" type="button" onClick={this.props.reinvestRewards} style={{fontSize: '55%', width:"170px"}}>
                  Reinvest
                  </button>
                  </div>
                  <div className="col-lg-4 col-md-12 col-sm-12">
                  <button className="btn btn-secondary" type="button" onClick={this.props.unstakeAll} style={{fontSize: '55%', width:"170px"}}>
                  Unstake and Claim
                  </button>
                  </div>
                  <div className="col-lg-4 col-md-12 col-sm-12">
                  <button className="btn btn-primary" type="button" onClick={this.props.claimRewards} style={{fontSize: '55%', width:"170px"}}>
                  Claim
                  </button>
                  </div>
                </div>
                {this.props.showError && 
                <div>
                  <br/>
                  <p>{this.props.transactionError}</p>
                </div>
                }
                {this.props.showTransaction && 
                <div>
                  <br/>
                  <p>Transaction Hash: {this.props.transactionHash}</p>
                </div>
                }
            </form>
          </div>
          }
        </div>
      </div>
    );
  }
}
