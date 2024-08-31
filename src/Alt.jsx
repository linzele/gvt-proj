import React from 'react';

export default function Alt() {
  const clr = () => {
    // Clear function logic
  };

  const del = () => {
    // Delete function logic
  };

  const display = (value) => {
    // Display function logic
  };

  const calc = () => {
    // Calculation logic
  };

  return (
    <main className="fixed z-60 top-0 bg-white">
      <div className="flex justify-center items-center min-h-screen">
        <div className="p-4 border border-solid shadow-white border-white-400 bg-black rounded-xl">
          <p
            id="outputScreen"
            className="mb-5 p-5 font-extrabold rounded-xl text-white bg-black text-right"
          />
          <div className="grid grid-cols-4 gap-4">
            <button
              className="rounded-full border-solid border-gray-500 bg-slate-300 p-4"
              onClick={clr}
            >
              C
            </button>
            <button
              className="rounded-full border-solid border-gray-500 bg-slate-300 p-4"
              onClick={del}
            >
              Del
            </button>
            <button
              className="rounded-full border-solid border-gray-500 bg-slate-300 p-4"
              onClick={() => display('%')}
            >
              %
            </button>
            <button
              className="rounded-full text-white border-solid border-gray-500 bg-amber-500 p-4"
              onClick={() => display('/')}
            >
              /
            </button>
            <button
              className="rounded-full border-solid border-gray-500 bg-gray-500 text-white px-2"
              onClick={() => display('7')}
            >
              7
            </button>
            <button
              className="rounded-full border-solid border-gray-500 bg-gray-500 text-white px-2"
              onClick={() => display('8')}
            >
              8
            </button>
            <button
              className="rounded-full border-solid border-gray-500 bg-gray-500 text-white px-2"
              onClick={() => display('9')}
            >
              9
            </button>
            <button
              className="rounded-full text-white border-solid border-gray-500 bg-amber-500 p-4"
              onClick={() => display('*')}
            >
              *
            </button>
            <button
              className="rounded-full border-solid border-gray-500 bg-gray-500 text-white px-2"
              onClick={() => display('4')}
            >
              4
            </button>
            <button
              className="rounded-full border-solid border-gray-500 bg-gray-500 text-white px-2"
              onClick={() => display('5')}
            >
              5
            </button>
            <button
              className="rounded-full border-solid border-gray-500 bg-gray-500 text-white px-2"
              onClick={() => display('6')}
            >
              6
            </button>
            <button
              className="rounded-full text-white border-solid border-gray-500 bg-amber-500 p-4"
              onClick={() => display('-')}
            >
              -
            </button>
            <button
              className="rounded-full border-solid border-gray-500 bg-gray-500 text-white px-2"
              onClick={() => display('1')}
            >
              1
            </button>
            <button
              className="rounded-full border-solid border-gray-500 bg-gray-500 text-white px-2"
              onClick={() => display('2')}
            >
              2
            </button>
            <button
              className="rounded-full border-solid border-gray-500 bg-gray-500 text-white px-2"
              onClick={() => display('3')}
            >
              3
            </button>
            <button
              className="rounded-full text-white border-solid border-gray-500 bg-amber-500 p-4"
              onClick={() => display('+')}
            >
              +
            </button>
            <button
              className="rounded-full border-solid border-gray-500 bg-gray-500 text-white p-4 col-span-2"
              onClick={() => display('0')}
            >
              0
            </button>
            <button
              className="rounded-full border-solid border-gray-500 bg-gray-500 text-white p-4"
              onClick={() => display('.')}
            >
              .
            </button>
            <button
              className="rounded-full border-solid border-gray-500 bg-amber-500 text-white p-4"
              onClick={calc}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
