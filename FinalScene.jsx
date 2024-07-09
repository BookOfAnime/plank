import React, { useRef, useEffect, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from 'three'

export function FinalScene({ startAnimation }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/finalScene.glb')
  const { actions } = useAnimations(animations, group)
  const [currentAnimation, setCurrentAnimation] = useState(null)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (startAnimation && !hasStarted) {
      // Only start the animation if it hasn't been started before
      if (actions.jumpdown) {
        actions.jumpdown.reset().play()
        actions.jumpdown.clampWhenFinished = true
        actions.jumpdown.loop = THREE.LoopOnce
        setCurrentAnimation('jumpdown')
      }
      setHasStarted(true)
    }
  }, [actions, startAnimation, hasStarted])

  useEffect(() => {
    if (startAnimation && currentAnimation && actions[currentAnimation]) {
      Object.values(actions).forEach(action => action.stop())
      actions[currentAnimation].reset().play()
      actions[currentAnimation].clampWhenFinished = true
      actions[currentAnimation].loop = THREE.LoopOnce
    }
  }, [currentAnimation, actions, startAnimation])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.055}>
          <group name="Chum_BucketFBX" rotation={[Math.PI / 2, 0, 0]}>
            <group name="RootNode">
              <group name="Chum_Bucket" position={[4.27, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <mesh name="Chum_Bucket_02_-_Default_0" geometry={nodes['Chum_Bucket_02_-_Default_0'].geometry} material={materials['Material.002']} />
                <mesh name="Chum_Bucket_03_-_Default_0" geometry={nodes['Chum_Bucket_03_-_Default_0'].geometry} material={materials['03_-_Default']} />
                <mesh name="Chum_Bucket_07_-_Default_0" geometry={nodes['Chum_Bucket_07_-_Default_0'].geometry} material={materials['07_-_Default']} />
                <mesh name="Chum_Bucket_08_-_Default_0" geometry={nodes['Chum_Bucket_08_-_Default_0'].geometry} material={materials['08_-_Default']} />
                <mesh name="Chum_Bucket_09_-_Default_0" geometry={nodes['Chum_Bucket_09_-_Default_0'].geometry} material={materials['Material.001']} />
                <mesh name="Chum_Bucket_13_-_Default_0" geometry={nodes['Chum_Bucket_13_-_Default_0'].geometry} material={materials['13_-_Default']} />
                <mesh name="Chum_Bucket_14_-_Default_0" geometry={nodes['Chum_Bucket_14_-_Default_0'].geometry} material={materials['14_-_Default']} />
                <mesh name="Chum_Bucket_15_-_Default_0" geometry={nodes['Chum_Bucket_15_-_Default_0'].geometry} material={materials['15_-_Default']} />
              </group>
              <group name="Road" position={[4.27, -229.982, -133.65]} rotation={[-Math.PI / 2, 0, 0]} scale={0.545}>
                <mesh name="Road_19_-_Default_0" geometry={nodes['Road_19_-_Default_0'].geometry} material={materials['19_-_Default']} />
              </group>
              <group name="Sand" position={[4.27, -476.796, -29.541]} rotation={[-Math.PI / 2, 0, 0]} scale={[2.541, 2.541, 3.32]}>
                <mesh name="Sand_04_-_Default_0" geometry={nodes['Sand_04_-_Default_0'].geometry} material={materials['04_-_Default']} />
              </group>
              <group name="Skybox" position={[4.27, -521.262, 0]} rotation={[-Math.PI / 2, 0, -2.705]} scale={[2.55, 2.55, 3.875]}>
                <group name="Skybox_10_-_Default_0" />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model001" position={[0.881, -10.671, 70.532]} rotation={[-Math.PI / 2, 0, 1.598]}>
          <group name="The_Krusty_Krabfbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="RootNode001">
              <group name="Algue001" position={[1177.049, -96.387, 920.724]} rotation={[0.54, 1.316, -0.775]} scale={49.151}>
                <mesh name="Algue001_Algue_vert_01_0" geometry={nodes.Algue001_Algue_vert_01_0.geometry} material={materials.Algue_vert_01} />
                <mesh name="Algue001_Algue_vert_02_0" geometry={nodes.Algue001_Algue_vert_02_0.geometry} material={materials.Algue_vert_02} />
              </group>
              <group name="Algue002" position={[1177.049, -96.387, -529.165]} rotation={[2.948, 0.831, 3.037]} scale={57.184}>
                <mesh name="Algue002_Algue_vert_01_0" geometry={nodes.Algue002_Algue_vert_01_0.geometry} material={materials.Algue_vert_01} />
                <mesh name="Algue002_Algue_vert_02_0" geometry={nodes.Algue002_Algue_vert_02_0.geometry} material={materials.Algue_vert_02} />
              </group>
              <group name="Algue003" position={[131.976, -96.387, -1310.859]} rotation={[3.009, 0.204, 2.92]} scale={40.21}>
                <mesh name="Algue003_Algue_vert_01_0" geometry={nodes.Algue003_Algue_vert_01_0.geometry} material={materials.Algue_vert_01} />
                <mesh name="Algue003_Algue_vert_02_0" geometry={nodes.Algue003_Algue_vert_02_0.geometry} material={materials.Algue_vert_02} />
              </group>
              <group name="Algue004" position={[195.886, -96.387, -1317.611]} rotation={[2.694, 1.267, -2.961]} scale={48.935}>
                <mesh name="Algue004_Algue_vert_01_0" geometry={nodes.Algue004_Algue_vert_01_0.geometry} material={materials.Algue_vert_01} />
                <mesh name="Algue004_Algue_vert_02_0" geometry={nodes.Algue004_Algue_vert_02_0.geometry} material={materials.Algue_vert_02} />
              </group>
              <group name="Algue005" position={[1192.581, -105.854, -511.719]} rotation={[3.003, 0.345, 2.94]} scale={[55.968, 33.747, 56.843]}>
                <mesh name="Algue005_Algue_vert_01_0" geometry={nodes.Algue005_Algue_vert_01_0.geometry} material={materials.Algue_vert_01} />
                <mesh name="Algue005_Algue_vert_02_0" geometry={nodes.Algue005_Algue_vert_02_0.geometry} material={materials.Algue_vert_02} />
              </group>
              <group name="Algue006" position={[190.444, -97.032, 1260.392]} rotation={[2.948, 0.831, 3.037]} scale={49.398}>
                <mesh name="Algue006_Algue_vert_01_0" geometry={nodes.Algue006_Algue_vert_01_0.geometry} material={materials.Algue_vert_01} />
                <mesh name="Algue006_Algue_vert_02_0" geometry={nodes.Algue006_Algue_vert_02_0.geometry} material={materials.Algue_vert_02} />
              </group>
              <group name="Algue007" position={[203.861, -105.21, 1275.462]} rotation={[3.003, 0.345, 2.94]} scale={[48.348, 29.152, 49.104]}>
                <mesh name="Algue007_Algue_vert_01_0" geometry={nodes.Algue007_Algue_vert_01_0.geometry} material={materials.Algue_vert_01} />
                <mesh name="Algue007_Algue_vert_02_0" geometry={nodes.Algue007_Algue_vert_02_0.geometry} material={materials.Algue_vert_02} />
              </group>
              <group name="Algue008" position={[-1026.923, -97.032, 1044.964]} rotation={[2.948, 0.831, 3.037]} scale={49.398}>
                <mesh name="Algue008_Algue_vert_01_0" geometry={nodes.Algue008_Algue_vert_01_0.geometry} material={materials.Algue_vert_01} />
                <mesh name="Algue008_Algue_vert_02_0" geometry={nodes.Algue008_Algue_vert_02_0.geometry} material={materials.Algue_vert_02} />
              </group>
              <group name="Algue009" position={[-1013.506, -105.21, 1060.034]} rotation={[3.003, 0.345, 2.94]} scale={[48.348, 29.152, 49.104]}>
                <mesh name="Algue009_Algue_vert_01_0" geometry={nodes.Algue009_Algue_vert_01_0.geometry} material={materials.Algue_vert_01} />
                <mesh name="Algue009_Algue_vert_02_0" geometry={nodes.Algue009_Algue_vert_02_0.geometry} material={materials.Algue_vert_02} />
              </group>
              <group name="Algue010" position={[-1012.569, -97.032, 168.317]} rotation={[0.171, 0.706, -0.361]} scale={49.398}>
                <mesh name="Algue010_Algue_vert_01_0" geometry={nodes.Algue010_Algue_vert_01_0.geometry} material={materials.Algue_vert_01} />
                <mesh name="Algue010_Algue_vert_02_0" geometry={nodes.Algue010_Algue_vert_02_0.geometry} material={materials.Algue_vert_02} />
              </group>
              <group name="Algue011" position={[-1027.86, -105.21, 181.482]} rotation={[0.351, 1.185, -0.576]} scale={[48.348, 29.152, 49.104]}>
                <mesh name="Algue011_Algue_vert_01_0" geometry={nodes.Algue011_Algue_vert_01_0.geometry} material={materials.Algue_vert_01} />
                <mesh name="Algue011_Algue_vert_02_0" geometry={nodes.Algue011_Algue_vert_02_0.geometry} material={materials.Algue_vert_02} />
              </group>
              <group name="Algue012" position={[-1018.185, -97.032, -888.192]} rotation={[0.582, 1.333, -0.818]} scale={49.398}>
                <mesh name="Algue012_Algue_vert_01_0" geometry={nodes.Algue012_Algue_vert_01_0.geometry} material={materials.Algue_vert_01} />
                <mesh name="Algue012_Algue_vert_02_0" geometry={nodes.Algue012_Algue_vert_02_0.geometry} material={materials.Algue_vert_02} />
              </group>
              <group name="Algue013" position={[-1022.244, -105.21, -868.427]} rotation={[2.716, 1.251, -2.984]} scale={[48.348, 29.152, 49.104]}>
                <mesh name="Algue013_Algue_vert_01_0" geometry={nodes.Algue013_Algue_vert_01_0.geometry} material={materials.Algue_vert_01} />
                <mesh name="Algue013_Algue_vert_02_0" geometry={nodes.Algue013_Algue_vert_02_0.geometry} material={materials.Algue_vert_02} />
              </group>
              <group name="Algue014" position={[-656.037, -97.032, -1329.557]} rotation={[0.582, 1.333, -0.818]} scale={49.398}>
                <mesh name="Algue014_Algue_vert_01_0" geometry={nodes.Algue014_Algue_vert_01_0.geometry} material={materials.Algue_vert_01} />
                <mesh name="Algue014_Algue_vert_02_0" geometry={nodes.Algue014_Algue_vert_02_0.geometry} material={materials.Algue_vert_02} />
              </group>
              <group name="Algue015" position={[-660.096, -105.21, -1309.792]} rotation={[2.716, 1.251, -2.984]} scale={[48.348, 29.152, 49.104]}>
                <mesh name="Algue015_Algue_vert_01_0" geometry={nodes.Algue015_Algue_vert_01_0.geometry} material={materials.Algue_vert_01} />
                <mesh name="Algue015_Algue_vert_02_0" geometry={nodes.Algue015_Algue_vert_02_0.geometry} material={materials.Algue_vert_02} />
              </group>
              <group name="Antenne" position={[-75.282, 781.35, -442.905]} rotation={[-Math.PI / 2, 0, 1.276]} scale={326.808}>
                <mesh name="Antenne_Antenne_0" geometry={nodes.Antenne_Antenne_0.geometry} material={materials.Antenne} />
              </group>
              <group name="Arche_bati" position={[-48.205, -80.86, 17.848]} rotation={[-Math.PI / 2, 0, 0]} scale={300}>
                <mesh name="Arche_bati_Bois_toit_2_0" geometry={nodes.Arche_bati_Bois_toit_2_0.geometry} material={materials.Bois_toit_2} />
              </group>
              <group name="Chemin��e" position={[-26.951, 650.261, -63.234]} rotation={[-Math.PI / 2, 0, -0.176]} scale={[4624.49, 4624.49, 4624.492]}>
                <mesh name="Chemin��e_Chocofur_Metal_Solid_01_0" geometry={nodes['Chemin��e_Chocofur_Metal_Solid_01_0'].geometry} material={materials.Chocofur_Metal_Solid_01} />
              </group>
              <group name="Circle" position={[215.828, -79.04, -338.056]} rotation={[-Math.PI / 2, 0, 1.134]} scale={14.686}>
                <mesh name="Circle_Jaune_table_0" geometry={nodes.Circle_Jaune_table_0.geometry} material={materials.Jaune_table} />
                <mesh name="Circle_Metal_table_0" geometry={nodes.Circle_Metal_table_0.geometry} material={materials.Metal_table} />
                <mesh name="Circle_Rouge_table_0" geometry={nodes.Circle_Rouge_table_0.geometry} material={materials.Rouge_table} />
              </group>
              <group name="Circle001" position={[205.964, -78.916, 463.356]} rotation={[-Math.PI / 2, 0, -2.176]} scale={14.686}>
                <mesh name="Circle001_Jaune_table_0" geometry={nodes.Circle001_Jaune_table_0.geometry} material={materials.Jaune_table} />
                <mesh name="Circle001_Metal_table_0" geometry={nodes.Circle001_Metal_table_0.geometry} material={materials.Metal_table} />
                <mesh name="Circle001_Rouge_table_0" geometry={nodes.Circle001_Rouge_table_0.geometry} material={materials.Rouge_table} />
              </group>
              <group name="Circle002" position={[-442.394, -78.888, 609.843]} rotation={[Math.PI / 2, 0, 0]} scale={300}>
                <mesh name="Circle002_Clou_plancher001_0" geometry={nodes.Circle002_Clou_plancher001_0.geometry} material={materials['Clou_plancher.001']} />
                <mesh name="Circle002_Clou_plancher001_0001" geometry={nodes.Circle002_Clou_plancher001_0001.geometry} material={materials['Clou_plancher.001']} />
                <mesh name="Circle002_Clou_plancher001_0002" geometry={nodes.Circle002_Clou_plancher001_0002.geometry} material={materials['Clou_plancher.001']} />
                <mesh name="Circle002_Clou_plancher001_0003" geometry={nodes.Circle002_Clou_plancher001_0003.geometry} material={materials['Clou_plancher.001']} />
              </group>
              <group name="Circle003" position={[100.556, -79.04, 295.673]} rotation={[-Math.PI / 2, 0, 2.186]} scale={14.686}>
                <mesh name="Circle003_Jaune_table_0" geometry={nodes.Circle003_Jaune_table_0.geometry} material={materials.Jaune_table} />
                <mesh name="Circle003_Metal_table_0" geometry={nodes.Circle003_Metal_table_0.geometry} material={materials.Metal_table} />
                <mesh name="Circle003_Rouge_table_0" geometry={nodes.Circle003_Rouge_table_0.geometry} material={materials.Rouge_table} />
              </group>
              <group name="Circle004" position={[-59.736, -79.04, 454.249]} rotation={[-Math.PI / 2, 0, -2.152]} scale={14.686}>
                <mesh name="Circle004_Jaune_table_0" geometry={nodes.Circle004_Jaune_table_0.geometry} material={materials.Jaune_table} />
                <mesh name="Circle004_Metal_table_0" geometry={nodes.Circle004_Metal_table_0.geometry} material={materials.Metal_table} />
                <mesh name="Circle004_Rouge_table_0" geometry={nodes.Circle004_Rouge_table_0.geometry} material={materials.Rouge_table} />
              </group>
              <group name="Circle005" position={[59.53, -79.04, -394.371]} rotation={[-Math.PI / 2, 0, 2.154]} scale={14.686}>
                <mesh name="Circle005_Jaune_table_0" geometry={nodes.Circle005_Jaune_table_0.geometry} material={materials.Jaune_table} />
                <mesh name="Circle005_Metal_table_0" geometry={nodes.Circle005_Metal_table_0.geometry} material={materials.Metal_table} />
                <mesh name="Circle005_Rouge_table_0" geometry={nodes.Circle005_Rouge_table_0.geometry} material={materials.Rouge_table} />
              </group>
              <group name="Circle006" position={[72.634, -79.04, -185.256]} rotation={[-Math.PI / 2, 0, 1.976]} scale={14.686}>
                <mesh name="Circle006_Jaune_table_0" geometry={nodes.Circle006_Jaune_table_0.geometry} material={materials.Jaune_table} />
                <mesh name="Circle006_Metal_table_0" geometry={nodes.Circle006_Metal_table_0.geometry} material={materials.Metal_table} />
                <mesh name="Circle006_Rouge_table_0" geometry={nodes.Circle006_Rouge_table_0.geometry} material={materials.Rouge_table} />
              </group>
              <group name="Circle007" position={[-243.67, -78.756, -358.548]} rotation={[-Math.PI / 2, 0, 0]} scale={300}>
                <mesh name="Circle007_Clou_2_0" geometry={nodes.Circle007_Clou_2_0.geometry} material={materials.Clou_2} />
                <mesh name="Circle007_EEVEE_Glass_Shader_0" geometry={nodes.Circle007_EEVEE_Glass_Shader_0.geometry} material={materials.EEVEE_Glass_Shader} />
                <mesh name="Circle007_Metal_porte_1_0" geometry={nodes.Circle007_Metal_porte_1_0.geometry} material={materials.Metal_porte_1} />
                <mesh name="Circle007_Metal_porte_2_0" geometry={nodes.Circle007_Metal_porte_2_0.geometry} material={materials.Metal_porte_2} />
              </group>
              <group name="Circle008" position={[-243.671, -78.756, -149.744]} rotation={[-Math.PI / 2, 0, 0]} scale={300}>
                <mesh name="Circle008_Clou_2_0" geometry={nodes.Circle008_Clou_2_0.geometry} material={materials.Clou_2} />
                <mesh name="Circle008_EEVEE_Glass_Shader_0" geometry={nodes.Circle008_EEVEE_Glass_Shader_0.geometry} material={materials.EEVEE_Glass_Shader} />
                <mesh name="Circle008_Metal_porte_1_0" geometry={nodes.Circle008_Metal_porte_1_0.geometry} material={materials.Metal_porte_1} />
                <mesh name="Circle008_Metal_porte_2_0" geometry={nodes.Circle008_Metal_porte_2_0.geometry} material={materials.Metal_porte_2} />
              </group>
              <group name="Circle009" position={[-243.671, -78.756, 383.84]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Circle009_Clou_2_0" geometry={nodes.Circle009_Clou_2_0.geometry} material={materials.Clou_2} />
                <mesh name="Circle009_Metal_porte_1_0" geometry={nodes.Circle009_Metal_porte_1_0.geometry} material={materials.Metal_porte_1} />
                <mesh name="Circle009_Metal_porte_2_0" geometry={nodes.Circle009_Metal_porte_2_0.geometry} material={materials.Metal_porte_2} />
              </group>
              <group name="Circle010" position={[-229.606, 214.508, 642.465]} rotation={[-Math.PI / 2, 0, 0]} scale={993.164}>
                <mesh name="Circle010_Clou_2_0" geometry={nodes.Circle010_Clou_2_0.geometry} material={materials.Clou_2} />
              </group>
              <group name="Circle011" position={[-1244.278, -81.58, 865.804]} rotation={[-Math.PI / 2, 0, -0.956]} scale={[1148.029, 1339.696, 1887.116]}>
                <mesh name="Circle011_Bikini_bottom_house001_0" geometry={nodes.Circle011_Bikini_bottom_house001_0.geometry} material={materials['Bikini_bottom_house.001']} />
                <mesh name="Circle011_Bikini_bottom_house_0" geometry={nodes.Circle011_Bikini_bottom_house_0.geometry} material={materials.Bikini_bottom_house} />
                <mesh name="Circle011_Clou_2003_0" geometry={nodes.Circle011_Clou_2003_0.geometry} material={materials['Clou_2.003']} />
                <mesh name="Circle011_Glass001_0" geometry={nodes.Circle011_Glass001_0.geometry} material={materials['Glass.001']} />
              </group>
              <group name="Circle016" position={[-824.69, -81.58, -1231.649]} rotation={[Math.PI / 2, 0, -2.033]} scale={[-1445.959, -1687.367, -2376.851]}>
                <mesh name="Circle016_Bikini_bottom_house001_0" geometry={nodes.Circle016_Bikini_bottom_house001_0.geometry} material={materials['Bikini_bottom_house.001']} />
                <mesh name="Circle016_Bikini_bottom_house_0" geometry={nodes.Circle016_Bikini_bottom_house_0.geometry} material={materials.Bikini_bottom_house} />
                <mesh name="Circle016_Clou_2003_0" geometry={nodes.Circle016_Clou_2003_0.geometry} material={materials['Clou_2.003']} />
                <mesh name="Circle016_Glass001_0" geometry={nodes.Circle016_Glass001_0.geometry} material={materials['Glass.001']} />
              </group>
              <group name="Circle019" position={[-99.589, -4.294, 7.397]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Circle019_Caisse_enregistreuse_0" geometry={nodes.Circle019_Caisse_enregistreuse_0.geometry} material={materials.Caisse_enregistreuse} />
              </group>
              <group name="Circle020" position={[-86.93, -4.193, 7.397]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Circle020_Caisse_enregistreuse_0" geometry={nodes.Circle020_Caisse_enregistreuse_0.geometry} material={materials.Caisse_enregistreuse} />
              </group>
              <group name="Circle021" position={[-81.98, 1.712, 9.441]} rotation={[Math.PI / 2, -0.558, 0]} scale={100}>
                <mesh name="Circle021_Caisse_enregistreuse_0" geometry={nodes.Circle021_Caisse_enregistreuse_0.geometry} material={materials.Caisse_enregistreuse} />
              </group>
              <group name="Clous_toit" position={[304.118, 438.705, 405.051]} rotation={[-Math.PI / 2, -0.567, 0]} scale={2357.943}>
                <mesh name="Clous_toit_Chocofur_Metal_Solid_05_0" geometry={nodes.Clous_toit_Chocofur_Metal_Solid_05_0.geometry} material={materials.Chocofur_Metal_Solid_05} />
              </group>
              <group name="Cordage_bati_ext" position={[-26.681, -120.988, -643.564]} rotation={[-Math.PI / 2, 0, 0]} scale={[300, 300, 315.905]}>
                <mesh name="Cordage_bati_ext_Cordage_0" geometry={nodes.Cordage_bati_ext_Cordage_0.geometry} material={materials.Cordage} />
              </group>
              <group name="Cordage_bati_ext001" position={[-26.681, -120.988, 679.565]} rotation={[-Math.PI / 2, 0, 0]} scale={[300, 300, 315.905]}>
                <mesh name="Cordage_bati_ext001_Cordage_0" geometry={nodes.Cordage_bati_ext001_Cordage_0.geometry} material={materials.Cordage} />
              </group>
              <group name="Cube" position={[-26.184, 386.449, -340.291]} rotation={[-Math.PI / 2, 0, 0]} scale={300}>
                <mesh name="Cube_Bois_poutre_2_0" geometry={nodes.Cube_Bois_poutre_2_0.geometry} material={materials.Bois_poutre_2} />
              </group>
              <group name="Cube001" position={[-76.871, 9.987, 17.5]} rotation={[-Math.PI / 2, 0, 0]} scale={300}>
                <mesh name="Cube001_EEVEE_Glass_Shader001_0" geometry={nodes.Cube001_EEVEE_Glass_Shader001_0.geometry} material={materials['EEVEE_Glass_Shader.001']} />
              </group>
              <group name="Cube002" position={[-260.805, 221.756, 75.247]} rotation={[-Math.PI / 2, 0, 1.03]} scale={100}>
                <mesh name="Cube002_tOILE_JUTE_0" geometry={nodes.Cube002_tOILE_JUTE_0.geometry} material={materials.tOILE_JUTE} />
              </group>
              <group name="Cube003" position={[-26.183, 386.449, 368.069]} rotation={[-Math.PI / 2, 0, 0]} scale={300}>
                <mesh name="Cube003_Bois_poutre_2_0" geometry={nodes.Cube003_Bois_poutre_2_0.geometry} material={materials.Bois_poutre_2} />
              </group>
              <group name="Cube004" position={[-260.805, 221.756, 75.247]} rotation={[-Math.PI / 2, 0, 0.173]} scale={143.159}>
                <mesh name="Cube004_tOILE_JUTE_0" geometry={nodes.Cube004_tOILE_JUTE_0.geometry} material={materials.tOILE_JUTE} />
              </group>
              <group name="Cube005" position={[-353.543, 386.706, -340.266]} rotation={[-Math.PI / 2, 0, 0]} scale={300}>
                <mesh name="Cube005_Chocofur_Metal_Solid_01_0" geometry={nodes.Cube005_Chocofur_Metal_Solid_01_0.geometry} material={materials.Chocofur_Metal_Solid_01} />
                <mesh name="Cube005_M��tal_poutre_0" geometry={nodes['Cube005_M��tal_poutre_0'].geometry} material={materials.Mtal_poutre} />
              </group>
              <group name="Cube006" position={[-285.558, 246.324, 133.596]} rotation={[-Math.PI / 2, 0, 0]} scale={24.623}>
                <mesh name="Cube006_Box_1_0" geometry={nodes.Cube006_Box_1_0.geometry} material={materials.Box_1} />
                <mesh name="Cube006_Box_2_0" geometry={nodes.Cube006_Box_2_0.geometry} material={materials.Box_2} />
              </group>
              <group name="Cube007" position={[-341.085, 246.324, 133.596]} rotation={[-Math.PI / 2, 0, 0.489]} scale={24.623}>
                <mesh name="Cube007_Box_1_0" geometry={nodes.Cube007_Box_1_0.geometry} material={materials.Box_1} />
                <mesh name="Cube007_Box_2_0" geometry={nodes.Cube007_Box_2_0.geometry} material={materials.Box_2} />
              </group>
              <group name="Cube008" position={[-353.543, 386.706, 368.095]} rotation={[-Math.PI / 2, 0, 0]} scale={300}>
                <mesh name="Cube008_Chocofur_Metal_Solid_01_0" geometry={nodes.Cube008_Chocofur_Metal_Solid_01_0.geometry} material={materials.Chocofur_Metal_Solid_01} />
                <mesh name="Cube008_M��tal_poutre_0" geometry={nodes['Cube008_M��tal_poutre_0'].geometry} material={materials.Mtal_poutre} />
              </group>
              <group name="Cube009" position={[-342.895, 295.571, 146.668]} rotation={[-Math.PI / 2, 0, -2.565]} scale={24.623}>
                <mesh name="Cube009_Box_1_0" geometry={nodes.Cube009_Box_1_0.geometry} material={materials.Box_1} />
                <mesh name="Cube009_Box_2_0" geometry={nodes.Cube009_Box_2_0.geometry} material={materials.Box_2} />
              </group>
              <group name="Cube010" position={[-114.417, -79.96, -264.916]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Cube010_Cuisine_detail_0" geometry={nodes.Cube010_Cuisine_detail_0.geometry} material={materials.Cuisine_detail} />
                <mesh name="Cube010_Cuisine_0" geometry={nodes.Cube010_Cuisine_0.geometry} material={materials.Cuisine} />
              </group>
              <group name="Cube011" position={[-301.566, 246.324, 196.772]} rotation={[-Math.PI / 2, 0, -0.556]} scale={24.623}>
                <mesh name="Cube011_Box_1_0" geometry={nodes.Cube011_Box_1_0.geometry} material={materials.Box_1} />
                <mesh name="Cube011_Box_2_0" geometry={nodes.Cube011_Box_2_0.geometry} material={materials.Box_2} />
              </group>
              <group name="Cube012" position={[-260.804, 221.756, 301.967]} rotation={[-Math.PI / 2, 0, 1.03]} scale={100}>
                <mesh name="Cube012_tOILE_JUTE_0" geometry={nodes.Cube012_tOILE_JUTE_0.geometry} material={materials.tOILE_JUTE} />
              </group>
              <group name="Cube013" position={[-114.417, -79.96, -264.916]} rotation={[-Math.PI / 2, 0, 0]} scale={300}>
                <mesh name="Cube013_Clou_2_0" geometry={nodes.Cube013_Clou_2_0.geometry} material={materials.Clou_2} />
                <mesh name="Cube013_Metal_porte_1_0" geometry={nodes.Cube013_Metal_porte_1_0.geometry} material={materials.Metal_porte_1} />
              </group>
              <group name="Cube014" position={[-366.452, 67.42, 27.841]} rotation={[-Math.PI / 2, 0, 0]} scale={[115.45, 437.597, 115.45]}>
                <mesh name="Cube014_Material003_0" geometry={nodes.Cube014_Material003_0.geometry} material={materials['Material.005']} />
              </group>
              <group name="Cube015" position={[-241.536, -5.524, 645.269]} rotation={[-Math.PI / 2, 0, 0]} scale={[225.09, 225.089, 225.09]}>
                <mesh name="Cube015_Clou_2_0" geometry={nodes.Cube015_Clou_2_0.geometry} material={materials.Clou_2} />
                <mesh name="Cube015_Cuisine_3_0" geometry={nodes.Cube015_Cuisine_3_0.geometry} material={materials.Cuisine_3} />
              </group>
              <group name="Cube016" position={[-167.838, -11.962, 15.546]} rotation={[-Math.PI / 2, 0, 0]} scale={300}>
                <mesh name="Cube016_Blanc_Bateau_0" geometry={nodes.Cube016_Blanc_Bateau_0.geometry} material={materials.Blanc_Bateau} />
                <mesh name="Cube016_Blanc_Bateau_0001" geometry={nodes.Cube016_Blanc_Bateau_0001.geometry} material={materials.Blanc_Bateau} />
                <mesh name="Cube016_Blanc_Bateau_0002" geometry={nodes.Cube016_Blanc_Bateau_0002.geometry} material={materials.Blanc_Bateau} />
                <mesh name="Cube016_Blanc_Bateau_0003" geometry={nodes.Cube016_Blanc_Bateau_0003.geometry} material={materials.Blanc_Bateau} />
                <mesh name="Cube016_Blanc_Bateau_0004" geometry={nodes.Cube016_Blanc_Bateau_0004.geometry} material={materials.Blanc_Bateau} />
                <mesh name="Cube016_Blanc_Bateau_0005" geometry={nodes.Cube016_Blanc_Bateau_0005.geometry} material={materials.Blanc_Bateau} />
                <mesh name="Cube016_Blanc_Bateau_0006" geometry={nodes.Cube016_Blanc_Bateau_0006.geometry} material={materials.Blanc_Bateau} />
                <mesh name="Cube016_Blanc_Bateau_0007" geometry={nodes.Cube016_Blanc_Bateau_0007.geometry} material={materials.Blanc_Bateau} />
                <mesh name="Cube016_Blanc_Bateau_0008" geometry={nodes.Cube016_Blanc_Bateau_0008.geometry} material={materials.Blanc_Bateau} />
                <mesh name="Cube016_Blanc_Bateau_0009" geometry={nodes.Cube016_Blanc_Bateau_0009.geometry} material={materials.Blanc_Bateau} />
                <mesh name="Cube016_Blanc_Bateau_0010" geometry={nodes.Cube016_Blanc_Bateau_0010.geometry} material={materials.Blanc_Bateau} />
                <mesh name="Cube016_Blanc_Bateau_0011" geometry={nodes.Cube016_Blanc_Bateau_0011.geometry} material={materials.Blanc_Bateau} />
                <mesh name="Cube016_Blanc_Bateau_0012" geometry={nodes.Cube016_Blanc_Bateau_0012.geometry} material={materials.Blanc_Bateau} />
                <mesh name="Cube016_Blanc_Bateau_0013" geometry={nodes.Cube016_Blanc_Bateau_0013.geometry} material={materials.Blanc_Bateau} />
                <mesh name="Cube016_Blanc_Bateau_0014" geometry={nodes.Cube016_Blanc_Bateau_0014.geometry} material={materials.Blanc_Bateau} />
                <mesh name="Cube016_Blanc_Bateau_0015" geometry={nodes.Cube016_Blanc_Bateau_0015.geometry} material={materials.Blanc_Bateau} />
                <mesh name="Cube016_Blanc_Bateau_0016" geometry={nodes.Cube016_Blanc_Bateau_0016.geometry} material={materials.Blanc_Bateau} />
                <mesh name="Cube016_Blanc_Bateau_0017" geometry={nodes.Cube016_Blanc_Bateau_0017.geometry} material={materials.Blanc_Bateau} />
                <mesh name="Cube016_Blanc_Bateau_0018" geometry={nodes.Cube016_Blanc_Bateau_0018.geometry} material={materials.Blanc_Bateau} />
                <mesh name="Cube016_Rouge_Bateau_0" geometry={nodes.Cube016_Rouge_Bateau_0.geometry} material={materials.Rouge_Bateau} />
                <mesh name="Cube016_Rouge_Bateau_0001" geometry={nodes.Cube016_Rouge_Bateau_0001.geometry} material={materials.Rouge_Bateau} />
              </group>
              <group name="Cube017" position={[-241.536, 30.881, 345.222]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Cube017_Clou_2_0" geometry={nodes.Cube017_Clou_2_0.geometry} material={materials.Clou_2} />
                <mesh name="Cube017_Cuisine_6_0" geometry={nodes.Cube017_Cuisine_6_0.geometry} material={materials.Cuisine_6} />
              </group>
              <group name="Cube018" position={[-241.536, 154.188, 317.801]} rotation={[-Math.PI / 2, 0, 0]} scale={[225.09, 225.089, 225.09]}>
                <mesh name="Cube018_Clou_2_0" geometry={nodes.Cube018_Clou_2_0.geometry} material={materials.Clou_2} />
                <mesh name="Cube018_Cuisine_57_0" geometry={nodes.Cube018_Cuisine_57_0.geometry} material={materials.Cuisine_57} />
              </group>
              <group name="Cube019" position={[-241.536, 154.188, 317.801]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Cube019_Clou_2_0" geometry={nodes.Cube019_Clou_2_0.geometry} material={materials.Clou_2} />
                <mesh name="Cube019_Cuisine_55_0" geometry={nodes.Cube019_Cuisine_55_0.geometry} material={materials.Cuisine_55} />
              </group>
              <group name="Cube020" position={[-174.742, -11.962, 15.546]} rotation={[-Math.PI / 2, 0, 0]} scale={300}>
                <mesh name="Cube020_Blanc_Bateau_0" geometry={nodes.Cube020_Blanc_Bateau_0.geometry} material={materials.Blanc_Bateau} />
              </group>
              <group name="Cube021" position={[-87.901, -2.934, 17.5]} rotation={[-Math.PI / 2, 0, 0]} scale={300}>
                <mesh name="Cube021_Caisse_enregistreuse_0" geometry={nodes.Cube021_Caisse_enregistreuse_0.geometry} material={materials.Caisse_enregistreuse} />
              </group>
              <group name="Cube022" position={[-85.662, -23.152, 15.546]} rotation={[-Math.PI / 2, 0, 0]} scale={[15.8, 28.26, 12.099]}>
                <mesh name="Cube022__0" geometry={nodes.Cube022__0.geometry} material={materials['Cube.022__0']} />
              </group>
              <group name="Cube023" position={[-79.154, -42.932, -5.986]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={-300}>
                <mesh name="Cube023__0" geometry={nodes.Cube023__0.geometry} material={materials['Cube.022__0']} />
              </group>
              <group name="Cube024" position={[-76.312, 9.987, 17.5]} rotation={[-Math.PI / 2, 0, 0]} scale={300}>
                <mesh name="Cube024_Caisse_enregistreuse_0" geometry={nodes.Cube024_Caisse_enregistreuse_0.geometry} material={materials.Caisse_enregistreuse} />
              </group>
              <group name="Cube025" position={[-260.804, 221.756, 301.967]} rotation={[-Math.PI / 2, 0, 0.173]} scale={143.159}>
                <mesh name="Cube025_tOILE_JUTE_0" geometry={nodes.Cube025_tOILE_JUTE_0.geometry} material={materials.tOILE_JUTE} />
              </group>
              <group name="Cube026" position={[-285.558, 246.324, 360.317]} rotation={[-Math.PI / 2, 0, 0]} scale={24.623}>
                <mesh name="Cube026_Box_1_0" geometry={nodes.Cube026_Box_1_0.geometry} material={materials.Box_1} />
                <mesh name="Cube026_Box_2_0" geometry={nodes.Cube026_Box_2_0.geometry} material={materials.Box_2} />
              </group>
              <group name="Cube027" position={[-341.084, 246.324, 360.317]} rotation={[-Math.PI / 2, 0, 0.489]} scale={24.623}>
                <mesh name="Cube027_Box_1_0" geometry={nodes.Cube027_Box_1_0.geometry} material={materials.Box_1} />
                <mesh name="Cube027_Box_2_0" geometry={nodes.Cube027_Box_2_0.geometry} material={materials.Box_2} />
              </group>
              <group name="Cube028" position={[-312.091, 295.571, 373.388]} rotation={[-Math.PI / 2, 0, 0.489]} scale={24.623}>
                <mesh name="Cube028_Box_1_0" geometry={nodes.Cube028_Box_1_0.geometry} material={materials.Box_1} />
                <mesh name="Cube028_Box_2_0" geometry={nodes.Cube028_Box_2_0.geometry} material={materials.Box_2} />
              </group>
              <group name="Cube029" position={[-301.566, 246.324, 423.492]} rotation={[-Math.PI / 2, 0, -0.556]} scale={24.623}>
                <mesh name="Cube029_Box_1_0" geometry={nodes.Cube029_Box_1_0.geometry} material={materials.Box_1} />
                <mesh name="Cube029_Box_2_0" geometry={nodes.Cube029_Box_2_0.geometry} material={materials.Box_2} />
              </group>
              <group name="Cube030" position={[-292.433, 246.324, -117.165]} rotation={[-Math.PI / 2, 0, -1.784]} scale={24.623}>
                <mesh name="Cube030_Box_1_0" geometry={nodes.Cube030_Box_1_0.geometry} material={materials.Box_1} />
                <mesh name="Cube030_Box_2_0" geometry={nodes.Cube030_Box_2_0.geometry} material={materials.Box_2} />
              </group>
              <group name="Cube031" position={[-342.895, 295.571, -90.899]} rotation={[-Math.PI / 2, 0, -1.971]} scale={24.623}>
                <mesh name="Cube031_Box_1_0" geometry={nodes.Cube031_Box_1_0.geometry} material={materials.Box_1} />
                <mesh name="Cube031_Box_2_0" geometry={nodes.Cube031_Box_2_0.geometry} material={materials.Box_2} />
              </group>
              <group name="Cube032" position={[-190.854, 256.708, 187.303]} rotation={[-Math.PI / 2, 0, 0]} scale={[5.982, 6.667, 10.711]}>
                <mesh name="Cube032_Box_1_0" geometry={nodes.Cube032_Box_1_0.geometry} material={materials.Box_1} />
              </group>
              <group name="Cube033" position={[-26.951, 594.213, -63.234]} rotation={[-Math.PI / 2, 0, 0]} scale={428.906}>
                <mesh name="Cube033_Chocofur_Metal_Solid_01_0" geometry={nodes.Cube033_Chocofur_Metal_Solid_01_0.geometry} material={materials.Chocofur_Metal_Solid_01} />
              </group>
              <group name="Cube034" position={[-190.854, 256.708, 108.444]} rotation={[-Math.PI / 2, 0, 0]} scale={[5.982, 6.667, 10.711]}>
                <mesh name="Cube034_Box_1_0" geometry={nodes.Cube034_Box_1_0.geometry} material={materials.Box_1} />
              </group>
              <group name="Cube035" position={[-345.523, 246.324, -161.284]} rotation={[-Math.PI / 2, 0, 2.38]} scale={24.623}>
                <mesh name="Cube035_Box_1_0" geometry={nodes.Cube035_Box_1_0.geometry} material={materials.Box_1} />
                <mesh name="Cube035_Box_2_0" geometry={nodes.Cube035_Box_2_0.geometry} material={materials.Box_2} />
              </group>
              <group name="Cube036" position={[-260.804, 221.756, -212.134]} rotation={[Math.PI / 2, 0, -2.111]} scale={-100}>
                <mesh name="Cube036_tOILE_JUTE_0" geometry={nodes.Cube036_tOILE_JUTE_0.geometry} material={materials.tOILE_JUTE} />
              </group>
              <group name="Cube037" position={[-285.558, 246.324, -270.484]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={-24.623}>
                <mesh name="Cube037_Box_1_0" geometry={nodes.Cube037_Box_1_0.geometry} material={materials.Box_1} />
                <mesh name="Cube037_Box_2_0" geometry={nodes.Cube037_Box_2_0.geometry} material={materials.Box_2} />
              </group>
              <group name="Cube038" position={[-341.085, 246.324, -270.484]} rotation={[Math.PI / 2, 0, -2.653]} scale={-24.623}>
                <mesh name="Cube038_Box_1_0" geometry={nodes.Cube038_Box_1_0.geometry} material={materials.Box_1} />
                <mesh name="Cube038_Box_2_0" geometry={nodes.Cube038_Box_2_0.geometry} material={materials.Box_2} />
              </group>
              <group name="Cube039" position={[-342.896, 295.571, -283.555]} rotation={[Math.PI / 2, 0, 0.577]} scale={-24.623}>
                <mesh name="Cube039_Box_1_0" geometry={nodes.Cube039_Box_1_0.geometry} material={materials.Box_1} />
                <mesh name="Cube039_Box_2_0" geometry={nodes.Cube039_Box_2_0.geometry} material={materials.Box_2} />
              </group>
              <group name="Cube040" position={[-301.565, 246.324, -333.659]} rotation={[Math.PI / 2, 0, 2.585]} scale={-24.623}>
                <mesh name="Cube040_Box_1_0" geometry={nodes.Cube040_Box_1_0.geometry} material={materials.Box_1} />
                <mesh name="Cube040_Box_2_0" geometry={nodes.Cube040_Box_2_0.geometry} material={materials.Box_2} />
              </group>
              <group name="Cube041" position={[-350.735, 246.324, -372.021]} rotation={[Math.PI / 2, 0, 1.507]} scale={-24.623}>
                <mesh name="Cube041_Box_1_0" geometry={nodes.Cube041_Box_1_0.geometry} material={materials.Box_1} />
                <mesh name="Cube041_Box_2_0" geometry={nodes.Cube041_Box_2_0.geometry} material={materials.Box_2} />
              </group>
              <group name="Cube042" position={[-278.065, 246.324, -460.513]} rotation={[Math.PI / 2, 0, 2.063]} scale={-24.623}>
                <mesh name="Cube042_Box_1_0" geometry={nodes.Cube042_Box_1_0.geometry} material={materials.Box_1} />
                <mesh name="Cube042_Box_2_0" geometry={nodes.Cube042_Box_2_0.geometry} material={materials.Box_2} />
              </group>
              <group name="Cube043" position={[-304.318, 246.324, -411.584]} rotation={[Math.PI / 2, 0, 2.552]} scale={-24.623}>
                <mesh name="Cube043_Box_1_0" geometry={nodes.Cube043_Box_1_0.geometry} material={materials.Box_1} />
                <mesh name="Cube043_Box_2_0" geometry={nodes.Cube043_Box_2_0.geometry} material={materials.Box_2} />
              </group>
              <group name="Cube044" position={[-316.692, 295.571, -416.169]} rotation={[Math.PI / 2, 0, -0.501]} scale={-24.623}>
                <mesh name="Cube044_Box_1_0" geometry={nodes.Cube044_Box_1_0.geometry} material={materials.Box_1} />
                <mesh name="Cube044_Box_2_0" geometry={nodes.Cube044_Box_2_0.geometry} material={materials.Box_2} />
              </group>
              <group name="Cube045" position={[-341.302, 246.324, -476.276]} rotation={[Math.PI / 2, 0, 1.507]} scale={-24.623}>
                <mesh name="Cube045_Box_1_0" geometry={nodes.Cube045_Box_1_0.geometry} material={materials.Box_1} />
                <mesh name="Cube045_Box_2_0" geometry={nodes.Cube045_Box_2_0.geometry} material={materials.Box_2} />
              </group>
              <group name="Cube046" position={[-347.896, 246.324, -89.684]} rotation={[-Math.PI / 2, 0, -0.864]} scale={24.623}>
                <mesh name="Cube046_Box_1_0" geometry={nodes.Cube046_Box_1_0.geometry} material={materials.Box_1} />
                <mesh name="Cube046_Box_2_0" geometry={nodes.Cube046_Box_2_0.geometry} material={materials.Box_2} />
              </group>
              <group name="Cylinder" position={[-26.429, -79.96, -292.241]} rotation={[-Math.PI / 2, 0, 0]} scale={18.185}>
                <mesh name="Cylinder_Bois_poutre_0" geometry={nodes.Cylinder_Bois_poutre_0.geometry} material={materials.Bois_poutre} />
              </group>
              <group name="Cylinder001" position={[93.348, -11.787, -183.469]} rotation={[-Math.PI / 2, 0, 0]} scale={300}>
                <mesh name="Cylinder001_Paille001_0" geometry={nodes.Cylinder001_Paille001_0.geometry} material={materials['Paille.001']} />
              </group>
              <group name="Cylinder002" position={[93.348, -11.705, -183.469]} rotation={[-Math.PI / 2, 0, 0]} scale={300}>
                <mesh name="Cylinder002_Soda_2001_0" geometry={nodes.Cylinder002_Soda_2001_0.geometry} material={materials['Soda_2.001']} />
              </group>
              <group name="Cylinder003" position={[93.24, -11.787, -183.23]} rotation={[-Math.PI / 2, 0, 1.849]} scale={300}>
                <mesh name="Cylinder003_Soda001_0" geometry={nodes.Cylinder003_Soda001_0.geometry} material={materials['Soda.001']} />
              </group>
              <group name="Cylinder004" position={[-26.43, -79.96, 321.579]} rotation={[-Math.PI / 2, 0, 0]} scale={300}>
                <mesh name="Cylinder004_Chocofur_Metal_Solid_01004_0" geometry={nodes.Cylinder004_Chocofur_Metal_Solid_01004_0.geometry} material={materials['Chocofur_Metal_Solid_01.004']} />
                <mesh name="Cylinder004_M��tal_poutre001_0" geometry={nodes['Cylinder004_M��tal_poutre001_0'].geometry} material={materials['Mtal_poutre.001']} />
              </group>
              <group name="Cylinder005" position={[67.038, -79.11, 263.715]} rotation={[-Math.PI / 2, 0, 2.186]} scale={[394.084, 394.084, 365.737]}>
                <mesh name="Cylinder005_Bois_tabouret002_0" geometry={nodes.Cylinder005_Bois_tabouret002_0.geometry} material={materials['Bois_tabouret.002']} />
                <mesh name="Cylinder005_Bois_tabouret_0" geometry={nodes.Cylinder005_Bois_tabouret_0.geometry} material={materials.Bois_tabouret} />
                <mesh name="Cylinder005_Chocofur_Metal_Solid_01003_0" geometry={nodes.Cylinder005_Chocofur_Metal_Solid_01003_0.geometry} material={materials['Chocofur_Metal_Solid_01.003']} />
              </group>
              <group name="Cylinder006" position={[-96.861, -79.11, 406.735]} rotation={[-Math.PI / 2, 0, -2.152]} scale={[352.701, 352.701, 405.666]}>
                <mesh name="Cylinder006_Bois_tabouret002_0" geometry={nodes.Cylinder006_Bois_tabouret002_0.geometry} material={materials['Bois_tabouret.002']} />
                <mesh name="Cylinder006_Bois_tabouret_0" geometry={nodes.Cylinder006_Bois_tabouret_0.geometry} material={materials.Bois_tabouret} />
                <mesh name="Cylinder006_Chocofur_Metal_Solid_01003_0" geometry={nodes.Cylinder006_Chocofur_Metal_Solid_01003_0.geometry} material={materials['Chocofur_Metal_Solid_01.003']} />
              </group>
              <group name="Cylinder007" position={[218.162, -79.11, -376.141]} rotation={[-Math.PI / 2, 0, 0.677]} scale={[352.701, 352.701, 405.666]}>
                <mesh name="Cylinder007_Bois_tabouret002_0" geometry={nodes.Cylinder007_Bois_tabouret002_0.geometry} material={materials['Bois_tabouret.002']} />
                <mesh name="Cylinder007_Bois_tabouret_0" geometry={nodes.Cylinder007_Bois_tabouret_0.geometry} material={materials.Bois_tabouret} />
                <mesh name="Cylinder007_Bois_tabouret_0001" geometry={nodes.Cylinder007_Bois_tabouret_0001.geometry} material={materials.Bois_tabouret} />
                <mesh name="Cylinder007_Chocofur_Metal_Solid_01003_0" geometry={nodes.Cylinder007_Chocofur_Metal_Solid_01003_0.geometry} material={materials['Chocofur_Metal_Solid_01.003']} />
              </group>
              <group name="Cylinder008" position={[-77.212, -79.11, 497.137]} rotation={[-Math.PI / 2, 0, -2.152]} scale={[394.084, 394.084, 365.737]}>
                <mesh name="Cylinder008_Bois_tabouret002_0" geometry={nodes.Cylinder008_Bois_tabouret002_0.geometry} material={materials['Bois_tabouret.002']} />
                <mesh name="Cylinder008_Bois_tabouret_0" geometry={nodes.Cylinder008_Bois_tabouret_0.geometry} material={materials.Bois_tabouret} />
                <mesh name="Cylinder008_Chocofur_Metal_Solid_01003_0" geometry={nodes.Cylinder008_Chocofur_Metal_Solid_01003_0.geometry} material={materials['Chocofur_Metal_Solid_01.003']} />
              </group>
              <group name="Cylinder009" position={[107.619, -79.11, -423.669]} rotation={[-Math.PI / 2, 0, 2.154]} scale={[352.701, 352.701, 405.666]}>
                <mesh name="Cylinder009_Bois_tabouret002_0" geometry={nodes.Cylinder009_Bois_tabouret002_0.geometry} material={materials['Bois_tabouret.002']} />
                <mesh name="Cylinder009_Bois_tabouret_0" geometry={nodes.Cylinder009_Bois_tabouret_0.geometry} material={materials.Bois_tabouret} />
                <mesh name="Cylinder009_Chocofur_Metal_Solid_01003_0" geometry={nodes.Cylinder009_Chocofur_Metal_Solid_01003_0.geometry} material={materials['Chocofur_Metal_Solid_01.003']} />
              </group>
              <group name="Cylinder010" position={[27.045, -79.11, -427.378]} rotation={[-Math.PI / 2, 0, 2.154]} scale={[394.084, 394.084, 365.737]}>
                <mesh name="Cylinder010_Bois_tabouret002_0" geometry={nodes.Cylinder010_Bois_tabouret002_0.geometry} material={materials['Bois_tabouret.002']} />
                <mesh name="Cylinder010_Bois_tabouret_0" geometry={nodes.Cylinder010_Bois_tabouret_0.geometry} material={materials.Bois_tabouret} />
                <mesh name="Cylinder010_Chocofur_Metal_Solid_01003_0" geometry={nodes.Cylinder010_Chocofur_Metal_Solid_01003_0.geometry} material={materials['Chocofur_Metal_Solid_01.003']} />
              </group>
              <group name="Cylinder011" position={[100.69, -79.11, -130.083]} rotation={[-Math.PI / 2, 0, 1.976]} scale={[352.701, 352.701, 405.666]}>
                <mesh name="Cylinder011_Bois_tabouret002_0" geometry={nodes.Cylinder011_Bois_tabouret002_0.geometry} material={materials['Bois_tabouret.002']} />
                <mesh name="Cylinder011_Bois_tabouret_0" geometry={nodes.Cylinder011_Bois_tabouret_0.geometry} material={materials.Bois_tabouret} />
                <mesh name="Cylinder011_Chocofur_Metal_Solid_01003_0" geometry={nodes.Cylinder011_Chocofur_Metal_Solid_01003_0.geometry} material={materials['Chocofur_Metal_Solid_01.003']} />
              </group>
              <group name="Cylinder012" position={[45.348, -79.11, -230.299]} rotation={[-Math.PI / 2, 0, 1.976]} scale={[394.084, 394.084, 365.737]}>
                <mesh name="Cylinder012_Bois_tabouret002_0" geometry={nodes.Cylinder012_Bois_tabouret002_0.geometry} material={materials['Bois_tabouret.002']} />
                <mesh name="Cylinder012_Bois_tabouret_0" geometry={nodes.Cylinder012_Bois_tabouret_0.geometry} material={materials.Bois_tabouret} />
                <mesh name="Cylinder012_Chocofur_Metal_Solid_01003_0" geometry={nodes.Cylinder012_Chocofur_Metal_Solid_01003_0.geometry} material={materials['Chocofur_Metal_Solid_01.003']} />
              </group>
              <group name="Cylinder013" position={[-26.43, -79.96, 321.579]} rotation={[-Math.PI / 2, 0, 0]} scale={18.185}>
                <mesh name="Cylinder013_Bois_poutre_0" geometry={nodes.Cylinder013_Bois_poutre_0.geometry} material={materials.Bois_poutre} />
              </group>
              <group name="Cylinder014" position={[-26.951, 650.261, -63.234]} rotation={[-Math.PI / 2, 0, -0.176]} scale={590.136}>
                <mesh name="Cylinder014_Chocofur_Metal_Solid_01002_0" geometry={nodes.Cylinder014_Chocofur_Metal_Solid_01002_0.geometry} material={materials['Chocofur_Metal_Solid_01.002']} />
              </group>
              <group name="Cylinder015" position={[-26.429, -61.776, -292.241]} rotation={[-Math.PI / 2, 0, 0]} scale={300}>
                <mesh name="Cylinder015_Chocofur_Metal_Solid_01_0" geometry={nodes.Cylinder015_Chocofur_Metal_Solid_01_0.geometry} material={materials.Chocofur_Metal_Solid_01} />
                <mesh name="Cylinder015_M��tal_poutre_0" geometry={nodes['Cylinder015_M��tal_poutre_0'].geometry} material={materials.Mtal_poutre} />
              </group>
              <group name="Cylinder016" position={[-26.429, -79.96, -292.241]} rotation={[-Math.PI / 2, 0, 0]} scale={300}>
                <mesh name="Cylinder016_Chocofur_Metal_Solid_01_0" geometry={nodes.Cylinder016_Chocofur_Metal_Solid_01_0.geometry} material={materials.Chocofur_Metal_Solid_01} />
                <mesh name="Cylinder016_M��tal_poutre_0" geometry={nodes['Cylinder016_M��tal_poutre_0'].geometry} material={materials.Mtal_poutre} />
              </group>
              <group name="Cylinder017" position={[-26.43, -61.775, 321.579]} rotation={[-Math.PI / 2, 0, 0]} scale={300}>
                <mesh name="Cylinder017_Chocofur_Metal_Solid_01_0" geometry={nodes.Cylinder017_Chocofur_Metal_Solid_01_0.geometry} material={materials.Chocofur_Metal_Solid_01} />
                <mesh name="Cylinder017_M��tal_poutre_0" geometry={nodes['Cylinder017_M��tal_poutre_0'].geometry} material={materials.Mtal_poutre} />
              </group>
              <group name="Cylinder018" position={[-26.43, -79.96, 321.579]} rotation={[-Math.PI / 2, 0, 0]} scale={300}>
                <mesh name="Cylinder018_Chocofur_Metal_Solid_01_0" geometry={nodes.Cylinder018_Chocofur_Metal_Solid_01_0.geometry} material={materials.Chocofur_Metal_Solid_01} />
                <mesh name="Cylinder018_M��tal_poutre_0" geometry={nodes['Cylinder018_M��tal_poutre_0'].geometry} material={materials.Mtal_poutre} />
              </group>
              <group name="Cylinder022" position={[57.79, -11.787, -186.1]} rotation={[-Math.PI / 2, 0, -0.002]} scale={300}>
                <mesh name="Cylinder022_Soda001_0" geometry={nodes.Cylinder022_Soda001_0.geometry} material={materials['Soda.001']} />
              </group>
              <group name="Cylinder023" position={[57.542, -11.752, -186.186]} rotation={[-Math.PI / 2, 0, 1.659]} scale={300}>
                <mesh name="Cylinder023_Soda_2001_0" geometry={nodes.Cylinder023_Soda_2001_0.geometry} material={materials['Soda_2.001']} />
              </group>
              <group name="Cylinder024" position={[57.542, -14.669, -186.186]} rotation={[-Math.PI / 2, 0, 1.659]} scale={300}>
                <mesh name="Cylinder024_Paille001_0" geometry={nodes.Cylinder024_Paille001_0.geometry} material={materials['Paille.001']} />
              </group>
              <group name="Cylinder025" position={[80.606, -11.787, 282.894]} rotation={[-Math.PI / 2, 0, -2.288]} scale={300}>
                <mesh name="Cylinder025_Soda001_0" geometry={nodes.Cylinder025_Soda001_0.geometry} material={materials['Soda.001']} />
              </group>
              <group name="Cylinder026" position={[80.347, -11.787, 282.934]} rotation={[-Math.PI / 2, 0, 2.147]} scale={300}>
                <mesh name="Cylinder026_Soda_2001_0" geometry={nodes.Cylinder026_Soda_2001_0.geometry} material={materials['Soda_2.001']} />
              </group>
              <group name="Cylinder027" position={[80.347, -13.873, 282.934]} rotation={[-Math.PI / 2, 0, 2.147]} scale={300}>
                <mesh name="Cylinder027_Paille001_0" geometry={nodes.Cylinder027_Paille001_0.geometry} material={materials['Paille.001']} />
              </group>
              <group name="Cylinder028" position={[-26.43, 273.765, 321.579]} rotation={[-Math.PI / 2, 0, 0]} scale={242.747}>
                <mesh name="Cylinder028_Chocofur_Metal_Solid_01_0" geometry={nodes.Cylinder028_Chocofur_Metal_Solid_01_0.geometry} material={materials.Chocofur_Metal_Solid_01} />
                <mesh name="Cylinder028_M��tal_poutre_0" geometry={nodes['Cylinder028_M��tal_poutre_0'].geometry} material={materials.Mtal_poutre} />
              </group>
              <group name="Cylinder029" position={[-26.951, 650.261, -63.234]} rotation={[-Math.PI / 2, 0, -0.176]} scale={590.136}>
                <mesh name="Cylinder029_Chocofur_Metal_Solid_01001_0" geometry={nodes.Cylinder029_Chocofur_Metal_Solid_01001_0.geometry} material={materials['Chocofur_Metal_Solid_01.001']} />
              </group>
              <group name="Cylinder030" position={[75.294, -11.787, -389.703]} rotation={[-Math.PI / 2, 0, 3.029]} scale={300}>
                <mesh name="Cylinder030_Soda001_0" geometry={nodes.Cylinder030_Soda001_0.geometry} material={materials['Soda.001']} />
              </group>
              <group name="Cylinder031" position={[75.113, -11.787, -389.893]} rotation={[-Math.PI / 2, 0, 1.18]} scale={300}>
                <mesh name="Cylinder031_Soda_2001_0" geometry={nodes.Cylinder031_Soda_2001_0.geometry} material={materials['Soda_2.001']} />
              </group>
              <group name="Cylinder032" position={[75.113, -11.787, -389.893]} rotation={[-Math.PI / 2, 0, 1.18]} scale={300}>
                <mesh name="Cylinder032_Paille001_0" geometry={nodes.Cylinder032_Paille001_0.geometry} material={materials['Paille.001']} />
              </group>
              <group name="Cylinder033" position={[80.492, -11.787, -399.121]} rotation={[-Math.PI / 2, 0, 1]} scale={300}>
                <mesh name="Cylinder033_Soda001_0" geometry={nodes.Cylinder033_Soda001_0.geometry} material={materials['Soda.001']} />
              </group>
              <group name="Cylinder034" position={[80.742, -11.787, -399.199]} rotation={[-Math.PI / 2, 0, -0.848]} scale={300}>
                <mesh name="Cylinder034_Soda_2001_0" geometry={nodes.Cylinder034_Soda_2001_0.geometry} material={materials['Soda_2.001']} />
              </group>
              <group name="Cylinder035" position={[80.742, -11.787, -399.199]} rotation={[-Math.PI / 2, 0, -0.848]} scale={300}>
                <mesh name="Cylinder035_Paille001_0" geometry={nodes.Cylinder035_Paille001_0.geometry} material={materials['Paille.001']} />
              </group>
              <group name="Cylinder036" position={[201.285, -8.603, -331.877]} rotation={[-0.103, -0.997, 1.762]} scale={300}>
                <mesh name="Cylinder036_Soda_int_blanc_0" geometry={nodes.Cylinder036_Soda_int_blanc_0.geometry} material={materials.Soda_int_blanc} />
                <mesh name="Cylinder036_Soda001_0" geometry={nodes.Cylinder036_Soda001_0.geometry} material={materials['Soda.001']} />
              </group>
              <group name="Cylinder037" position={[219.513, -8.46, -353.67]} rotation={[-Math.PI / 2, 0, -2.599]} scale={300}>
                <mesh name="Cylinder037_Soda_int_blanc_0" geometry={nodes.Cylinder037_Soda_int_blanc_0.geometry} material={materials.Soda_int_blanc} />
                <mesh name="Cylinder037_Soda001_0" geometry={nodes.Cylinder037_Soda001_0.geometry} material={materials['Soda.001']} />
              </group>
              <group name="Cylinder038" position={[218.119, -15.156, -354.848]} rotation={[-Math.PI / 2, -0.136, 1.002]} scale={300}>
                <mesh name="Cylinder038_Paille001_0" geometry={nodes.Cylinder038_Paille001_0.geometry} material={materials['Paille.001']} />
              </group>
              <group name="Cylinder039" position={[201.844, -11.534, -313.846]} rotation={[Math.PI, -0.868, Math.PI / 2]} scale={300}>
                <mesh name="Cylinder039_Paille001_0" geometry={nodes.Cylinder039_Paille001_0.geometry} material={materials['Paille.001']} />
              </group>
              <group name="Cylinder040" position={[196.806, -11.787, 481.01]} rotation={[-Math.PI / 2, 0, -0.728]} scale={300}>
                <mesh name="Cylinder040_Soda001_0" geometry={nodes.Cylinder040_Soda001_0.geometry} material={materials['Soda.001']} />
              </group>
              <group name="Cylinder041" position={[196.844, -11.787, 481.27]} rotation={[-Math.PI / 2, 0, -2.576]} scale={300}>
                <mesh name="Cylinder041_Soda_2001_0" geometry={nodes.Cylinder041_Soda_2001_0.geometry} material={materials['Soda_2.001']} />
              </group>
              <group name="Cylinder042" position={[196.844, -11.787, 481.27]} rotation={[-Math.PI / 2, 0, -2.576]} scale={300}>
                <mesh name="Cylinder042_Paille001_0" geometry={nodes.Cylinder042_Paille001_0.geometry} material={materials['Paille.001']} />
              </group>
              <group name="Cylinder043" position={[120.019, -11.787, 308.279]} rotation={[-Math.PI / 2, 0, -1.864]} scale={300}>
                <mesh name="Cylinder043_Soda001_0" geometry={nodes.Cylinder043_Soda001_0.geometry} material={materials['Soda.001']} />
              </group>
              <group name="Cylinder044" position={[119.799, -11.787, 308.422]} rotation={[-Math.PI / 2, 0, 2.571]} scale={300}>
                <mesh name="Cylinder044_Soda_2001_0" geometry={nodes.Cylinder044_Soda_2001_0.geometry} material={materials['Soda_2.001']} />
              </group>
              <group name="Cylinder045" position={[119.799, -15.091, 308.422]} rotation={[-Math.PI / 2, 0, 2.571]} scale={300}>
                <mesh name="Cylinder045_Paille001_0" geometry={nodes.Cylinder045_Paille001_0.geometry} material={materials['Paille.001']} />
              </group>
              <group name="Cylinder046" position={[-26.429, 249.555, -292.241]} rotation={[-Math.PI / 2, 0, 0]} scale={261.719}>
                <mesh name="Cylinder046_Chocofur_Metal_Solid_01_0" geometry={nodes.Cylinder046_Chocofur_Metal_Solid_01_0.geometry} material={materials.Chocofur_Metal_Solid_01} />
                <mesh name="Cylinder046_M��tal_poutre_0" geometry={nodes['Cylinder046_M��tal_poutre_0'].geometry} material={materials.Mtal_poutre} />
              </group>
              <group name="Cylinder047" position={[-190.729, 256.169, 187.311]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[-6.758, -6.758, -2.351]}>
                <mesh name="Cylinder047_Box_2_0" geometry={nodes.Cylinder047_Box_2_0.geometry} material={materials.Box_2} />
              </group>
              <group name="Cylinder048" position={[-190.729, 242.332, 187.311]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.792, 0.792, 4.691]}>
                <mesh name="Cylinder048_Clou_2001_0" geometry={nodes.Cylinder048_Clou_2001_0.geometry} material={materials['Clou_2.001']} />
              </group>
              <group name="Cylinder049" position={[-190.729, 256.169, 108.452]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[-6.758, -6.758, -2.351]}>
                <mesh name="Cylinder049_Box_2_0" geometry={nodes.Cylinder049_Box_2_0.geometry} material={materials.Box_2} />
              </group>
              <group name="Cylinder050" position={[-190.729, 242.332, 108.452]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.792, 0.792, 4.691]}>
                <mesh name="Cylinder050_Clou_2001_0" geometry={nodes.Cylinder050_Clou_2001_0.geometry} material={materials['Clou_2.001']} />
              </group>
              <group name="Cylinder051" position={[125.085, -79.11, 344.111]} rotation={[-Math.PI / 2, 0, 2.186]} scale={[352.701, 352.701, 405.666]}>
                <mesh name="Cylinder051_Bois_tabouret002_0" geometry={nodes.Cylinder051_Bois_tabouret002_0.geometry} material={materials['Bois_tabouret.002']} />
                <mesh name="Cylinder051_Bois_tabouret_0" geometry={nodes.Cylinder051_Bois_tabouret_0.geometry} material={materials.Bois_tabouret} />
                <mesh name="Cylinder051_Chocofur_Metal_Solid_01003_0" geometry={nodes.Cylinder051_Chocofur_Metal_Solid_01003_0.geometry} material={materials['Chocofur_Metal_Solid_01.003']} />
              </group>
              <group name="Cylinder052" position={[187.444, -78.986, 505.804]} rotation={[-Math.PI / 2, 0, -2.176]} scale={[394.084, 394.084, 365.737]}>
                <mesh name="Cylinder052_Bois_tabouret002_0" geometry={nodes.Cylinder052_Bois_tabouret002_0.geometry} material={materials['Bois_tabouret.002']} />
                <mesh name="Cylinder052_Bois_tabouret_0" geometry={nodes.Cylinder052_Bois_tabouret_0.geometry} material={materials.Bois_tabouret} />
                <mesh name="Cylinder052_Chocofur_Metal_Solid_01003_0" geometry={nodes.Cylinder052_Chocofur_Metal_Solid_01003_0.geometry} material={materials['Chocofur_Metal_Solid_01.003']} />
              </group>
              <group name="Cylinder053" position={[229.492, -79.11, 414.437]} rotation={[-Math.PI / 2, 0, -2.176]} scale={[352.701, 352.701, 405.666]}>
                <mesh name="Cylinder053_Bois_tabouret002_0" geometry={nodes.Cylinder053_Bois_tabouret002_0.geometry} material={materials['Bois_tabouret.002']} />
                <mesh name="Cylinder053_Bois_tabouret_0" geometry={nodes.Cylinder053_Bois_tabouret_0.geometry} material={materials.Bois_tabouret} />
                <mesh name="Cylinder053_Chocofur_Metal_Solid_01003_0" geometry={nodes.Cylinder053_Chocofur_Metal_Solid_01003_0.geometry} material={materials['Chocofur_Metal_Solid_01.003']} />
              </group>
              <group name="Cylinder054" position={[245.644, -79.11, -280.659]} rotation={[-Math.PI / 2, 0, 0.677]} scale={[394.084, 394.084, 365.737]}>
                <mesh name="Cylinder054_Bois_tabouret002_0" geometry={nodes.Cylinder054_Bois_tabouret002_0.geometry} material={materials['Bois_tabouret.002']} />
                <mesh name="Cylinder054_Bois_tabouret_0" geometry={nodes.Cylinder054_Bois_tabouret_0.geometry} material={materials.Bois_tabouret} />
                <mesh name="Cylinder054_Chocofur_Metal_Solid_01003_0" geometry={nodes.Cylinder054_Chocofur_Metal_Solid_01003_0.geometry} material={materials['Chocofur_Metal_Solid_01.003']} />
              </group>
              <group name="Fondations" position={[-31.99, -80.86, 17.848]} rotation={[-Math.PI / 2, 0, 0]} scale={300}>
                <mesh name="Fondations_Bois_fondation_0" geometry={nodes.Fondations_Bois_fondation_0.geometry} material={materials.Bois_fondation} />
              </group>
              <group name="Montant_porte" position={[375.147, -80.86, 125.496]} rotation={[-Math.PI / 2, 0, 0]} scale={300}>
                <mesh name="Montant_porte_Bois_poutre_0" geometry={nodes.Montant_porte_Bois_poutre_0.geometry} material={materials.Bois_poutre} />
              </group>
              <group name="Murs_01" position={[-48.205, -80.86, 17.848]} rotation={[-Math.PI / 2, 0, 0]} scale={[283.718, 266.856, 238.083]}>
                <mesh name="Murs_01_Bois_toit_0" geometry={nodes.Murs_01_Bois_toit_0.geometry} material={materials.Bois_toit} />
              </group>
              <group name="Plane001" position={[252.115, -82.571, -123.93]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Plane001_sable_0" geometry={nodes.Plane001_sable_0.geometry} material={materials.sable} position={[0, 0, -0.437]} scale={[1.838, 4.244, 1]} />
              </group>
              <group name="Plane002" position={[252.115, -85.986, -123.93]} rotation={[-Math.PI / 2, 0, 0]} scale={100.261}>
                <mesh name="Plane002_Material002_0" geometry={nodes.Plane002_Material002_0.geometry} material={materials['Material.004']} />
              </group>
              <group name="Plane003" position={[-236.863, 164.073, -108.242]} rotation={[-Math.PI / 2, 0, 0]} scale={300}>
                <mesh name="Plane003_Clou_2001_0" geometry={nodes.Plane003_Clou_2001_0.geometry} material={materials['Clou_2.001']} />
                <mesh name="Plane003_Cuisine_57001_0" geometry={nodes.Plane003_Cuisine_57001_0.geometry} material={materials['Cuisine_57.001']} />
              </group>
              <group name="Plane004" position={[89.974, -11.828, -199.324]} rotation={[-Math.PI / 2, 0, 0.672]} scale={253.562}>
                <mesh name="Plane004_Burger_box_0" geometry={nodes.Plane004_Burger_box_0.geometry} material={materials.Burger_box} />
              </group>
              <group name="Plane005" position={[362.717, 266.18, 17.848]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[47.429, 80.742, 80.742]}>
                <mesh name="Plane005_Flag_-_rouge_0" geometry={nodes['Plane005_Flag_-_rouge_0'].geometry} material={materials['Flag_-_rouge']} />
                <mesh name="Plane005_flag-blanc_0" geometry={nodes['Plane005_flag-blanc_0'].geometry} material={materials['flag-blanc']} />
              </group>
              <group name="Plane006" position={[-292.079, 297.067, 11.848]} rotation={[-Math.PI / 2, 0, -0.452]} scale={[116.661, 101.43, 87.106]}>
                <mesh name="Plane006_Clou_poutre_0" geometry={nodes.Plane006_Clou_poutre_0.geometry} material={materials.Clou_poutre} />
              </group>
              <group name="Plane007" position={[63.449, -9.081, -196.959]} rotation={[1.583, -0.016, 0.665]} scale={253.562}>
                <mesh name="Plane007_Burger_box_0" geometry={nodes.Plane007_Burger_box_0.geometry} material={materials.Burger_box} />
              </group>
              <group name="Plane008" position={[-237.463, 164.073, 173.069]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Plane008_Clou_2_0" geometry={nodes.Plane008_Clou_2_0.geometry} material={materials.Clou_2} />
                <mesh name="Plane008_Cuisine_5_0" geometry={nodes.Plane008_Cuisine_5_0.geometry} material={materials.Cuisine_5} />
              </group>
              <group name="Plane009" position={[57.4, -11.826, -175.994]} rotation={[-Math.PI / 2, 0, -2.643]} scale={253.562}>
                <mesh name="Plane009_Burger_box_0" geometry={nodes.Plane009_Burger_box_0.geometry} material={materials.Burger_box} />
              </group>
              <group name="Plane010" position={[-292.079, 297.067, 11.848]} rotation={[0, 1.119, -Math.PI / 2]} scale={[87.106, 101.43, 116.661]}>
                <mesh name="Plane010_Caisse_enregistreuse_0" geometry={nodes.Plane010_Caisse_enregistreuse_0.geometry} material={materials.Caisse_enregistreuse} />
              </group>
              <group name="Plane011" position={[-237.462, -3.161, -253.592]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Plane011_Clou_2_0" geometry={nodes.Plane011_Clou_2_0.geometry} material={materials.Clou_2} />
                <mesh name="Plane011_Cuisine_41_0" geometry={nodes.Plane011_Cuisine_41_0.geometry} material={materials.Cuisine_41} />
              </group>
              <group name="Plane012" position={[-236.863, 164.073, -108.242]} rotation={[-Math.PI / 2, 0, 0]} scale={300}>
                <mesh name="Plane012_Clou_2_0" geometry={nodes.Plane012_Clou_2_0.geometry} material={materials.Clou_2} />
                <mesh name="Plane012_Cuisine_57_0" geometry={nodes.Plane012_Cuisine_57_0.geometry} material={materials.Cuisine_57} />
              </group>
              <group name="Plane013" position={[362.717, 266.18, 17.848]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[47.429, 80.742, 80.742]}>
                <mesh name="Plane013_Flag_-_rouge_0" geometry={nodes['Plane013_Flag_-_rouge_0'].geometry} material={materials['Flag_-_rouge']} />
                <mesh name="Plane013_Flag-Jaune001_0" geometry={nodes['Plane013_Flag-Jaune001_0'].geometry} material={materials['Flag-Jaune.001']} />
              </group>
              <group name="Plane014" position={[82.019, -11.787, -163.895]} rotation={[-Math.PI / 2, 0, 0]} scale={300}>
                <mesh name="Plane014_Plateau_0" geometry={nodes.Plane014_Plateau_0.geometry} material={materials.Plateau} />
              </group>
              <group name="Plane015" position={[85.15, -11.787, 276.394]} rotation={[-Math.PI / 2, 0, 0]} scale={300}>
                <mesh name="Plane015_Plateau_0" geometry={nodes.Plane015_Plateau_0.geometry} material={materials.Plateau} />
              </group>
              <group name="Plane016" position={[89.061, -11.536, 274.295]} rotation={[-Math.PI / 2, 0, -2.643]} scale={253.562}>
                <mesh name="Plane016_Burger_box_0" geometry={nodes.Plane016_Burger_box_0.geometry} material={materials.Burger_box} />
              </group>
              <group name="Plane017" position={[92.98, -8.837, 272.125]} rotation={[1.561, -0.017, -0.499]} scale={253.562}>
                <mesh name="Plane017_Burger_box_0" geometry={nodes.Plane017_Burger_box_0.geometry} material={materials.Burger_box} />
              </group>
              <group name="Plane018" position={[-193.483, 157.516, 150.21]} rotation={[-Math.PI / 2, 0, 0]} scale={80.973}>
                <mesh name="Plane018_Menu_1_0" geometry={nodes.Plane018_Menu_1_0.geometry} material={materials.Menu_1} />
                <mesh name="Plane018_Menu_2_0" geometry={nodes.Plane018_Menu_2_0.geometry} material={materials.Menu_2} />
              </group>
              <group name="Plane019" position={[362.717, 266.18, 17.848]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[47.429, 80.742, 80.742]}>
                <mesh name="Plane019_Flag_-_bleu_0" geometry={nodes['Plane019_Flag_-_bleu_0'].geometry} material={materials['Flag_-_bleu']} />
                <mesh name="Plane019_flag-blanc_0" geometry={nodes['Plane019_flag-blanc_0'].geometry} material={materials['flag-blanc']} />
              </group>
              <group name="Plane020" position={[362.402, 266.18, 17.848]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[47.429, 87.848, 80.742]}>
                <mesh name="Plane020_Cordage_0" geometry={nodes.Plane020_Cordage_0.geometry} material={materials.Cordage} />
              </group>
              <group name="Plane021" position={[82.411, -11.787, -394.153]} rotation={[-Math.PI / 2, 0, 0.423]} scale={300}>
                <mesh name="Plane021_Plateau_0" geometry={nodes.Plane021_Plateau_0.geometry} material={materials.Plateau} />
              </group>
              <group name="Plane022" position={[56.181, -11.536, -419.312]} rotation={[-Math.PI / 2, 0, 2.495]} scale={253.562}>
                <mesh name="Plane022_Burger_box_0" geometry={nodes.Plane022_Burger_box_0.geometry} material={materials.Burger_box} />
              </group>
              <group name="Plane023" position={[90.373, -8.837, -390.134]} rotation={[1.58, -0.018, 0.468]} scale={253.562}>
                <mesh name="Plane023_Burger_box_0" geometry={nodes.Plane023_Burger_box_0.geometry} material={materials.Burger_box} />
              </group>
              <group name="Plane024" position={[56.267, -6.009, -419.334]} rotation={[-Math.PI / 2, 0, 2.155]} scale={253.562}>
                <mesh name="Plane024_Burger_box_0" geometry={nodes.Plane024_Burger_box_0.geometry} material={materials.Burger_box} />
              </group>
              <group name="Plane025" position={[89.561, -3.311, -388.948]} rotation={[1.585, -0.014, 0.808]} scale={253.562}>
                <mesh name="Plane025_Burger_box_0" geometry={nodes.Plane025_Burger_box_0.geometry} material={materials.Burger_box} />
              </group>
              <group name="Plane026" position={[239.793, -11.787, -339.61]} rotation={[-Math.PI / 2, 0, 1.031]} scale={300}>
                <mesh name="Plane026_Plateau_0" geometry={nodes.Plane026_Plateau_0.geometry} material={materials.Plateau} />
              </group>
              <group name="Plane027" position={[239.444, -11.536, -343.723]} rotation={[-Math.PI / 2, 0, -2.277]} scale={253.562}>
                <mesh name="Plane027_Burger_box_0" geometry={nodes.Plane027_Burger_box_0.geometry} material={materials.Burger_box} />
              </group>
              <group name="Plane028" position={[362.717, 266.18, 17.848]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[47.429, 80.742, 80.742]}>
                <mesh name="Plane028_Flag-Jaune_0" geometry={nodes['Plane028_Flag-Jaune_0'].geometry} material={materials['Flag-Jaune']} />
              </group>
              <group name="Plane029" position={[41.266, -11.787, -401.472]} rotation={[-Math.PI / 2, 0, 0.897]} scale={300}>
                <mesh name="Plane029_Plateau_0" geometry={nodes.Plane029_Plateau_0.geometry} material={materials.Plateau} />
              </group>
              <group name="Plane030" position={[188.301, -11.536, 472.46]} rotation={[-Math.PI / 2, 0, -1.083]} scale={253.562}>
                <mesh name="Plane030_Burger_box_0" geometry={nodes.Plane030_Burger_box_0.geometry} material={materials.Burger_box} />
              </group>
              <group name="Plane031" position={[186.175, -8.837, 468.517]} rotation={[1.553, 0.009, -2.058]} scale={253.562}>
                <mesh name="Plane031_Burger_box_0" geometry={nodes.Plane031_Burger_box_0.geometry} material={materials.Burger_box} />
              </group>
              <group name="Plane032" position={[116.806, -11.787, 315.821]} rotation={[-Math.PI / 2, 0, -2.906]} scale={300}>
                <mesh name="Plane032_Plateau_0" geometry={nodes.Plane032_Plateau_0.geometry} material={materials.Plateau} />
              </group>
              <group name="Plane033" position={[111.026, -11.536, 318.198]} rotation={[-Math.PI / 2, 0, 1.935]} scale={253.562}>
                <mesh name="Plane033_Burger_box_0" geometry={nodes.Plane033_Burger_box_0.geometry} material={materials.Burger_box} />
              </group>
              <group name="Plane034" position={[112.652, -8.837, 322.372]} rotation={[1.589, -0.007, 1.206]} scale={253.562}>
                <mesh name="Plane034_Burger_box_0" geometry={nodes.Plane034_Burger_box_0.geometry} material={materials.Burger_box} />
              </group>
              <group name="Plane035" position={[-26.68, -80.86, 16.568]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Plane035_Bitume_0" geometry={nodes.Plane035_Bitume_0.geometry} material={materials.Bitume} />
              </group>
              <group name="Plane059" position={[-193.483, 111.768, 53.704]} rotation={[-Math.PI / 2, 0, 0]} scale={[239.319, 112.251, 112.251]}>
                <mesh name="Plane059_Menu_3_0" geometry={nodes.Plane059_Menu_3_0.geometry} material={materials.Menu_3} />
                <mesh name="Plane059_Menu_4_0" geometry={nodes.Plane059_Menu_4_0.geometry} material={materials.Menu_4} />
              </group>
              <group name="Plane061" position={[362.717, 266.18, 17.848]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[47.429, 80.742, 80.742]}>
                <mesh name="Plane061_Flag_-_bleu_0" geometry={nodes['Plane061_Flag_-_bleu_0'].geometry} material={materials['Flag_-_bleu']} />
                <mesh name="Plane061_Flag-Jaune001_0" geometry={nodes['Plane061_Flag-Jaune001_0'].geometry} material={materials['Flag-Jaune.001']} />
              </group>
              <group name="Plane062" position={[-193.054, 261.526, 187.311]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Plane062_Cordage001_0" geometry={nodes.Plane062_Cordage001_0.geometry} material={materials['Cordage.001']} />
              </group>
              <group name="Plane063" position={[-193.054, 261.526, 108.129]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Plane063_Cordage001_0" geometry={nodes.Plane063_Cordage001_0.geometry} material={materials['Cordage.001']} />
              </group>
              <group name="Plane064" position={[-191.487, 261.784, 132.541]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Plane064_Cordage001_0" geometry={nodes.Plane064_Cordage001_0.geometry} material={materials['Cordage.001']} />
              </group>
              <group name="Plane065" position={[-191.488, 261.784, 161.523]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Plane065_Cordage001_0" geometry={nodes.Plane065_Cordage001_0.geometry} material={materials['Cordage.001']} />
              </group>
              <group name="Plane250" position={[-411.342, -84.102, 621.672]} rotation={[-Math.PI / 2, 0, 0]} scale={300}>
                <mesh name="Plane250_Bois_parquet_0" geometry={nodes.Plane250_Bois_parquet_0.geometry} material={materials.Bois_parquet} />
              </group>
              <group name="Poign��e_porte_dor��" position={[337.618, 34.382, 17.848]} rotation={[-Math.PI / 2, 0, 0]} scale={300}>
                <mesh name="Poign��e_porte_dor��_Poign��e_dor��e_0" geometry={nodes['Poign��e_porte_dor��_Poign��e_dor��e_0'].geometry} material={materials.Poigne_dore} />
              </group>
              <group name="Porte_vitr��e" position={[337.618, 34.382, 17.848]} rotation={[-Math.PI / 2, 0, 0]} scale={300}>
                <mesh name="Porte_vitr��e_EEVEE_Glass_Shader_0" geometry={nodes['Porte_vitr��e_EEVEE_Glass_Shader_0'].geometry} material={materials.EEVEE_Glass_Shader} />
              </group>
              <group name="Sphere" position={[0, 369.82, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={4462.135}>
                <mesh name="Sphere_Bikini_bottom__0" geometry={nodes.Sphere_Bikini_bottom__0.geometry} material={materials.Bikini_bottom} position={[0.568, -0.918, 0.088]} scale={4.287} />
                <mesh name="Sphere_Material004_0" geometry={nodes.Sphere_Material004_0.geometry} material={materials['Material.006']} position={[0.568, -0.918, 0.718]} scale={4.287} />
              </group>
              <group name="Toit" position={[-48.205, -80.86, 17.848]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Toit_Bois_toit_0" geometry={nodes.Toit_Bois_toit_0.geometry} material={materials.Bois_toit} />
              </group>
              <group name="Torus001" position={[-240.59, 56.664, 382.98]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Torus001_Chocofur_Metal_Solid_05001_0" geometry={nodes.Torus001_Chocofur_Metal_Solid_05001_0.geometry} material={materials['Chocofur_Metal_Solid_05.001']} />
              </group>
              <group name="Torus002" position={[-308.881, 407.533, 585.94]} rotation={[-1.033, 0.043, 0.416]} scale={[608.808, 608.807, 482.8]}>
                <mesh name="Torus002_Chocofur_Metal_Solid_05001_0" geometry={nodes.Torus002_Chocofur_Metal_Solid_05001_0.geometry} material={materials['Chocofur_Metal_Solid_05.001']} />
              </group>
              <group name="Vitres" position={[-48.205, -80.86, 17.848]} rotation={[-Math.PI / 2, 0, 0]} scale={300}>
                <mesh name="Vitres_EEVEE_Glass_Shader_0" geometry={nodes.Vitres_EEVEE_Glass_Shader_0.geometry} material={materials.EEVEE_Glass_Shader} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model002" position={[8.026, -9.173, 60.832]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="spongebob_bindobjcleanergles">
            <mesh name="Object_2" geometry={nodes.Object_2.geometry} material={materials.spongebob} />
          </group>
        </group>
        <group name="Sketchfab_model003" position={[-12.12, -11.891, 75.647]} rotation={[-Math.PI / 2, 0, 0]} scale={215.563}>
          <group name="55af4adfca064e7e847c3f68cd18247dfbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2001">
              <group name="RootNode002">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <group name="L_Eye2" />
                  <skinnedMesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials['Scene_-_Root']} skeleton={nodes.Object_6.skeleton} />
                </group>
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
        <mesh name="Text" geometry={nodes.Text.geometry} material={materials['Metal tread panel']} position={[0.621, -2.159, 6.789]} rotation={[Math.PI / 2, 0, 0]} scale={2.449} />
      </group>
    </group>
  )
}
useGLTF.preload('/finalScene.glb')

export const useAnimationControl = () => {
  const [currentAnimation, setCurrentAnimation] = useState(null)
  return { currentAnimation, setCurrentAnimation }
}