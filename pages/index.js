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
          <img src='/assets/logo.gif' alt='logo' style={{ width: '90vh' }} />
        </div>

        <div className="planet">
          <img src='/assets/planet.png' alt='logo' style={{ width: '30vw' }} />
        </div>

        <div className="balloon center-grid" style={{ marginTop: '-20vh' }}>
          <img src='/assets/balloons.gif' style={{ display: 'inline', width: '75%', height: 'auto', borderRadius: '20px' }} className='image-frame' />
        </div>

        <div className="whitelist top-center-grid">
          <div className="form-container" style={{ width: '80%' }}>
            <div className='content-container' style={{ height: '100%' }}>
              <div style={{ marginTop: 10, textAlign: 'center', fontSize: '2.5vw', color: 'white', textTransform: 'capitalize' }}>
                A collection of <div className='colorGradient'>XXXX</div> handly maded Ballons stored on the <div className='colorGradient'>Fantom</div> Blockchain for <div className='colorGradient'>XX FTM</div> each.
              </div>

              <br />

              <a href='https://discord.com/invite/YV7ezZsUkV' target='_blank' className='button' style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 20, width: '50%', height: 70, fontSize: '25px' }}>
                Join Discord
              </a>

              <div style={{ marginTop: '20px' }}>
                <a href='https://discord.com/invite/YV7ezZsUkV' className='mr-10' target='_blank' rel="noreferrer">
                  <FontAwesomeIcon icon={faDiscord} size='2x' style={{ color: 'white' }} />
                </a>

                <a href='https://twitter.com/badballons' target='_blank' className='mr-10' rel="noreferrer">
                  <FontAwesomeIcon icon={faTwitter} size='2x' style={{ color: 'white' }} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="roadmap top-center-grid" style={{ color: 'white', marginTop: '100px', fontSize: '20px', textTransform: 'capitalize' }}>
          <div style={{ width: '100%' }}>
            <div>
              <div className="form-container" style={{ width: '65%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>

                <h1 className='colorGradient' style={{ textAlign: 'center' }}>What is the collection for?</h1>

                <div style={{ textAlign: 'left', fontSize: '30px' }}>
                  <br />
                  - A collection of <div className='colorGradient'>XXXX</div> unique NFT PFPs with an fresh new and innovative balloon art style

                  <br />
                  <br />
                  - To create a community of revolutionaries and explore people's artistic side. That's important
                </div>

              </div>

              <div style={{ textAlign: 'center', marginTop: '-50px', zIndex: 9999, position: 'relative'}}>
                <img src='/assets/5_ballons.png' alt='logo' style={{ width: '90vw' }} />
              </div>
              

              <br/>
              <br/>

              <div className="form-container" style={{ width: '65%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
                <h1 className='colorGradient'>What makes it different from the others?</h1>

                <div style={{ textAlign: 'left', fontSize: '30px' }}>
                  <br />
                  - Balloons lmao

                  <br />
                  <br />
                  - An entire universe and story behind the NFTs, promising the creation of a unique community

                  <br />
                  <br />
                  - Handmade arts, created from asbolute scratch by our artist <div className='gold'>(since I bet you've identified with a balloon before...)</div>
                </div>

              </div>


            </div>

            <br />
            <br />

            <div className='minting-rewards' style={{ justifyContent: 'end' }}>
              <div className='flex-responsive' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ fontSize: '30px' }}>
                  <h1 className='gold'>MINTING REWARDS:</h1>

                  <br />

                  - EXCLUSIVE DISCORD GIVEAWAYS EVERY WEEK!

                  <br />
                  <br />

                  - FREE MINT PASS FOR FUTURE PROJECTS

                  <br />


                </div>

                <div>
                  <img src='/assets/golden-balloon.png' className='invisible' alt='logo' style={{ width: '40vw' }} />
                </div>
              </div>
            </div>

            <br />
            <br />
            <br />
            <br />

            <div className='minting-rewards'>
              <div className='flex-responsive' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                <div>
                  <img className='invisible' src='/assets/balloon-hold.png' alt='logo' style={{ width: '40vw' }} />
                </div>

                <div style={{ fontSize: '30px', marginLeft: 'auto', marginRight: 'auto' }}>
                  <h1 className='gold'>HOLDING REWARDS:</h1>

                  <br />
                  <br />

                  - AIRDROPS

                  <br />
                  <br />

                  - <div className='gold'>HOLDERS TRAVEL GIVEAWAYS</div> (Holders Travel Giveaway - with the CEOs to anywhere in the world, all paid for.)

                  <br />
                  <br />

                  - (DAO VOTING POWER) WE ARE CREATING A SYSTEM FOR MEMBERS THAT ACQUIRES AN NFT <div className='gold'>HAVE A VOICE</div> IN THE <div>NEXT PROJECT DECISIONS</div>
                  
                  <br />
                  <br />

                  - GIVEAWAYS


                </div>
              </div>


            </div>

            <br />
            <br />
            <br />
            <br />

            <div id="roadmap" className='roadmap-container' style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto' }}>
              <h1 className='colorGradient' style={{ fontSize: '90 px' }}>Roadmap</h1>

              <br />
              <br />

              <div className='roadmap-header'>
                1. Launch of the collection
              </div>

              <br />

              - social creation: twitter and discord

              <br />
              <br />

              - marketing campaign

              <br />
              <br />

              - launch of the collection in FTM Blockchain

              <br />
              <br />

              - airdrop to Fantom Chess holders (date:__)

              <br />
              <br />

              - public mint (date:__)

              <br />
              <br />
              <br />
              <br />

              <div className='roadmap-header'>
                2. connection with the community
              </div>

              <br />

              - HOLDERS AUTOMATICALLY GET FREE MINT FOR UPCOMING RELEASES

              <br />
              <br />

              - EXCLUSIVE GIVEAWAYS FOR COMMUNITY PARTICIPANTS

              <br />
              <br />

              - (DAO VOTING POWER) WE WILL CREATE A SYSTEM FOR MEMBERS THAT ACQUIRES AN NET HAVE A VOICE IN THE NEXT PROJECT DECISIONS

              <br />
              <br />
              <br />
              <br />

              <div className='roadmap-header'>
                3. MORE SOON...
              </div>

              <br />
              <br />
              <br />
              <br />
            </div>

            <br />
            <br />
            <br />
            <br />

            <br />
            <br />
            <br />
            <br />

            <br />
            <br />
            <br />
            <br />

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




        <div className="galaxy bottom-right-grid">
          <img src='/assets/portal.png' className='image-frame' style={{ width: '50vw', height: 'auto' }} />
        </div>
      </div>
      <div className='stars'></div>
    </Fragment>
  )
}

export default Index
