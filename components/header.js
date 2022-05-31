import React from 'react'
import Image from 'next/image'
import { Fragment } from 'react'

export default function Header({ wallet, isReady, address, staticPage }) {
    return (
        <Fragment>
            <div className="header">
            <div className='menus'>
                <div className="primary-navigation">
                    <ul style={{ padding: 0 }}>
                        <li>
                            <a href="/view">View</a>
                        </li>

                        <li>
                            <a href="/history">history</a>
                        </li>

                        <li>
                            <a href="/roadmap">Roadmap</a>
                        </li>
                    </ul>
                </div>
            </div>
        
            <div>
                

            </div>

            {!staticPage && <button className='button' onClick={wallet}>
                {isReady ? address?.substring(0, 6) + "..." + address?.substring(address.length - 4, address.length) : "Connect"} { }
            </button>}

            
        </div>
        </Fragment>
    )
}