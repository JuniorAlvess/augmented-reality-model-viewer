import astronauta from './assets/Astronaut.glb'

import './style.css'

function App() {
  return (
    <>
      <div class="demo">
        <model-viewer
          className="model"
          camera-controls
          src={astronauta}
          reveal="manual"
          ar
          ar-modes="webxr scene-viewer quick-look"
          alt="A 3D transparency test"
        >
          <button slot="ar-button" className="buttonAr">
          👋 Activate AR
          </button>
        </model-viewer>
      </div>
    </>
  );
}

export default App;
