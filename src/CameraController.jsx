import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

function CameraController({ sceneReady }) {
  const cameraRef = useRef()
  const startPos = new THREE.Vector3(5.6, -4.8, 12.4)
  const endPos = new THREE.Vector3(0.0, -10.7, 20.0)
  const [animationComplete, setAnimationComplete] = useState(false)

  useFrame(() => {
    if (sceneReady && !animationComplete && cameraRef.current) {
      cameraRef.current.position.lerp(endPos, 0.02)
      if (cameraRef.current.position.distanceTo(endPos) < 0.1) {
        cameraRef.current.position.copy(endPos) // Ensure it exactly matches the end position
        setAnimationComplete(true)
      }
    }
  })

  return (
    <PerspectiveCamera
      ref={cameraRef}
      makeDefault
      position={[startPos.x, startPos.y, startPos.z]}
      fov={75}
    />
  )
}

export default CameraController
