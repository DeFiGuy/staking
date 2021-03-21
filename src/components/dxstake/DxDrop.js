import React, { Component } from 'react';


export default class DxDrop extends Component {

  render() {
    return (
      <div className="tab-pane fade active show" id="dxstake">
        <div className="container">

          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-xs-12 vertical-center" style={{ backgroundColor: "#f0eaff" }}>
                <h6 style={{ color: "#000", fontSize: "80%", marginTop: "5px" }}>
                Total SALE Airdropped to Stakers:
                <br/><span style={{color: "#1e30ed"}}>{this.props.totalAirdropAmt}</span>
                </h6>
            </div>
            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-12">
              <br className="d-block d-sm-none"/>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-xs-12 vertical-center" style={{ backgroundColor: "#f0eaff" }}>
                <h6 style={{ color: "#000", fontSize: "80%", marginTop: "5px" }}>
                Your Available SALE Airdrop:
                <br/><span style={{color: "#1e30ed"}}>{this.props.userAirdropAmt}</span>
                </h6>
            </div>
          </div>
          <br/>
          <div id="showStaking">
            <form className="input-round">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                      <div><span style={{ color: '#8A61F8', fontSize: '80%' }}>Click the button below to register for all future airdrops.<br/>If at anytime you have staked more SALE or unstaked SALE then you need to register again!</span><br/><button disabled={false} className="btn btn-secondary" type="button" onClick={this.props.registerForAirdrop} style={{fontSize: '80%', width:"150px"}}>
                        Register
                      </button></div>
                      <br/>
                      <div><span style={{ color: '#8A61F8', fontSize: '80%' }}>The button below should allow you to claim your SALE airdrop if you have any available!</span><br/><button disabled={this.props.userAirdropAmt <= 0} className="btn btn-primary" type="button" onClick={this.props.claimUserAirdrop} style={{fontSize: '80%', width:"150px"}}>
                        Claim
                      </button></div>
                  </div>
                </div>
                    
            </form>
          </div>
        </div>
      </div>
    );
  }
}
