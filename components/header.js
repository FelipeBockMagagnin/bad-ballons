import React from 'react'

export default function Header({ wallet, isReady, address, staticPage }) {
    return (
        <div className="header">
            <a className="tittle colorGradient" href='/'>Bad Balloons</a>

            <div className='menus'>
                <div className="primary-navigation">
                    <ul style={{padding: 0}}>
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

            {!staticPage && <button className='button' onClick={wallet}>
                {isReady ? address?.substring(0, 6) + "..." + address?.substring(address.length - 4, address.length) : "Connect"} { }
            </button> }
        </div>
    )
}