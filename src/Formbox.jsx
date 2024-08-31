import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { httpsCallable } from "firebase/functions";
import { myFunctions } from '../firebaseConfig';
import { Description, Field, Fieldset, Input, Label, Legend, Select, Textarea } from '@headlessui/react';
import clsx from 'clsx';

export default function Formbox() {
  useEffect(() => {
    const element = document.querySelector('.fade-in');
    setTimeout(() => {
      element.classList.add('show');
    }, 100); // A slight delay before starting the fade-in
  }, []);


  const [count, setCount] = useState(0)
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [result, setResult] = useState(null);
  const [myerror, setmyError] = useState(false);

  const addMessage = httpsCallable(myFunctions, 'addLa');
  const deleteMessage = httpsCallable(myFunctions, 'minusLa');

  const multiplyMessage = httpsCallable(myFunctions, 'multiplyLa')
  const divideMessage = httpsCallable(myFunctions, 'divideLa')

  async function customHandle(firstNumber, secondNumber) {

    const contextResult = await addMessage({ firstNumber: firstNumber, secondNumber: secondNumber })
    setResult(contextResult.data.result);
    setmyError(false)


  }


  async function customMinus(firstNumber, secondNumber) {
    const contextResult = await deleteMessage({ firstNumber: firstNumber, secondNumber: secondNumber })
    setResult(contextResult.data.result);
    setmyError(false)


  }


  // Handle multiplication
  async function customMultiplication(firstNumber, secondNumber) {
    const contextResult = await multiplyMessage({ firstNumber: firstNumber, secondNumber: secondNumber })
    setResult(contextResult.data.result);
    setmyError(false)

  }

  // Handle division
  async function customDivision(firstNumber, secondNumber) {
    if (firstNumber === '0' || secondNumber === '0' || firstNumber === '' || secondNumber === '') {
      setmyError(true)
      setErrorMessage('Cannot be divided by zero');

    }

    else {
      const contextResult = await divideMessage({ firstNumber: firstNumber, secondNumber: secondNumber })
      setResult(contextResult.data.result);
      setmyError(false)

    }
  }
  return (

    <div className="fixed rounded-xl w-full max-w-lg bg-neutral-900 pt-5 w-[90%] max-w-[400px] h-[65%] mx-[35%] inset-y-48 px-4 z-40 fade-in">
      
      <Fieldset className="space-y-6 rounded-xl bg-white/5 p-6 sm:p-10">
        <Legend className="text-base/7 font-semibold text-white"> Modern Cloud Calculator</Legend>
        <Field>
          <Label className="text-sm/6 font-medium text-white">Input First Number</Label>

          <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)}
            placeholder="Input your value"
            className={clsx(
              'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
              'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
            )}
          />
        </Field>
        <Field>
          <Label className="text-sm/6 font-medium text-white">Input Second Number</Label>

          <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)}
            placeholder="Input your value"
            className={clsx(
              'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
              'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
            )}
          />
        </Field>
        <div className="flex justify-evenly">
          <button onClick={() => customHandle(num1, num2)} className="border-2 border-black p-5 px-15 hover:bg-black transition-all duration-500">
          <svg class="h-8 w-8 text-slate-100"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <line x1="12" y1="5" x2="12" y2="19" />  <line x1="5" y1="12" x2="19" y2="12" /></svg>          </button>
          <button onClick={() => customMinus(num1, num2)} className="border-2 border-black p-5 px-15 hover:bg-black transition-all duration-500" >
          <svg class="h-8 w-8 text-slate-100"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="5" y1="12" x2="19" y2="12" /></svg>          
          </button>
          <button onClick={() => customMultiplication(num1, num2)} className="border-2 border-black p-5 px-15 hover:bg-black transition-all duration-500">
          <svg class="h-8 w-8 text-slate-100"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" /></svg>

          </button>
          <button onClick={() => customDivision(num1, num2)} className="border-2 border-black p-5 px-15 hover:bg-black transition-all duration-500">
          <svg class="h-8 w-8 text-slate-100"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="6" r="2" />  <line x1="5" y1="12" x2="19" y2="12" />  <circle cx="12" cy="18" r="2" /></svg>
          </button>

        </div>
        <Field>
          <Label className="text-sm/6 font-medium text-white">Results</Label>
          <Description className="text-sm/6 text-white/50">
          </Description>

          <Textarea
            className={clsx(
              'mt-3 block w-full resize-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
              'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
            )}
            rows={3}
            value={result !== null ? result : '0'}
          />
          {myerror && <h1 style={{ color: 'red' }}>You can't enter 0 for division!</h1>}


        </Field>
      </Fieldset>
    </div>
  );
}

