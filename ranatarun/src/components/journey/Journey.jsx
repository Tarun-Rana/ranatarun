import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './Journey.css'

class Journey extends Component {
  render () {
    return (
      <div className='journey-container container-fluid'>
        {/* <div className='row '>
          <div className='col-12'>
            <div className='jtext'>
              <div>Footer</div>
            </div>
          </div>
        </div> */}
        <div className='row'>
          <div className='col-8 center-align'>
              <div class='holder'>
                <div class='cardfrost'>
                  <div class='card__text p-3'>
                    <h2>Education</h2>
                    <h5>Kulachi Hansraj Model School</h5>
                    <h5>Galgotias University</h5>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div className='row'>
           <div className='col-4'></div> 
          <div className='col-8 center-align'>
              <div class='holder2'>
                <div class='cardfrost'>
                  <div class='card__text p-3'>
                    <h2>Professional Experience</h2>
                    <h5>Infosys</h5>
                    <h5>Cognizant</h5>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-8 center-align'>
              <div class='holder3'>
                <div class='cardfrost'>
                  <div class='card__text p-1'>
                    <h5>Resume</h5>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Journey)
