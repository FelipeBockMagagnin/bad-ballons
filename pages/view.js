import React, { useState, useEffect, Fragment } from "react";
let Web3 = require("web3");
import Image from 'next/image'
import Swal from 'sweetalert2'
import axios from "axios";
import abiObj from '../src/utils/abi'

function Index() {
  const [web3, setWeb3] = useState(null);
  const [address, setAddress] = useState(null);
  const [contract, setContract] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const [balance, setBalance] = useState(0)
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);

  let abi = abiObj;
  let contractAddress = "0x292c25415dac88bfd9a0017270357e9d42b7deb7";
  let videoAddress = 'https://bad-ballons.vercel.app/img/';

  useEffect(() => {
    connectWallet();
  }, []);

  function connectWallet() {
    if (!window.ethereum) {
      alert("Please install MetaMask");
      setIsReady(false);
      return;
    }

    ethereum
      .request({ method: "eth_requestAccounts" })
      .then((accounts) => {
        console.log(accounts);
        setAddress(accounts[0]);
        let w3 = new Web3(ethereum);
        setWeb3(w3);
        let c = new w3.eth.Contract(abi, contractAddress);
        setIsReady(true);
        setLoading(true);

        c.methods
          .balanceOf(accounts[0])
          .call()
          .then((_balance) => {
            setBalance(_balance);
          })
          .catch((err) => console.log(err));

        c.methods
          .itemsOwned(accounts[0])
          .call()
          .then((pieces) => {
            console.log('pieces owned', pieces);

            let responses = [];

            let array = [];

            pieces.forEach(piece => {
              array.push({
                id: piece
              })
            });

            setGames(array);
            setLoading(false);
           
          })
          .catch((err) => console.log(err))
      });
  };

  return (
    <Fragment>
      <div className="geeks"></div>
      <div className="header">
        <a className="tittle colorGradient" href='/'>Bad Balloons</a>

        <div className='menus'>
          <div>You own ({balance}) games</div>
        </div>

        <button className='button' onClick={connectWallet}>
          {isReady ? address?.substring(0, 6) + "..." + address?.substring(address.length - 4, address.length) : "Connect"} { }
        </button>
      </div>

      <div id="app" style={{ height: '100vh' }}>
        <div className="form-container" style={{ width: '82vw', maxHeight: '70vh', overflowY: 'scroll' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>

            {loading && <div>Loading...</div>}
            {!loading && games.length == 0 && <div>You don't have a Bad Balloon</div>}

            {games.map(game => {
              return (
                <div style={{ padding: 20, width: 300 }}>
                  Bad Balloon #{game.id}
                  <br></br>
                  <img width='200' height='200' src={videoAddress + game.id + '.png'} />
                  

                </div>
              )
            })}
          </div>
          <br />
        </div>
      </div>
    </Fragment>
  );
}

export default Index;
