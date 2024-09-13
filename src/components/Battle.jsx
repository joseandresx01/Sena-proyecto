import React from 'react'
import blastoise2 from '../assets/blastoise2.png';
import aura2 from '../assets/aura2.png';
import charizard3 from '../assets/charizard3.png';
import aura1 from '../assets/aura1.png';
import player1 from '../assets/player1.png'
import you from '../assets/you.png';
import raya from '../assets/raya.png';
import ataque1 from '../assets/ataque1.png';
import ataque2 from '../assets/ataque2.png';
import ataque3 from '../assets/ataque3.png';
import ataque4 from '../assets/ataque4.png';
import { useState } from 'react';

const Battle = () => {

  const [ataque, setAtaque] = useState(1);

  const AtaqueSeleccionado = (NumeroDeAtaque) => {
    setAtaque(NumeroDeAtaque);
  };

  const ClaseDeAtaque = (NumeroDeAtaque) => {
    if (NumeroDeAtaque === ataque) {
      return 'bg-orange-50 border-2 border-orange-600 text-orange-600';
    } else {
      return 'bg-zinc-800 text-white';
    }
  };

  return (
    <div className='clash flex flex-col content-center items-center bg-black text-white'>
      <div className='seccion9 mt-3'>
        <h1 className='text-4xl'>Battleground</h1>
      </div>
      <div className='seccion10 flex'>
        <div>
          <img className='blastoise2 absolute top-24 left-1 z-10 w-32' src={blastoise2} alt="" />
          <img className='aura2 absolute top-0 left-1 z-0 w-44' src={aura2} alt="" />
        </div>
        <div>
          <h1 className='vs absolute top-36 right-[160px] bg-zinc-900 pt-3 pb-3 pl-2 pr-2 rounded-xl text-zinc-500'>V/S</h1>
        </div>
        <div>
          <img className='charizard3 absolute top-20 right-1 z-10 w-32' src={charizard3} alt="" />
          <img className='aura1 absolute top-0 right-1 z-0 w-44' src={aura1} alt="" />
        </div>
      </div>
      <div className='seccion11 flex mt-52 z-10'>
        <div>
          <img src={player1} alt="" />
        </div>
        <div>
          <img src={you} alt="" />
        </div>
      </div>
      <div className='seccion12'>
        <img className='raya w-96' src={raya} alt="" />
      </div>
      <div className='seccion13'>
        <h1 className='text-2xl mb-2'>Choose Your Attack</h1>
      </div>
      <div className='seccion14 flex flex-col gap-6'>
        <div className='flex gap-5'>
          <div className={`${ClaseDeAtaque(1)} pt-1 pb-1 pl-6 pr-6 rounded-lg cursor-pointer`} onClick={() => AtaqueSeleccionado(1)}>
            <img className='w-28 h-28' src={ataque1} alt="" />
            <h1 className='font-semibold flex justify-center'>Giga Impact</h1>
          </div>
          <div
            className={`${ClaseDeAtaque(2)} pt-1 pb-1 pl-6 pr-6 rounded-lg cursor-pointer`} onClick={() => AtaqueSeleccionado(2)}>
            <img className='w-28 h-28' src={ataque2} alt="" />
            <h1 className='font-semibold flex justify-center'>Aerial Ace</h1>
          </div>
        </div>
        <div className='flex gap-5 mb-1'>
          <div
            className={`${ClaseDeAtaque(3)} pt-1 pb-1 pl-6 pr-6 rounded-lg cursor-pointer`} onClick={() => AtaqueSeleccionado(3)}>
            <img className='w-28 h-28' src={ataque3} alt="" />
            <h1 className='font-semibold flex justify-center'>Flamethrower</h1>
          </div>
          <div
            className={`${ClaseDeAtaque(4)} pt-1 pb-1 pl-6 pr-6 rounded-lg cursor-pointer`} onClick={() => AtaqueSeleccionado(4)}>
            <img className='w-28 h-28' src={ataque4} alt="" />
            <h1 className='font-semibold flex justify-center'>Dragon Tail</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Battle;