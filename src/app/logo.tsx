'use client'
export default function Logo(){
    return(
        <a href="/" onClick={event => {event.preventDefault()}}><p className="comfortaa text-4xl content-center">Portfolio</p></a>
    );
}

