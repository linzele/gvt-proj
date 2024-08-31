import React, { useState } from 'react'
import { httpsCallable } from "firebase/functions";
import { myFunctions } from '../firebaseConfig';
import { useEffect } from 'react';

export default function OldCalculator() {

  useEffect(() => {
    const element = document.querySelector('.fade-in');
    setTimeout(() => {
      element.classList.add('show');
    }, 100); // A slight delay before starting the fade-in
  }, []);

  const [result, setResult] = useState(0);
  const [display, setDisplay] = useState('');
  const [resetFlag, setResetFlag] = useState(false);

  function handleDisplay(calculation) {
    if (resetFlag) {
      setDisplay('');
      setResetFlag(false);
    }

    // Check if the entered calculation is an operator
    const isOperator = ['+', '-', '*', '/'].includes(calculation);

    // Update the display
    setDisplay(prevText => prevText + calculation);
  }

  function deleteOne() {
    setDisplay(prevText => prevText.slice(0, -1))
  }

  const addMessage = httpsCallable(myFunctions, 'operationsEval');

  async function calculateResult() {
    try {
      // Evaluate the expression in the display
      const evalResult = await addMessage({ display: display });
      console.log(evalResult.data)
      setResult(evalResult.data);
      setDisplay(evalResult.data.toString()); // Show the result as the new display
      setResetFlag(true);
    } catch (error) {
      setDisplay('Error, Invalid');
    }
  }







  return (



    <div className='bg-black z-50 w-[450px] h-[70vh] pt-2 mx-auto inset-x-0 fixed inset-y-52 z-60 flex flex-col items-center rounded-2xl gap-2 fade-in'>
      <div className='text-white text-lg font-bold mt-1'>
        Arithmetic Cloud Calculator
      </div>
      <div className='border-white border-2 h-[10%] w-[75%] mt-12 rounded-2xl text-white flex justify-end items-center'>

        {(display === '') ? <p className='mx-5'>0</p> : <p className='mx-5'>{display}</p>}

      </div>


      <div className='h-[80%] w-[80%]   rounded-2xl text-white'>
        <div className='flex flex-row justify-evenly my-6'>
          <div className='w-16 h-16 bg-slate-300 rounded-full'>
            <button className='w-full h-full rounded-full text-black font-bold text-lg' onClick={() => setDisplay('')}>C</button>
          </div>
          <div className='w-16 h-16 bg-slate-300 rounded-full'>
            <button className='w-full h-full rounded-full text-black font-bold text-lg' onClick={() => deleteOne()}>Del</button>
          </div>
          <div className='w-16 h-16 bg-slate-300 rounded-full'>
            <button className='w-full h-full rounded-full text-black font-bold text-lg' onClick={() => handleDisplay('%')}>%</button>
          </div>
          <div className='w-16 h-16 bg-amber-500 rounded-3xl'>
            <button className='w-full h-full rounded-full  font-bold text-lg' onClick={() => handleDisplay('/')}>/</button>
          </div>
        </div>

        <div className='flex flex-row justify-evenly my-6'>
          <div className='w-16 h-16 bg-gray-400 rounded-full'>
            <button className='w-full h-full rounded-full font-bold text-lg' onClick={() => handleDisplay('7')}>7</button>
          </div>
          <div className='w-16 h-16 bg-gray-400 rounded-full'>
            <button className='w-full h-full rounded-full font-bold text-lg' onClick={() => handleDisplay('8')}>8</button>
          </div>
          <div className='w-16 h-16 bg-gray-400 rounded-full'>
            <button className='w-full h-full rounded-full font-bold text-lg' onClick={() => handleDisplay('9')}>9</button>
          </div>
          <div className='w-16 h-16 bg-amber-500 rounded-3xl'>
            <button className='w-full h-full rounded-full font-bold text-lg' onClick={() => handleDisplay('*')}>*</button>
          </div>
        </div>

        <div className='flex flex-row justify-evenly my-6'>
          <div className='w-16 h-16 bg-gray-400 rounded-full'>
            <button className='w-full h-full rounded-full font-bold text-lg' onClick={() => handleDisplay('4')}>4</button>
          </div>
          <div className='w-16 h-16 bg-gray-400 rounded-full'>
            <button className='w-full h-full rounded-full font-bold text-lg' onClick={() => handleDisplay('5')}>5</button>
          </div>
          <div className='w-16 h-16 bg-gray-400 rounded-full'>
            <button className='w-full h-full rounded-full font-bold text-lg' onClick={() => handleDisplay('6')}>6</button>
          </div>
          <div className='w-16 h-16 bg-amber-500 rounded-3xl'>
            <button className='w-full h-full rounded-full font-bold text-lg' onClick={() => handleDisplay('-')}>-</button>
          </div>
        </div>



        <div className='flex flex-row justify-evenly my-6'>
          <div className='w-16 h-16 bg-gray-400 rounded-full'>
            <button className='w-full h-full rounded-full font-bold text-lg' onClick={() => handleDisplay('1')}>1</button>
          </div>
          <div className='w-16 h-16 bg-gray-400 rounded-full'>
            <button className='w-full h-full rounded-full font-bold text-lg' onClick={() => handleDisplay('2')}>2</button>
          </div>
          <div className='w-16 h-16 bg-gray-400 rounded-full'>
            <button className='w-full h-full rounded-full font-bold text-lg' onClick={() => handleDisplay('3')}>3</button>
          </div>
          <div className='w-16 h-16 bg-amber-500 rounded-3xl'>
            <button className='w-full h-full rounded-full font-bold text-lg' onClick={() => handleDisplay('+')}>+</button>
          </div>
        </div>

        <div className='flex flex-row justify-evenly my-6'>
          <div className='w-36 h-16 bg-gray-400 rounded-2xl'>
            <button className='w-full h-full rounded-full font-bold text-lg' onClick={() => handleDisplay('0')}>0</button>
          </div>

          <div className='w-16 h-16 bg-gray-400 rounded-full'>
            <button className='w-full h-full rounded-full font-bold text-lg' onClick={() => handleDisplay('.')}>.</button>
          </div>
          <div className='w-16 h-16 bg-amber-500 rounded-3xl'>
            <button className='w-full h-full rounded-full font-bold text-lg' onClick={() => calculateResult()}>=</button>
          </div>
        </div>


      </div>

    </div>
  )
}
