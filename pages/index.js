import React, { useState, useEffect, Fragment } from 'react'
import Swal from 'sweetalert2'
import Header from '../components/header'
import abiObj from '../src/utils/abi'
const Web3 = require('web3')
import Image from 'next/image'

function Index() {

  return (
    <Fragment>
      <div className="geeks"></div>

      <Header wallet={null} isReady={null} address={null} staticPage={true} />

      <div id="app">
        <img src='/assets/bad-balloons-logo.png' alt='discord' style={{ width: '20vh' }} />

        <div style={{ display: 'flex', width: '80%'}} >
          <div style={{width: '50%', marginRight: '10px'}}>
            <img src='/assets/balloon1.jpeg' style={{ display: 'inline', width: '50%', height: '100%', borderRadius: '20px 0px 0px 20px' }} className='image-frame' />
            <img src='/assets/balloon2.jpeg' style={{ display: 'inline', width: '50%', height: '100%', borderRadius: '0px 20px 20px 0px' }} className='image-frame'/>
          </div>

          <div className="form-container" style={{width: '50%', height: '100%'}}>
            <div className='content-container'>

              <div style={{ margin: 20 }}>
                
              </div>

              <div style={{ flex: 1, marginTop: 10 }}>

                Bad Balloons is a collection of <div className='colorGradient'>3333</div> random generated Ballons stored on the <div className='colorGradient'>Ethereum</div> Blockchain.

              </div>
            </div>

            <br />

            <button className='button' style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 20, width: 300 }}>
              Whitelist
            </button>

          </div>
        </div>
        
        
        
        
      </div>
    </Fragment>
  )
}

export default Index
