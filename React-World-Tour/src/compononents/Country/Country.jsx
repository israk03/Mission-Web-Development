/* eslint-disable react/prop-types */
import { useState } from 'react'
import './Country.css'

export default function Country({country, handleVisitedCountry}) {
    const {name, flags} = country
    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

  return (
    <div className='Country'>
        <h5>Name: {name.common}</h5>
        <img src={flags.png} alt="" />
        <button onClick={()=>handleVisitedCountry(country)}>Add to Visited Country</button>
        <br />
        <button className='btn' onClick={handleVisited}>{visited? 'VISITED' : 'GOING'}</button>
        {visited ? 'I have visited this country.' : 'I wanna visited this country.'}
    </div>
  )
}
