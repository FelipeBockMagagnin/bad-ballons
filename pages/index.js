import React, { useState, useEffect, Fragment } from 'react'
import Image from 'next/image'
import Swal from 'sweetalert2'
import Header from '../components/header'
import abiObj from '../src/utils/abi'
const Web3 = require('web3')

function Index () {
  const [web3, setWeb3] = useState(null)
  const [address, setAddress] = useState(null)
  const [contract, setContract] = useState(null)
  const [balance, setBalance] = useState(0)
  const [maxMintable, setMaxMintable] = useState(0)
  const [supply, setSupply] = useState(0)
  const [isClaiming, setIsClaiming] = useState(false)
  const [isReady, setIsReady] = useState(false)

  const abi = abiObj
  const contractAddress = '0x292c25415dac88bfd9a0017270357e9d42b7deb7'
  const txViewAddr = 'https://rinkeby.etherscan.io/tx/'
  const price = '0.05';

  useEffect(() => {
    connectWallet()
  }, [])

  function connectWallet () {
    if (!window.ethereum) {
      alert('Please install MetaMask')
      setIsReady(false)
      return
    }

    ethereum
      .request({ method: 'eth_requestAccounts' })
      .then((accounts) => {
        setAddress(accounts[0])
        const w3 = new Web3(ethereum)
        setWeb3(w3)
        const c = new w3.eth.Contract(abi, contractAddress)
        setContract(c)

        c.methods
          .totalSupply()
          .call()
          .then((supply) => {
            setIsReady(true)
            setSupply(supply)
          })
          .catch((err) => {
            setIsReady(false)
            setAddress(null)
            setSupply(0)
            setBalance(0)
            setMaxMintable(0)
            setContract(null)
            Swal.fire({
              title: 'Error!',
              html: 'Check if you are using the Ethereum Network',
              icon: 'error',
              confirmButtonText: 'Ok'
            })
            console.log(err)
          })

        c.methods
          .maxMintable()
          .call()
          .then((maxMintable) => {
            setMaxMintable(maxMintable)
          })
          .catch((err) => console.log(err))

        c.methods
          .balanceOf(accounts[0])
          .call()
          .then((_balance) => {
            setBalance(_balance)
          })
          .catch((err) => console.log(err))
      })
      .catch((err) => {
        setIsReady(false)
        Swal.fire({
          title: 'Error!',
          html: 'Check if you are using the Ethereum Network',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
        console.log(err)
      })
  }

  function handleClaim () {
    const tx = claim()
    console.log(tx)
  }

  async function loadData () {
    const totalSupply = await contract.methods
      .totalSupply()
      .call()

    setSupply(totalSupply)

    contract.methods
      .maxMintable()
      .call()
      .then((maxMintable) => {
        setMaxMintable(maxMintable)
      })
      .catch((err) => console.log(err))

    contract.methods
      .balanceOf(address)
      .call()
      .then((_balance) => {
        setBalance(_balance)
      })
      .catch((err) => console.log(err))
  }

  function claim () {
    setIsClaiming(true)
    const _price = web3.utils.toWei(price)

    contract.methods
      .claim()
      .send({
        gasLimit: '285000',
        to: contractAddress,
        from: address,
        value: _price
      })
      .once('error', (err) => {
        console.log(err)
        setIsClaiming(false)
      })
      .then((receipt) => {
        console.log(receipt)
        setIsClaiming(false)
        loadData()

        const link = txViewAddr + receipt.transactionHash

        Swal.fire({
          title: 'Success!',
          html: 'You can check the transaction at <a href="' + link + '" target="_blank" style="color: blue">Etherscan</a>',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      })
  }

  return (
    <Fragment>
      <div className="geeks"></div>

      <Header wallet={connectWallet} isReady={isReady} address={address} />

      <div id="app">
        <div className="form-container">
          <div className='content-container'>

            <div style={{ flex: 1, marginTop: 10 }}>
              <h2 className="colorGradient" >Bad Balloons</h2>
              <br />
              <br />

              Bad Balloons is a collection of <div className='colorGradient'>{maxMintable}</div> random generated Ballons stored on the <div className='colorGradient'>Ethereum</div> Blockchain.
              <br />
              <br />

              Price: <div className='colorGradient'>{price} ETH</div> each

              <br />
              <br />

              <a href='https://discord.gg/cDh6gbn59A' className='mr-10' target='_blank' rel="noreferrer">
                <Image src='/assets/discord.svg' alt='discord' width='20' height='20' />
              </a>

              <a href='https://twitter.com/FantomChess' target='_blank' className='mr-10' rel="noreferrer">
                <Image src='/assets/twitter.svg' alt='twitter' width='20' height='20' />
              </a>

              <a href='https://rinkeby.etherscan.io/address/0xaaf7cc2a92c8d60ccf73e6cef503fdcd69917431' className='mr-10' target='_blank' rel="noreferrer">
                <Image src='/assets/fantom.svg' alt='ftmscan' width='20' height='20' />
              </a>

              <a href='https://rinkeby.etherscan.io/address/0xaaf7cc2a92c8d60ccf73e6cef503fdcd69917431' className='mr-10' target='_blank' rel="noreferrer">
                <Image src='/assets/fantom.svg' alt='ftmscan' width='20' height='20' />
              </a>
            </div>
          </div>

          <br />

          {isReady && <div> Minted { supply + '/' + maxMintable } </div>}

          {!isReady && <div className='colorGradient'><br></br>Connect your wallet to claim</div>}

          {isReady && supply < 111 && <button className='button' style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 20, width: 300 }} onClick={handleClaim}>
            {isClaiming ? 'loading...' : 'Mint (' + price + ' ETH)'}
          </button>}

        </div>
      </div>
    </Fragment>
  )
}

export default Index
