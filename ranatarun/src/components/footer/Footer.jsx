import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './Footer.css'

class Footer extends Component {
  render () {
    return (
      <div>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css'
        />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/fork-awesome/1.1.7/css/fork-awesome.min.css'
        />
        <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>
        <script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js'></script>
        <div className='pt-3 footer'>
          <div className='container'>
            <div className='row'>
              <div className='col copyright'>
                <p className=''>
                  <small className='text-white-50'>
                    © 2021.
                    Tarun Rana
                    All Rights Reserved.
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Footer)
