import { useEffect } from "react";
    
    export default function Modal(props) {

        useEffect(() => {
            const element = document.querySelector('.fade-in');
            setTimeout(() => {
              element.classList.add('show');
            }, 100); // A slight delay before starting the fade-in
          }, []);

        return (
    <div className="hero opacity-90 bg-stone-300 z-50 left-0 top-0 fixed bg-base-400 h-screen w-screen">
    <div className="hero-content border-3 flex flex-col justify-center items-center w-screen h-screen text-center fade-in">
        <div className="max-w-md">
        <h1 className="text-4xl font-bold">Hello, Welcome To Lincoln's Cloud Calculator!</h1>
        <p className="font-serif py-6">
        I’ve added some extra features to my project, including multiplication and division functions. 
        Additionally, I’ve included two different interfaces as well! 
        While there might be a few imperfections, I’ve put in my best effort to refine and improve it. 
        I hope you find these additions valuable, Enjoy using this updated project!


        </p>
        <button className="btn btn-ghost" onClick = {()=>props.handleColor(true)}>Modern</button>
        <button className="btn btn-ghost" onClick = {()=>props.handleColor(false)}>Arithmetic</button>
        </div>
    </div>
    </div>
        )
    }