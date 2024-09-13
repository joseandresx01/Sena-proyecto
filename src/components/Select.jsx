import React from 'react';
import { Link } from 'react-router-dom'
import persona1 from '../assets/persona1.png';
import pokebola1 from '../assets/pokebola1.png';
import pokeboladefondo from '../assets/pokeboladefondo.png';
import bulbasaur from '../assets/bulbasaur.png';
import charizard from '../assets/charizard.png';
import scrollear from '../assets/scrollear.png';
import blastoise from '../assets/blastoise.png';


const Select = () => {
  return (
    <div className='clash relative flex flex-col content-center items-center bg-black text-white'>
      <div className='seccion1 flex gap-56 mt-6 z-10'>
        <Link to="/">
          <div className='volver w-11 bg-zinc-700 pt-3 pb-3 pr-4 pl-4 rounded-lg'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#bababa" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" /></svg></div>
        </Link>
        <div className='persona1'><img className='w-11' src={persona1} alt="" /></div>
      </div>
      <div className='seccion2 mr-24 mt-[18px]'>
        <h1 className='text-3xl font-extralight'>Select your</h1>
        <div className='flex items-center content-center gap-2'>
          <h1 className='z-10 text-4xl font-semibold'>Pokèmon</h1>
          <img src={pokebola1} alt="" />
        </div>
      </div>
      <div className='seccion3 flex'>
        <div>
          <img className='pokebolafondo absolute top-14 left-2 z-0 w-80' src={pokeboladefondo} alt="" />
          <img className='absolute top-96 left-6' src={scrollear} alt="" />
          <h1 className='pr-52 mt-[450px] mb-[44px] text-xl font-extralight'>12 Pokèmons <br /> in your <br /> Pokèdex</h1>
        </div>
        <div className=''>
          <Link to="/Info">
            <img className='absolute top-32 right-2 z-10 w-48' src={bulbasaur} alt="" />
            <img className='absolute top-72 right-2 z-20 w-60' src={charizard} alt="" />
            <img className='absolute top-[462px] right-2 z-10 w-48' src={blastoise} alt="" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Select;