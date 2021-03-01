import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './AboutMe.css'
import Carousel from 'react-bootstrap/Carousel'
import cts from '../../items/Cognizant.png'
import infy from '../../items/Infosys.png'

class AboutMe extends Component {
  render () {
    return (
      <div className='about-container'>
        <div className='row'>
          <div className='col-12'>
            <div className='quote m-5'>Technologies I've worked on-</div>
          </div>
          <div className='row'>
            <div className='col-12  p-5 m-5 '>
              <Carousel className='carousel'>
                <Carousel.Item interval={1000}>
                  <img
                    className='image'
                    src={cts}
                    alt='cognizant'
                  ></img>
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img
                    className='image'
                    src={cts}
                    alt='cognizant'
                  ></img>
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className='image'
                    src={cts}
                    alt='cognizant'
                  ></img>
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
          {/* <div className='row'>
            <div className='col-6 p-5'>
              <div className='card w-50'>
                <img className='card-img-top' src={infy} alt='infosys'></img>
              </div>
            </div>
            <div className='col-6 p-5'>
              <div className='card w-50'>
                <div className='card-body'>
                  <img
                    className=' card-img-top image'
                    src={cts}
                    alt='cognizant'
                  ></img>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    )
  }
}

export default withRouter(AboutMe)
