import React from 'react'
import ReactDOM from 'react-dom'
import Slider from 'rc-slider'

import './styles.css'
import 'rc-slider/assets/index.css'
const Handle = Slider.Handle

class App extends React.Component {
  render() {
    const wrapperStyle = { width: 400, margin: 50 }

    const handleChange = value => {
      console.log(value)
    }

    const marks = {
      0: <div style={{ marginTop: '-50px' }}>Restricted</div>,
      1: <div style={{ marginTop: '-50px' }}>Read-Only</div>,
      2: <div style={{ marginTop: '-50px' }}>Edit</div>,
      3: <div style={{ marginTop: '-50px' }}>Create</div>,
      4: <div style={{ marginTop: '-50px' }}>Delete</div>,
      5: <div style={{ marginTop: '-50px' }}>Approve</div>
    }

    return (
      <div className="App">
        <div style={wrapperStyle}>
          <Slider
            min={0}
            max={5}
            defaultValue={0}
            onChange={handleChange}
            trackStyle={{ backgroundColor: '#0086E7' }}
            railStyle={{ backgroundColor: '#0086E7' }}
            handleStyle={{ backgroundColor: '#0086E7', border: '0px' }}
            dotStyle={{
              backgroundColor: '#0086E7',
              border: '0px',
              width: '0px'
            }}
            marks={marks}
            dots={false}
          />
        </div>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
