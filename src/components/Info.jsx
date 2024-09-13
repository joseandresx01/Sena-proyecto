import React from 'react'
import { Link } from 'react-router-dom'
import persona1 from '../assets/persona1.png';
import charizard2 from '../assets/charizard2.png';
import particulasf from '../assets/particulasf.png';
import particulas from '../assets/particulas.png';
import fuego from '../assets/fuego.png';
import pokebola2 from '../assets/pokebola2.png';
import izq from '../assets/izq.png';
import der from '../assets/der.png';

const Info = () => {
  return (
    <div className='clash flex flex-col content-center items-center bg-black text-white'>
      <div className='seccion4 flex gap-56 mt-6 z-10'>
        <Link to="/">
          <div className='volver w-11 bg-zinc-700 pt-3 pb-3 pr-4 pl-4 rounded-lg'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#bababa" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" /></svg></div>
        </Link>
        <div className='persona1'><img className='w-11' src={persona1} alt="" /></div>
      </div>
      <div className='seccion5'>
        <img className='flex absolute top-0 p-2' src={particulasf} alt="" />
        <img className='absolute top-0 p-2' src={particulas} alt="" />
        <img className='p-5' src={charizard2} alt="" />
      </div>
      <div className='seccion6 flex flex-col items-center content-center'>
        <h1 className='text-4xl font-semibold'>charizard</h1>
        <button className='flex items-center content-center bg-orange-100 pt-1 pb-1 pl-3 pr-3 rounded-full border-2 border-orange-600 text-orange-700 font-medium gap-2'><img src={fuego} alt="" />Fire</button>
        <h1 className='text-sm text-center font-extralight w-80'>Charizard is known for its dragon-like appearance, with a large wingspan and a long, pointed tail. He is capable of using powerful Fire-type attacks as well as Flying-type moves.</h1>
        <a className='text-yellow-500 text-lg underline' href="">View Stats</a>
      </div>
      <div className='seccion7 flex gap-[154px]'>
        <div className='izquierda w-24'>
          <img className='absolute top-[480px]' src={der} alt="" />
        </div>
        <div className='derecha w-24'>
          <img className='absolute top-[480px]' src={izq} alt="" />
        </div>
      </div>
      <Link to="/Battle">
        <div className='seccion8 flex flex-col items-center content-center'>
          <div className='arrastrar absolute flex flex-col items-center content-center bg-white rounded-full pt-3 pb-3 pl-1 pr-1 w-12 top-[595px]'>
            <svg className='w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#000001" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" /></svg>
            <svg className='w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#7d7d7d" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" /></svg>
            <svg className='w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#e1e1e1" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" /></svg>
            <img src={pokebola2} alt="" />
          </div>
          <h1 className='text-base mt-[153px]'>Swipe up to select</h1>
        </div>
      </Link>
    </div>
  )
}

export default Info;