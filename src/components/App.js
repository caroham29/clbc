import React from 'react'
import HeaderOptions from './headerOptions.js'
import Logo from './logo.js'
// import ConnectedGoals from './Goals.js'
import { connect } from 'react-redux'
// import {
//   handleInitialData
// } from '../actions/shared'

class App extends React.Component {
  componentDidMount () {
    const { dispatch } = this.props

    // dispatch(handleInitialData())
  }
  render() {
    if (this.props.loading === true) {
      return <h3>Loading</h3>
    }

    return (
      <div>
        <div className="parallax">
          <div className="flexMeMain">
            <div className="flexMeMainDiv">
              <Logo></Logo>
            </div>
            <div className="flexMeMainDiv">
              <HeaderOptions></HeaderOptions>
            </div>
            <div className="flexMeMainDiv right">
              <button className="homeSecondaryBtn">
              <a target="_blank" href="https://www.youtube.com/user/pastorrodcochran1" >WATCH NOW</a>
              </button>
              <button className="homeSecondaryBtn">
                <a >GIVE</a>
              </button>
            </div>
          </div>
          <div className="AbsoluteCenterDiv">
            <button className="HomeWatchNowButton">
              <a target="_blank" href="https://www.youtube.com/user/pastorrodcochran1" >CLICK TO WATCH</a>
            </button>
          </div>
        </div>
        <div className="stuff">
          <div className="childStuff">
            <h1 className="childHead">I HAVE DECIDED</h1>
            <h4 className="childHeadChild">TO FOLLOW JESUS</h4>
          </div>
        </div>
        <div className="secondParallax">
          <div className="relative">
            <div className="AbsoluteCenterDiv">
              <button className="HomeWatchNowButton">
                <a target="_blank" href="https://www.youtube.com/user/pastorrodcochran1" >START NOW</a>
              </button>
            </div>
          </div>
        </div>
        <div className="thirdParallax">
          <h1 >FOLLOW US</h1>
          <div className="flex">
            <div>Facebook</div><div>/</div>
            <div>Instagram</div><div>/</div>
            <div>YouTube</div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect((state) => ({
  loading: state.loading
}))(App)
