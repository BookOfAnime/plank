import React, { useRef, useEffect, useState, Suspense } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { useGLTF, useAnimations, OrbitControls, Loader } from '@react-three/drei'
import * as THREE from 'three'

function PlanktonModel({ setAvailableAnimations, currentAnimation }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/planktonFinal.glb')
  const { actions, names } = useAnimations(animations, group)

  useEffect(() => {
    const desiredAnimations = ['dance', 'withme', 'cancan', 'jumpdown']
    const availableDesiredAnimations = names.filter(name => desiredAnimations.includes(name))
    setAvailableAnimations(availableDesiredAnimations)
    
    // Play 'dance' animation initially
    if (actions.dance) {
      actions.dance.reset().play()
      actions.dance.clampWhenFinished = true
      actions.dance.setLoop(THREE.LoopOnce)
    }
  }, [actions, names, setAvailableAnimations])

  useEffect(() => {
    if (currentAnimation && actions[currentAnimation]) {
      Object.values(actions).forEach(action => action.stop())
      actions[currentAnimation].reset().play()
      actions[currentAnimation].clampWhenFinished = true
      actions[currentAnimation].setLoop(THREE.LoopOnce)
    }
  }, [currentAnimation, actions])

  // Adjust initial camera position
  const { camera } = useThree()
  useEffect(() => {
    camera.position.set(0, 1, 15)
    camera.lookAt(0, 0, 0)
  }, [camera])

  return (
    <group ref={group}>
      <group name="Scene">
        <group name="Sketchfab_model" position={[0, 0, 73.967]} rotation={[-Math.PI / 2, 0, 0]} scale={0.055}>
          <group name="Chum_BucketFBX" rotation={[Math.PI / 2, 0, 0]}>
            <group name="RootNode">
              <group name="Chum_Bucket" position={[4.27, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <mesh name="Chum_Bucket_02_-_Default_0" geometry={nodes['Chum_Bucket_02_-_Default_0'].geometry} material={materials['Material.002']} position={[0, 1359.112, 0]} />
                <mesh name="Chum_Bucket_03_-_Default_0" geometry={nodes['Chum_Bucket_03_-_Default_0'].geometry} material={materials['03_-_Default']} position={[0, 1359.112, 0]} />
                <mesh name="Chum_Bucket_07_-_Default_0" geometry={nodes['Chum_Bucket_07_-_Default_0'].geometry} material={materials['07_-_Default']} position={[0, 1359.112, 0]} />
                <mesh name="Chum_Bucket_08_-_Default_0" geometry={nodes['Chum_Bucket_08_-_Default_0'].geometry} material={materials['08_-_Default']} position={[0, 1359.112, 0]} />
                <mesh name="Chum_Bucket_09_-_Default_0" geometry={nodes['Chum_Bucket_09_-_Default_0'].geometry} material={materials['Material.001']} position={[0, 1359.112, 0]} />
                <mesh name="Chum_Bucket_13_-_Default_0" geometry={nodes['Chum_Bucket_13_-_Default_0'].geometry} material={materials['13_-_Default']} position={[0, 1359.112, 0]} />
                <mesh name="Chum_Bucket_14_-_Default_0" geometry={nodes['Chum_Bucket_14_-_Default_0'].geometry} material={materials['14_-_Default']} position={[0, 1359.112, 0]} />
                <mesh name="Chum_Bucket_15_-_Default_0" geometry={nodes['Chum_Bucket_15_-_Default_0'].geometry} material={materials['15_-_Default']} position={[0, 1359.112, 0]} />
              </group>
              <group name="Road" position={[4.27, -229.982, -133.65]} rotation={[-Math.PI / 2, 0, 0]} scale={0.545}>
                <mesh name="Road_19_-_Default_0" geometry={nodes['Road_19_-_Default_0'].geometry} material={materials['19_-_Default']} position={[0, 2495.893, 0.001]} />
              </group>
              <group name="Sand" position={[4.27, -476.796, -29.541]} rotation={[-Math.PI / 2, 0, 0]} scale={[2.541, 2.541, 3.32]}>
                <mesh name="Sand_04_-_Default_0" geometry={nodes['Sand_04_-_Default_0'].geometry} material={materials['04_-_Default']} position={[0, 534.851, 0]} />
              </group>
              <group name="Skybox" position={[4.27, -521.262, 0]} rotation={[-Math.PI / 2, 0, -2.705]} scale={[2.55, 2.55, 3.875]}>
                <group name="Skybox_10_-_Default_0" />
              </group>
            </group>
          </group>
        </group>
        <group name="main" position={[0.265, -0.355, 6.863]} rotation={[Math.PI / 2, 0, 0]} scale={0.003}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh name="Chfar001" geometry={nodes.Chfar001.geometry} material={materials['Black.005']} skeleton={nodes.Chfar001.skeleton} />
          <skinnedMesh name="EyeOUT001" geometry={nodes.EyeOUT001.geometry} material={materials['Green.005']} skeleton={nodes.EyeOUT001.skeleton} />
          <group name="Plancton001">
            <skinnedMesh name="Sphere018" geometry={nodes.Sphere018.geometry} material={materials['Black.005']} skeleton={nodes.Sphere018.skeleton} />
            <skinnedMesh name="Sphere018_1" geometry={nodes.Sphere018_1.geometry} material={materials['Green.005']} skeleton={nodes.Sphere018_1.skeleton} />
            <skinnedMesh name="Sphere018_2" geometry={nodes.Sphere018_2.geometry} material={materials['Yellow.005']} skeleton={nodes.Sphere018_2.skeleton} />
            <skinnedMesh name="Sphere018_3" geometry={nodes.Sphere018_3.geometry} material={materials['red.005']} skeleton={nodes.Sphere018_3.skeleton} />
            <skinnedMesh name="Sphere018_4" geometry={nodes.Sphere018_4.geometry} material={materials['Lsan.005']} skeleton={nodes.Sphere018_4.skeleton} />
            <skinnedMesh name="Sphere018_5" geometry={nodes.Sphere018_5.geometry} material={materials['L7al9.005']} skeleton={nodes.Sphere018_5.skeleton} />
          </group>
          <skinnedMesh name="Tooth001" geometry={nodes.Tooth001.geometry} material={materials['White.005']} skeleton={nodes.Tooth001.skeleton} />
        </group>
        <mesh name="Text" geometry={nodes.Text.geometry} material={materials['Metal tread panel']} position={[0.621, -2.159, 6.676]} rotation={[Math.PI / 2, 0, 0]} scale={2.449} />
      </group>
    </group>
  )
}

function InfoCard({ onClose }) {
  return (
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(10px)',
      padding: '30px',
      borderRadius: '15px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
      maxWidth: '500px',
      width: '90%',
      maxHeight: '80vh',
      overflowY: 'auto'
    }}>
      <h2 style={{ color: '#333', marginBottom: '20px', textAlign: 'center' }}>PlankTON</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ color: '#4CAF50' }}>Roadmap:</h3>
        <ul style={{ paddingLeft: '20px', color: '#555' }}>
          <li>Q1 2024: Initial launch and community building</li>
          <li>Q2 2024: Release of first interactive features</li>
          <li>Q3 2024: Expansion of animation library</li>
          <li>Q4 2024: Full integration with web-based games</li>
        </ul>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ color: '#4CAF50' }}>Meme Section:</h3>
        <div style={{ paddingLeft: '20px', color: '#555' }}>
          <img src="/path/to/meme1.jpg" alt="Meme 1" style={{ width: '100%', marginBottom: '10px' }} />
          <img src="/path/to/meme2.jpg" alt="Meme 2" style={{ width: '100%', marginBottom: '10px' }} />
          <img src="/path/to/meme3.jpg" alt="Meme 3" style={{ width: '100%', marginBottom: '10px' }} />
        </div>
      </div>
      
      <button 
        onClick={onClose}
        style={{
          padding: '10px 20px',
          backgroundColor: '#3498db',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          display: 'block',
          margin: '0 auto'
        }}
      >
        Close
      </button>
    </div>
  )
}

