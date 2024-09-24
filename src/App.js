import logo from './logo.svg';
import './App.css';
import {React, useRef, useState} from "react";

  function App() {

       const  [number, setNumber] = useState('');

       // handle click
       const handleClick = (e) => {
        setNumber(number.concat(e.target.value))
       };

       // handle clear event 
       const handleClear = () =>{
        setNumber('')
       };

       // handle Slice
       const handleSlice = () =>{
        setNumber(number.slice(0, -1))
       };

       // handle SLICE
       const handleAnswer = () =>{
        try {
            setNumber(eval(number).toString())
        } catch (error) {
            setNumber('invalid')
        }
       };


       return (
        <form>
            <div className='bg-gray-900 w-96 h-screen mx-auto rounded-lg overflow-hidden mt-10'>
                <div className='font-bold text-3xl w-full flex justify-center text-white p-2'>
                    <p>CACULATOR</p>
                </div>
                <div className='w-full h-20 p-2'>
                    <input
                    type='text'
                    placeholder='0'
                    value={number}
                    className='w-full h-full border border-white text-4xl text-right pr-5 bg-gray-500 text-white'
                    />
                </div>

                <div className='grid grid-cols-4 mt-10 gap-2 mx-3'>
                    <button  onClick={handleClear} className='text-gray w-20 h-20 bg-white font-bold flex justify-center items-center rounded-lg shadow text-3xl'>AC</button>
                    <button  onClick={handleSlice} className='text-gray w-20 h-20 bg-white font-bold flex justify-center items-center rounded-lg shadow text-3xl'>C</button>
                    <button  value='/' onClick={handleClick} className='text-gray w-20 h-20 bg-white font-bold flex justify-center items-center rounded-lg shadow text-3xl'>/</button>
                    <button  value='+' onClick={handleClick} className='text-gray w-20 bg-white font-bold flex justify-center items-center rounded-lg shadow text-3xl row-span-2 h-40'>+</button>

                    <button value='9' onClick={handleClick} className='text-white w-20 h-20 bg-indigo-500 font-bold flex justify-center items-center rounded-lg shadow text-3xl'>9</button>
                    <button value='8' onClick={handleClick} className='text-white w-20 h-20 bg-indigo-500 font-bold flex justify-center items-center rounded-lg shadow text-3xl'>8</button>
                    <button value='7' onClick={handleClick} className='text-white w-20 h-20 bg-indigo-500 font-bold flex justify-center items-center rounded-lg shadow text-3xl'>7</button>

                    <button value='4' onClick={handleClick} className='text-white w-20 h-20 bg-indigo-500 font-bold flex justify-center items-center rounded-lg shadow text-3xl'>4</button>
                    <button value='5' onClick={handleClick} className='text-white w-20 h-20 bg-indigo-500 font-bold flex justify-center items-center rounded-lg shadow text-3xl'>5</button>
                    <button value='6' onClick={handleClick} className='text-white w-20 h-20 bg-indigo-500 font-bold flex justify-center items-center rounded-lg shadow text-3xl'>6</button>
                    <button value='-' onClick={handleClick} className='text-gray w-20 h-20 bg-white font-bold flex justify-center items-center rounded-lg shadow text-3xl'>-</button>

                    <button value='1' onClick={handleClick} className='text-white w-20 h-20 bg-indigo-500 font-bold flex justify-center items-center rounded-lg shadow text-3xl'>1</button>
                    <button value='2' onClick={handleClick} className='text-white w-20 h-20 bg-indigo-500 font-bold flex justify-center items-center rounded-lg shadow text-3xl'>2</button>
                    <button value='3' onClick={handleClick} className='text-white w-20 h-20 bg-indigo-500 font-bold flex justify-center items-center rounded-lg shadow text-3xl'>3</button>
                    <button value='*' onClick={handleClick} className='text-gray w-20 h-20 bg-white font-bold flex justify-center items-center rounded-lg shadow text-3xl'>*</button>
                    
                    
                    <button value='.' onClick={handleClick} className='text-white w-20 h-20 bg-indigo-500 font-bold flex justify-center items-center rounded-lg shadow text-3xl'>.</button>
                    <button value='0' onClick={handleClick} className='text-white w-20 h-20 bg-indigo-500 font-bold flex justify-center items-center rounded-lg shadow text-3xl'>0</button>
                    <button onClick={handleAnswer} className='text-gray w-41 h-20 bg-orange-500  font-bold flex justify-center items-center rounded-lg shadow text-3xl col-span-2'>=</button>
                </div>
            </div>
        </form>
       )
    }

export default App;
