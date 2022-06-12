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
          <img src='/assets/planet.png' alt='logo' style={{ width: '100%' }} />
        </div>

        <div className="balloon center-grid" style={{marginTop: '-20vh'}}>
          <img src='/assets/balloons.gif' style={{ display: 'inline', width: '75%', height: 'auto', borderRadius: '20px' }} className='image-frame' />
        </div>

        <div className="whitelist top-center-grid" style={{marginTop: '-20vh'}}>
          <div className="form-container" style={{ width: '80%' }}>
            <div className='content-container' style={{ height: '100%' }}>
              <div style={{ marginTop: 10, textAlign: 'center', fontSize: '2.5vw', color: 'white', textTransform: 'capitalize' }}>
                A collection of <div className='colorGradient'>XXXX</div> handly maded Ballons stored on the <div className='colorGradient'>Ethereum</div> Blockchain for <div className='colorGradient'>0.XX ETH</div> each.
              </div>

              <br />

              <button className='button' style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 20, width: '50%', height: 70, fontSize: '25px' }}>
                Whitelist
              </button>

              <div style={{ marginTop: '20px' }}>
                <a href='https://discord.com/invite/YV7ezZsUkV' className='mr-10' target='_blank' rel="noreferrer">
                  <FontAwesomeIcon icon={faDiscord} size='2x' style={{color: 'white'}} />
                </a>

                <a href='https://twitter.com/badballoonsNFT' target='_blank' className='mr-10' rel="noreferrer">
                  <FontAwesomeIcon icon={faTwitter} size='2x' style={{color: 'white'}} />
                </a>

                <a href='https://www.instagram.com/badballoonsnft/' target='_blank' className='mr-10' rel="noreferrer">
                  <FontAwesomeIcon icon={faInstagram} size='2x' style={{color: 'white'}} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="roadmap top-center-grid" style={{ color: 'white', marginTop: '100px', fontSize: '20px', textTransform: 'capitalize' }}>
          <div style={{width: '100%'}}>
            <div>
              <div className="form-container" style={{ width: '85%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>

                <h1 className='colorGradient' style={{textAlign: 'center'}}>What is the collection for?</h1>

                <div style={{textAlign: 'left', fontSize: '30px'}}>
                  <br />
                  - A collection of XXXX unique NFT PFPs with an fresh new and innovative balloon art style

                  <br />
                  <br />
                  - To save children through the web3

                  <br />
                  <br />
                  - To Create an exclusive community of revolutionaries

                  <br/>
                  <br/>

                  - Access to BadVerse, the world of balloons in the metaverse
                </div>
                
              </div>

              <br />
              <br />

              <div className="form-container" style={{ width: '85%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
                <h1 className='colorGradient'>What makes it different from the others?</h1>

                <div style={{textAlign: 'left', fontSize: '30px'}}>
                  <br />
                  - Balloons lmao

                  <br />
                  <br />
                  - An entire universe and story behind the NFTs, promising the creation of a unique community

                  <br />
                  <br />
                  - Handmade arts, created from asbolute scratch by our artist <div className='gold'>(since I bet you've identified with a balloon before...)</div>

                  <br />
                  <br />
                  - By buying an NFT you are helping many people in need. We’ll be donating 10% of the total amount raised to the <div className='colorGradient'>(DAO choice)</div> foundation

                </div>
                
              </div>

              <br/>
              <br/>

              <div className="form-container" style={{ width: '85%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
                <h1 className='colorGradient'>What will we do with the money?</h1>

                <div style={{textAlign: 'left', fontSize: '30px'}}>
                  <br />
                  <div className='gold'>- 10%</div> goes to donation

                  <br />
                  <br />
                  <div className='gold'>- 20%</div> goes right back into the project

                  <br />
                  <br />
                  <div className='gold'>- 70%</div> to the team
                </div>
              </div>

            </div>

            <br/>
            <br/>

            <div className='minting-rewards'>
              <div>
                <h1 className='gold'>MINTING REWARDS:</h1>

                <div style={{fontSize: '30px'}}>
                  <br/>
                  
                  - 1/1 TOKEN REWARD UP TO <div className='colorGradient'>$25K</div> IN ETH
                  
                  <br/>
                  <br/>

                  - EXCLUSIVE DISCORD GIVEAWAYS EVERY WEEK!

                  <br/>
                  <br/>

                  - VOTING POWER IN OUR <div className='gold'>DAO</div>
                </div> 
              </div>
              <div>

              </div>
            </div>

            <br/>
            <br/>

            <br/>
            <br/>

            <div className='minting-rewards'>
              <div>
                <h1 className='gold'>HOLDING REWARDS:</h1>

                <div style={{fontSize: '30px'}}>
                  <br/>
                  
                  - AIRDROPS
                  
                  <br/>
                  <br/>

                  - <div className='gold'>HOLDERS TRAVELS GIVEAWAYS</div> (3 TRIPS TO ANYWHERE IN THE WORLD ALL PAID FOR)

                  <br/>
                  <br/>

                  - (DAO VOTING POWER) WE ARE CREATING A SYSTEM FOR MEMBERS THAT ACQUIRES AN NFT <div className='gold'>HAVE A VOICE</div> IN THE <div>NEXT PROJECT DECISIONS</div>
                
                  <br/>
                  <br/>

                  - <div className='gold'>EXCLUSIVE ACCESS</div> TO THE <div className='gold'>BAD STORE</div> WITH DISCOUNTED BALLOONS CUSTOM CHOTHING ITEMS

                  <br/>
                  <br/>

                  - <div className='gold'>3D NFTS</div> READY FOT METAVERSE

                </div> 
              </div>
              <div>

              </div>
            </div>


            <h1 className='colorGradient'>Roadmap</h1>

            <br />
            <br />
            <br />
            <br />

            <FontAwesomeIcon icon={faSpinner} size='2x' className="spinner" /> 1. Loading
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
