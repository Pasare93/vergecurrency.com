import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';

class Cointicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      coinData: []
    }
  }

  componentWillMount() {
    const url = "https://api.coinmarketcap.com/v1/ticker/verge/?convert=EUR"
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ coinData: data }))
  }

  render() {
    if (this.state.coinData.length > 0) {
      return (
        <div>
          <div className="row pt pb">
            <div className="col-sm-2">
              <span className="spaced">Symbol</span>
              <p>{this.state.coinData[0].symbol}</p>
            </div>
            <div className="col-sm-2">
              <span className="spaced">BTC Price</span>
              <p>{this.state.coinData[0].price_btc}</p>
            </div>
            <div className="col-sm-2">
              <span className="spaced">USD Price</span>
              <p>$ {this.state.coinData[0].price_usd}</p>
            </div>
            <div className="col-sm-2">
              <span className="spaced">EUR Price</span>
              <p>€ {this.state.coinData[0].price_eur}</p>
            </div>
            <div className="col-sm-2">
              <span className="spaced">Market cap</span>
              <p>{parseFloat(this.state.coinData[0].market_cap_usd).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')} USD</p>
            </div>
            <div className="col-sm-2">
              <span className="spaced">Volume</span>
              <p>{parseFloat(this.state.coinData[0]["24h_volume_usd"]).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')} USD</p>
            </div>
          </div>
        </div>
      )
    }

    return (<span>Loading cointicker...</span>);
  }
}

export default Cointicker;