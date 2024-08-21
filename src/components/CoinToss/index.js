import { Component } from "react";
import "./index.css";
const HEADS_IMG_URL = "https://assets.ccbp.in/frontend/react-js/heads-img.png";

const TAILS_IMG_URL = "https://assets.ccbp.in/frontend/react-js/tails-img.png";

class CoinToss extends Component {
  state = {
    headCount: 0,
    tallCount: 0,
    tossResult: HEADS_IMG_URL,
  };

  onClickCoin = () => {
    const { headCount, tallCount } = this.state;
    const toss = Math.floor(Math.random() * 2);
    let tossImg = "";
    let totalHeads = headCount;
    let totalsTalls = tallCount;

    if (toss === 0) {
      tossImg = HEADS_IMG_URL;
      totalHeads += 1;
    } else {
      tossImg = TAILS_IMG_URL;
      totalsTalls += 1;
    }
    this.setState({
      headCount: totalHeads,
      tallCount: totalsTalls,
      tossResult: tossImg,
    });
  };

  render() {
    const { headCount, tallCount, tossResult } = this.state;
    const totalCount = headCount + tallCount;
    return (
      <div className="coin-toss-game">
        <div className="container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="game-result">Heads (or) Talls</p>
          <img src={tossResult} alt="coin" className="toss-coin" />
          <div>
            <button
              type="button"
              className="toss-coin"
              onClick={this.onClickCoin}
            >
                Toss
            </button>
          </div>

          <div className="result-container">
            <p className="result">Total: {totalCount}</p>
            <p className="result"> Heads: {headCount}</p>
            <p className="result">Talls: {tallCount}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default CoinToss;
