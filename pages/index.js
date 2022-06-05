import React, { useState, useEffect, Fragment } from 'react'
import Swal from 'sweetalert2'
import Header from '../components/header'
import abiObj from '../src/utils/abi'
const Web3 = require('web3')
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

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
        <div className="logo" style={{ textAlign: 'center' }}>
          <img src='/assets/logo.gif' alt='logo' style={{ width: '60vh' }} />
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
                A collection of <div className='colorGradient'>XXXX</div> random generated Ballons stored on the <div className='colorGradient'>Ethereum</div> Blockchain for <div className='colorGradient'>0.XX ETH</div> each.
              </div>

              <div>
                <br />
                <div className='colorGradient'>MINTING REWARDS:</div>

                <br />
                - 1/1 Token Reward up to $25K in ETH
                (By mint one of the 5 special golden balloons, get $5k ETH in your wallet)

                <br />
                - Exclusive discord giveaways every week!

                <br />
                - 3% of Transaction Royalties go to whoever originally minted

                <br />
                <br />

                <div className='colorGradient'>HOLDING REWARDS</div>

                <br />
                - AirDrops

                <br />
                - Holders Travels Giveaway (3 trips to anywhere in the world all paid for)

                <br />
                - (DAO Voting Power) We will create a system for members that acquires an NFT have a voice in the next project decisions

                <br />
                - Exclusive access to the Bad Store with discounted Balloons custom clothing items.

                <br />
                - 3D NFTs Ready for Metaverse
              </div>

              <br />

              <button className='button' style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 20 }}>
                Whitelist
              </button>

              <div style={{ marginTop: '20px' }}>
                <a href='https://discord.com/invite/YV7ezZsUkV' className='mr-10' target='_blank' rel="noreferrer">
                  <FontAwesomeIcon icon={faDiscord} size='2x' />
                </a>

                <a href='https://twitter.com/badballoonsNFT' target='_blank' className='mr-10' rel="noreferrer">
                  <FontAwesomeIcon icon={faTwitter} size='2x' />
                </a>

                <a href='https://www.instagram.com/badballoonsnft/' target='_blank' className='mr-10' rel="noreferrer">
                  <FontAwesomeIcon icon={faInstagram} size='2x' />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="roadmap top-center-grid" style={{ color: 'white', textAlign: 'center', marginTop: '100px' }}>
          <div>
            <h1 className='colorGradient'>Roadmap</h1>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <FontAwesomeIcon icon={faSpinner} size='2x' className="spinner" /> 1. Launch of the collection

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <FontAwesomeIcon icon={faSpinner} size='2x' className="spinner" /> 2. Connection with the community

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <FontAwesomeIcon icon={faSpinner} size='2x' className="spinner" /> 3. Altruistic Movement

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <FontAwesomeIcon icon={faSpinner} size='2x' className="spinner" /> 4. Balloons Brand

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <FontAwesomeIcon icon={faSpinner} size='2x' className="spinner" /> 5. Metaverse

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <FontAwesomeIcon icon={faSpinner} size='2x' className="spinner" /> 6. Game NFT Bad Balloons

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>


        <div class="galaxy bottom-right-grid">
          <img src='/assets/portal.png' className='image-frame' style={{ width: 'auto' }} />
        </div>
      </div>
      <div className='stars'></div>
    </Fragment>
  )
}

export default Index
