import React from 'react'
import Image from 'next/image'
import { Fragment } from 'react'

export default function Header({ wallet, isReady, address, staticPage }) {
    return (
        <Fragment>
            <div className="scrolling-image-container">
                <div className="scrolling-image"></div>
            </div>

            <div className="header">
            <div className='menus'>
                <div className="primary-navigation">
                    <ul style={{ padding: 0 }}>
                        <li>
                            <a href="/view">View</a>
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
                    <Image src='/assets/discord.svg' alt='discord' width='30' height='30' />
                </a>

                <a href='https://twitter.com/FantomChess' target='_blank' className='mr-10' rel="noreferrer">
                    <Image src='/assets/twitter.svg' alt='twitter' width='30' height='30' />
                </a>

                <a href='https://twitter.com/FantomChess' target='_blank' className='mr-10' rel="noreferrer">
                    <Image src='/assets/instagram.png' alt='twitter' width='30' height='30' />
                </a>

            </div>

            {!staticPage && <button className='button' onClick={wallet}>
                {isReady ? address?.substring(0, 6) + "..." + address?.substring(address.length - 4, address.length) : "Connect"} { }
            </button>}
        </div>
        </Fragment>
    )
}