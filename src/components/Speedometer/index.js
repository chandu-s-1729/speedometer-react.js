// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {
    count: 0,
  }

  onIncrement = () => {
    this.setState(prevState => {
      if (prevState.count < 200) {
        return {count: prevState.count + 10}
      }
      return null
    })
  }

  onDecrement = () => {
    this.setState(prevState => {
      if (prevState.count > 0) {
        return {count: prevState.count - 10}
      }
      return null
    })
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="speedometer-image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <div className="content-container">
          <h1 className="speeding"> Speed is {count}mph</h1>
          <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
          <div>
            <button
              onClick={this.onIncrement}
              className="accelerate-btn"
              type="button"
            >
              Accelerate
            </button>
            <button
              onClick={this.onDecrement}
              className="brake-btn"
              type="button"
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
