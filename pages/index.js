import React, { useState, useEffect, Fragment } from 'react'
import Swal from 'sweetalert2'
import Header from '../components/header'
import abiObj from '../src/utils/abi'
const Web3 = require('web3')
import Image from 'next/image'

function Index() {

  function connectWallet() {
    Swal.fire({
      title: 'Mint Date TBD!',
      html: 'Subscribe to our whitelist',
      icon: 'none',
      confirmButtonText: 'Ok'
    })
  }

  return (
    <Fragment>
      <div className="geeks"></div>

      <Header wallet={connectWallet} isReady={null} address={null} staticPage={false} />

      <div className="container">
        <div className="logo" style={{textAlign: 'center'}}>
          <img src='/assets/logo.gif' alt='logo' style={{ width: '30vh' }} />
        </div>

        <div className="planet">
          <img src='/assets/planet.png' alt='logo' style={{ width: '100%' }} />
        </div>

        <div className="balloon center-grid">
          <img src='/assets/balloons.gif' style={{ display: 'inline', width: '75%', height: 'auto', borderRadius: '20px' }} className='image-frame' />
        </div>

        <div className="whitelist top-center-grid">
          <div className="form-container" style={{ width: '80%' }}>
            <div className='content-container'>

              <div style={{ margin: 20 }}>

              </div>

              <div style={{ flex: 1, marginTop: 10, textAlign: 'justify' }}>
                Bad Balloons is a collection of <div className='colorGradient'>3333</div> random generated Ballons stored on the <div className='colorGradient'>Ethereum</div> Blockchain.
              </div>

              <br />

              <button className='button' style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 20 }}>
                Whitelist
              </button>

              <div style={{marginTop: '20px'}}>
                  <a href='https://discord.gg/cDh6gbn59A' className='mr-10' target='_blank' rel="noreferrer">
                    <Image src='/assets/discord.svg' alt='discord' width='30' height='30' />
                  </a>

                  <a href='https://twitter.com/FantomChess' target='_blank' className='mr-10' rel="noreferrer">
                    <Image src='/assets/twitter.svg' alt='twitter' width='30' height='30' />
                  </a>

                  <a href='https://twitter.com/FantomChess' target='_blank' className='mr-10' rel="noreferrer">
                    <Image src='/assets/instagram.png' alt='twitter' width='30' height='30' />
                  </a>
                </div>
            </div>
          </div>
        </div>

        <div class="roadmap top-center-grid" style={{color: 'white', textAlign: 'center'}}>
          <div>
            Roadmap

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            item

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            item

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            item

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            item

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            item

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            item

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          </div>
        </div>


        <div class="galaxy bottom-right-grid">
          <img src='/assets/portal.png' className='image-frame' style={{width: 'auto'}} />
        </div>
      </div>
      <div className='stars'></div>
    </Fragment>
  )
}

export default Index