function App() {
  const [availableAnimations, setAvailableAnimations] = useState([])
  const [currentAnimation, setCurrentAnimation] = useState('dance')
  const [showInfo, setShowInfo] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  // Add this style to remove default margins and padding
  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflow = 'hidden'; // Prevent scrollbars
    
    // Cleanup function
    return () => {
      document.body.style.margin = null;
      document.body.style.padding = null;
      document.body.style.overflow = null;
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
    };
  }, []);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      position: 'relative', 
      overflow: 'hidden' 
    }}>
      <audio ref={audioRef} src="/rolling.mp3" loop />
      <Canvas 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%',
          background: 'linear-gradient(to bottom, #87CEEB, #E0F6FF)' 
        }}
      >
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={10} />
        <Suspense fallback={null}>
          <PlanktonModel 
            setAvailableAnimations={setAvailableAnimations} 
            currentAnimation={currentAnimation}
          />
        </Suspense>
      </Canvas>
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(10px)',
        padding: '15px',
        borderRadius: '30px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        zIndex: 10 // Ensure it's above the Canvas
      }}>
        {availableAnimations.map((anim) => (
          <button
            key={anim}
            onClick={() => setCurrentAnimation(anim)}
            style={{
              margin: '0 10px',
              padding: '12px 24px',
              fontSize: '18px',
              fontWeight: 'bold',
              color: 'white',
              backgroundColor: currentAnimation === anim ? '#4CAF50' : '#3498db',
              border: 'none',
              borderRadius: '25px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textTransform: 'capitalize',
              boxShadow: currentAnimation === anim ? '0 0 15px #4CAF50' : '0 0 10px #3498db',
              outline: 'none'
            }}
          >
            {anim}
          </button>
        ))}
        <button
          onClick={() => setShowInfo(true)}
          style={{
            margin: '0 10px',
            padding: '12px 24px',
            fontSize: '18px',
            fontWeight: 'bold',
            color: 'white',
            backgroundColor: '#f39c12',
            border: 'none',
            borderRadius: '25px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 0 10px #f39c12',
            outline: 'none'
          }}
        >
          ℹ️ Info
        </button>
        <button
          onClick={toggleAudio}
          style={{
            margin: '0 10px',
            padding: '12px 24px',
            fontSize: '18px',
            fontWeight: 'bold',
            color: 'white',
            backgroundColor: '#e74c3c',
            border: 'none',
            borderRadius: '25px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 0 10px #e74c3c',
            outline: 'none'
          }}
        >
          {isPlaying ? '🔈 Mute' : '🔊 Unmute'}
        </button>
      </div>
      {showInfo && <InfoCard onClose={() => setShowInfo(false)} />}
      <Loader /> {/* Add Loader component here */}
    </div>
  )
}

export default App
