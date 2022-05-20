import React from 'react'
import Image from 'next/image'

export default function Header({ wallet, isReady, address, staticPage }) {
    return (
        <div className="header">
            <div className="scrolling-image-container">
                <div className="scrolling-image"></div>
            </div>

            <div className='menus'>
                <div className="primary-navigation">
                    <ul style={{ padding: 0 }}>
                        <li>
                            <a href="/view">View</a>
                        </li>

                        <li>
                            <a href="/whitelist">Whitelist</a>
                        </li>

                        <li>
                            <a href="/roadmap">Roadmap</a>
                        </li>

                        <li>
                            <a href="/about">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        
            <div>
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

            {!staticPage && <button className='button' onClick={wallet}>
                {isReady ? address?.substring(0, 6) + "..." + address?.substring(address.length - 4, address.length) : "Connect"} { }
            </button>}
        </div>
    )
}