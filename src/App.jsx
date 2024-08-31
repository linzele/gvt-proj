          import { useEffect, useState } from 'react';
          import { httpsCallable } from "firebase/functions";
          import { myFunctions } from '../firebaseConfig';
          import ParticleRing from './ParticleRing.jsx'; 
          import Example from './SliderToggle.jsx';
          import Formbox from './Formbox.jsx';
          import Modal from './customModal.jsx';
          import Alt from './Alt.jsx';
          import OldCalculator from './OldCalculator.jsx';
          import './App.css';

          function App() {
            

          const [modal,setModal] = useState(true);
          const [darkMode, setDarkMode] = useState(false);
          const [lightMode, setLightMode] = useState(false);

          function handleColor(selection) {

            if (!selection) {

              setLightMode(true);
              setModal(false)

            }
            else {

              setDarkMode(true)
              setModal(false)

            }

          }
          function handleToggle(setSelected){

            if (darkMode && !lightMode)
            {
              setDarkMode(false)
              setLightMode(true)
              setSelected('light')
            }
            
            else{
              setLightMode(false)
              setDarkMode(true)
              setSelected('dark')

            }
            
            }


              return (
                <div className="App">

                {
                  modal && <Modal handleColor ={handleColor}/>
                }
                {(darkMode && !modal) && <> 
                  <Example handleToggle ={handleToggle} 

              lightMode = {lightMode}
              darkMode = {darkMode}
              />
                  <Alt/>
                    <Formbox/>
          </>}     
          {(lightMode && !modal) && ( <>
          <OldCalculator/>
  <Example handleToggle ={handleToggle} 

              lightMode = {lightMode}
              darkMode = {darkMode}
              />
  </>) }

                <ParticleRing />
              </div>

            
            )
          }

          export default App