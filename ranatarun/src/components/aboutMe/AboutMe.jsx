import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './AboutMe.css'
import max from '../../items/max.png'
import cts from '../../items/cts.png'
import ip from '../../items/ip.jpg'
import ieee from '../../items/iee.jpg'

class AboutMe extends Component {
  render () {
    return (
      <div className='container-fluid about-container'>
        <div class='row mb-4'>
          <div class='col-lg-3 col-md-6 col-sm-12 d-flex card-align mt-3'>
            <a
              href='https://www.galgotiasuniversity.edu.in/pdfs/computer-science-engineering-5aug19.pdf'
            >
              <div class='card text-center'>
                <div class='card-body'>
                  <img
                    class='card-img-top card-image'
                    src={ip}
                    alt='img'
                  ></img>
                  <h5 class='card-title mt-3'>Patent</h5>
                  <p class='card-text'>
                    Automated Canal Irrigation System using IOT for Indian
                    Farmers.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div class='col-lg-3 col-md-6 col-sm-12 d-flex card-align mt-3'>
            <a
              href='https://ieeexplore.ieee.org/abstract/document/8776613'
              
            >
              <div class='card text-center'>
                <div class='card-body'>
                  <img
                    class='card-img-top'
                    src={ieee}
                    alt='img'
                  ></img>
                  <h5 class='card-title mt-3'>Research Paper</h5>
                  <p class='card-text'>
                    An Intelligent approach for UAV and Drone privacy security
                    using BLOCKCHAIN method.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div class='col-lg-3 col-md-6 col-sm-12 d-flex card-align mt-3'>
            <a
              href='//#region '
            >
              <div class='card text-center'>
                <div class='card-body'>
                  <img
                    class='card-img-top card-image'
                    src={cts}
                    alt='img'
                  ></img>
                  <h5 class='card-title mt-3'>Full Stack Ceritfication</h5>
                  <p class='card-text'>
                    External vendor  exam certification by Cognizant for FSC.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div class='col-lg-3 col-md-6 col-sm-12 d-flex card-align mt-3'>
            <a
              href='https://www.galgotiasuniversity.edu.in/pdfs/computer-science-engineering-5aug19.pdf'
            >
              <div class='card text-center'>
                <div class='card-body'>
                  <img
                    class='card-img-top card-image'
                    src={max}
                    alt='img'
                  ></img>
                  <h5 class='card-title mt-3'>Geman Certification</h5>
                  <p class='card-text'>
                    A2 level certified in spoken, verbal and written german by Max Muller Bhavan Delhi.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(AboutMe)
