import React, { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'
import './App.css'
import { FinalScene } from './FinalScene'
import { AnimationMenu } from './AnimationMenu'
import { Loader } from './Loader'
import CameraController from './CameraController'
import { ChumBucket } from './ChumBucket'

function App() {
  const [sceneReady, setSceneReady] = useState(false)

  useEffect(() => {
    console.log("Scene ready state:", sceneReady);
  }, [sceneReady]);

  return (
    <div className="App">
      {!sceneReady ? (
        <Loader onEnter={() => {
          console.log("Enter button pressed");
          setSceneReady(true);
        }} />
      ) : (
        <>
          <Canvas 
            style={{width:"100vw", height:"100vh", backgroundColor:"#0098ea"}}
            onCreated={() => console.log("Canvas created")}
          >
            <CameraController sceneReady={sceneReady} />
            <OrbitControls 
              minDistance={1}
              maxDistance={30}
              
            />
            <Suspense fallback={<mesh><boxGeometry args={[1, 1, 1]} /><meshStandardMaterial color="hotpink" /></mesh>}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={10} />
              {/* <FinalScene startAnimation={sceneReady} /> */}
              <ChumBucket/>
            </Suspense>
          </Canvas>
          <AnimationMenu />
        </>
      )}
    </div>
  )
}

export default App