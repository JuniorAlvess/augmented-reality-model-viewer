import astronauta from './assets/Astronaut.glb'

import './style.css'

function App() {
  return (
    <>

      <div class="demo">
        {/* <span>Background</span> */}
        <model-viewer
          class="model"
          camera-controls
          src={astronauta}
          ar ar-modes="webxr scene-viewer quick-look"
          alt="A 3D transparency test">

        </model-viewer>
      </div>
    </>
  );
}

export default App;
