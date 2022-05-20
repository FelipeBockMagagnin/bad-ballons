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
        <div className="form-container">
          <div className='content-container'>

            <div style={{ margin: 20 }}>
              <div style={{ flex: 1 }} className='image-frame' style={{ height: 300 }}>
                <Image src='/assets/balloons.jpeg' alt='discord' width='300' height='300' />
              </div>
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
    </Fragment>
  )
}

export default Index
