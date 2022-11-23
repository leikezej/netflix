import React from 'react'

function Banner() {
  return (
    <header
        className="banner"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://i.imgur.com/e1hLQ2m.png")`,
            backgroundPosition: "center center",
        }}
    >
    
        <div className="banner__contents">
            <h1 className="banner__title"></h1>
            <div className="banner__buttons">
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My List</button>
            </div>
        </div>
    </header>
  )
}

export default Banner
