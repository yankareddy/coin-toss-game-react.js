// Write your code here
import {Component} from 'react'

import './index.css'

const HEAD_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const TAIL_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    totalResultImage: HEAD_IMG_URL,
    headCount: 0,
    tailCount: 0,
  }

  onTossChange = () => {
    const {headCount, tailCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImge = ''
    let latestHeadCount = headCount
    let latestTailCount = tailCount

    if (toss === 0) {
      tossImge = HEAD_IMG_URL
      latestHeadCount += 1
    } else {
      tossImge = TAIL_IMG_URL
      latestTailCount += 1
    }

    this.setState({
      totalResultImage: tossImge,
      headCount: latestHeadCount,
      tailCount: latestTailCount,
    })
  }

  render() {
    const {totalResultImage, headCount, tailCount} = this.state
    const totalCount = headCount + tailCount
    return (
      <div className="main-container">
        <div className="toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img
            src={totalResultImage}
            alt="toss result"
            className="coin-image"
          />
          <button type="button" className="button" onClick={this.onTossChange}>
            Toss Coin
          </button>
          <div className="result-container">
            <p className="toss">Total:{totalCount}</p>
            <p className="toss">Heads:{headCount}</p>
            <p className="toss">Tails:{tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
