import React, { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, useAnimations, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function PlanktonModel({ setAvailableAnimations, currentAnimation }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/planktonFinal.glb')
  const { actions, names } = useAnimations(animations, group)

  useEffect(() => {
    const desiredAnimations = ['dance', 'withme', 'cancan']
    const availableDesiredAnimations = names.filter(name => desiredAnimations.includes(name))
    setAvailableAnimations(availableDesiredAnimations)
    
    // Play jumpdown animation immediately
    if (actions.jumpdown) {
      actions.jumpdown.reset().play()
      actions.jumpdown.clampWhenFinished = true
      actions.jumpdown.setLoop(THREE.LoopOnce)
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
    camera.position.set(0, 5, 10)
    camera.lookAt(0, 0, 0)
  }, [camera])

  return (
    <group ref={group} {...props} dispose={null}>
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

useGLTF.preload('/planktonFinal.glb')