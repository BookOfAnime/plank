import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from 'three'

export function ChumBucket(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/chumBucket.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    // Play the 'jumpdown' animation when the component mounts
    if (actions.jumpdown) {
      actions.jumpdown.reset().play()
      actions.jumpdown.clampWhenFinished = true
      actions.jumpdown.loop = THREE.LoopOnce
    }
  }, [actions])
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
        <group name="Cordage_bati_ext001" position={[-26.681, -120.988, 679.565]} rotation={[-Math.PI / 2, 0, 0]} scale={[300, 300, 315.905]} />
        <group name="Circle001" position={[205.964, -78.916, 463.356]} rotation={[-Math.PI / 2, 0, -2.176]} scale={14.686}>
          <mesh name="Circle001_Jaune_table_0" geometry={nodes.Circle001_Jaune_table_0.geometry} material={materials.Jaune_table} />
          <mesh name="Circle001_Metal_table_0" geometry={nodes.Circle001_Metal_table_0.geometry} material={materials.Metal_table} />
          <mesh name="Circle001_Rouge_table_0" geometry={nodes.Circle001_Rouge_table_0.geometry} material={materials.Rouge_table} />
        </group>
        <group name="Cylinder053" position={[229.491, -79.11, 414.437]} rotation={[-Math.PI / 2, 0, -2.176]} scale={[352.701, 352.701, 405.666]}>
          <mesh name="Cylinder053_Bois_tabouret002_0" geometry={nodes.Cylinder053_Bois_tabouret002_0.geometry} material={materials['Bois_tabouret.002']} />
          <mesh name="Cylinder053_Bois_tabouret_0" geometry={nodes.Cylinder053_Bois_tabouret_0.geometry} material={materials.Bois_tabouret} />
          <mesh name="Cylinder053_Chocofur_Metal_Solid_01003_0" geometry={nodes.Cylinder053_Chocofur_Metal_Solid_01003_0.geometry} material={materials['Chocofur_Metal_Solid_01.003']} />
        </group>
        <group name="Cylinder052" position={[187.444, -78.986, 505.804]} rotation={[-Math.PI / 2, 0, -2.176]} scale={[394.084, 394.084, 365.737]}>
          <mesh name="Cylinder052_Bois_tabouret002_0" geometry={nodes.Cylinder052_Bois_tabouret002_0.geometry} material={materials['Bois_tabouret.002']} />
          <mesh name="Cylinder052_Bois_tabouret_0" geometry={nodes.Cylinder052_Bois_tabouret_0.geometry} material={materials.Bois_tabouret} />
          <mesh name="Cylinder052_Chocofur_Metal_Solid_01003_0" geometry={nodes.Cylinder052_Chocofur_Metal_Solid_01003_0.geometry} material={materials['Chocofur_Metal_Solid_01.003']} />
        </group>
        <group name="Cylinder040" position={[196.806, -11.787, 481.01]} rotation={[-Math.PI / 2, 0, -0.728]} scale={300}>
          <mesh name="Cylinder040_Soda001_0" geometry={nodes.Cylinder040_Soda001_0.geometry} material={materials['Soda.001']} />
        </group>
        <group name="Cylinder041" position={[196.843, -11.787, 481.27]} rotation={[-Math.PI / 2, 0, -2.576]} scale={300}>
          <mesh name="Cylinder041_Soda_2001_0" geometry={nodes.Cylinder041_Soda_2001_0.geometry} material={materials['Soda_2.001']} />
        </group>
        <group name="Cylinder042" position={[196.843, -11.787, 481.27]} rotation={[-Math.PI / 2, 0, -2.576]} scale={300}>
          <mesh name="Cylinder042_Paille001_0" geometry={nodes.Cylinder042_Paille001_0.geometry} material={materials['Paille.001']} />
        </group>
        <group name="Plane030" position={[188.301, -11.536, 472.46]} rotation={[-Math.PI / 2, 0, -1.083]} scale={253.562}>
          <mesh name="Plane030_Burger_box_0" geometry={nodes.Plane030_Burger_box_0.geometry} material={materials.Burger_box} />
        </group>
        <group name="Plane031" position={[186.175, -8.837, 468.517]} rotation={[1.553, 0.009, -2.058]} scale={253.562}>
          <mesh name="Plane031_Burger_box_0" geometry={nodes.Plane031_Burger_box_0.geometry} material={materials.Burger_box} />
        </group>
        <group name="Algue001" position={[1177.049, -96.387, 920.724]} rotation={[0.54, 1.316, -0.775]} scale={49.151}>
          <mesh name="Algue001_Algue_vert_01_0" geometry={nodes.Algue001_Algue_vert_01_0.geometry} material={materials.Algue_vert_01} />
          <mesh name="Algue001_Algue_vert_02_0" geometry={nodes.Algue001_Algue_vert_02_0.geometry} material={materials.Algue_vert_02} />
        </group>
        <group name="Algue002" position={[1177.049, -96.387, -529.165]} rotation={[2.948, 0.831, 3.037]} scale={57.184}>
          <mesh name="Algue002_Algue_vert_01_0" geometry={nodes.Algue002_Algue_vert_01_0.geometry} material={materials.Algue_vert_01} />
          <mesh name="Algue002_Algue_vert_02_0" geometry={nodes.Algue002_Algue_vert_02_0.geometry} material={materials.Algue_vert_02} />
        </group>
        <group name="Algue003" position={[131.975, -96.387, -1310.86]} rotation={[3.009, 0.204, 2.92]} scale={40.21}>
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
        <group name="Algue008" position={[-1026.924, -97.032, 1044.964]} rotation={[2.948, 0.831, 3.037]} scale={49.398}>
          <mesh name="Algue008_Algue_vert_01_0" geometry={nodes.Algue008_Algue_vert_01_0.geometry} material={materials.Algue_vert_01} />
          <mesh name="Algue008_Algue_vert_02_0" geometry={nodes.Algue008_Algue_vert_02_0.geometry} material={materials.Algue_vert_02} />
        </group>
        <group name="Algue009" position={[-1013.506, -105.21, 1060.034]} rotation={[3.003, 0.345, 2.94]} scale={[48.348, 29.152, 49.104]}>
          <mesh name="Algue009_Algue_vert_01_0" geometry={nodes.Algue009_Algue_vert_01_0.geometry} material={materials.Algue_vert_01} />
          <mesh name="Algue009_Algue_vert_02_0" geometry={nodes.Algue009_Algue_vert_02_0.geometry} material={materials.Algue_vert_02} />
        </group>
        <group name="Circle011" position={[-1244.279, -81.58, 865.804]} rotation={[-Math.PI / 2, 0, -0.956]} scale={[1148.029, 1339.696, 1887.116]}>
          <mesh name="Circle011_Bikini_bottom_house001_0" geometry={nodes.Circle011_Bikini_bottom_house001_0.geometry} material={materials['Bikini_bottom_house.001']} />
          <mesh name="Circle011_Bikini_bottom_house_0" geometry={nodes.Circle011_Bikini_bottom_house_0.geometry} material={materials.Bikini_bottom_house} />
          <mesh name="Circle011_Clou_2003_0" geometry={nodes.Circle011_Clou_2003_0.geometry} material={materials['Clou_2.003']} />
          <mesh name="Circle011_Glass001_0" geometry={nodes.Circle011_Glass001_0.geometry} material={materials['Glass.001']} />
        </group>
        <group name="Sketchfab_model002" position={[8.026, -9.173, 60.832]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="spongebob_bindobjcleanergles">
            <mesh name="Object_2" geometry={nodes.Object_2.geometry} material={materials.spongebob} />
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
        <mesh name="Plane008_Clou_2_0" geometry={nodes.Plane008_Clou_2_0.geometry} material={materials.Clou_2} />
        <mesh name="Plane011_Clou_2_0" geometry={nodes.Plane011_Clou_2_0.geometry} material={materials.Clou_2} />
        <mesh name="Plane012_Clou_2_0" geometry={nodes.Plane012_Clou_2_0.geometry} material={materials.Clou_2} />
        <mesh name="Cube015_Clou_2_0" geometry={nodes.Cube015_Clou_2_0.geometry} material={materials.Clou_2} />
        <mesh name="Circle019_Caisse_enregistreuse_0" geometry={nodes.Circle019_Caisse_enregistreuse_0.geometry} material={materials.Caisse_enregistreuse} />
        <mesh name="Circle020_Caisse_enregistreuse_0" geometry={nodes.Circle020_Caisse_enregistreuse_0.geometry} material={materials.Caisse_enregistreuse} />
        <mesh name="Circle021_Caisse_enregistreuse_0" geometry={nodes.Circle021_Caisse_enregistreuse_0.geometry} material={materials.Caisse_enregistreuse} />
        <mesh name="Cylinder001_Paille001_0" geometry={nodes.Cylinder001_Paille001_0.geometry} material={materials['Paille.001']} />
        <mesh name="Cylinder024_Paille001_0" geometry={nodes.Cylinder024_Paille001_0.geometry} material={materials['Paille.001']} />
        <mesh name="Cylinder032_Paille001_0" geometry={nodes.Cylinder032_Paille001_0.geometry} material={materials['Paille.001']} />
        <mesh name="Cylinder035_Paille001_0" geometry={nodes.Cylinder035_Paille001_0.geometry} material={materials['Paille.001']} />
        <mesh name="Cylinder045_Paille001_0" geometry={nodes.Cylinder045_Paille001_0.geometry} material={materials['Paille.001']} />
        <mesh name="Cylinder048_Clou_2001_0" geometry={nodes.Cylinder048_Clou_2001_0.geometry} material={materials['Clou_2.001']} />
        <mesh name="Plane003_Clou_2001_0" geometry={nodes.Plane003_Clou_2001_0.geometry} material={materials['Clou_2.001']} />
        <mesh name="Circle016_Bikini_bottom_house001_0" geometry={nodes.Circle016_Bikini_bottom_house001_0.geometry} material={materials['Bikini_bottom_house.001']} />
        <mesh name="Sphere_Bikini_bottom__0" geometry={nodes.Sphere_Bikini_bottom__0.geometry} material={materials.Bikini_bottom} position={[0.568, -0.918, 0.088]} scale={4.287} />
      </group>
    </group>
  )
}

useGLTF.preload('/chumBucket.glb')
