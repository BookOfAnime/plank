import React, { useRef, useEffect, useState, Suspense } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import {
  useGLTF,
  useAnimations,
  OrbitControls,
  Loader,
} from "@react-three/drei";
import * as THREE from "three";

function PlanktonModel({ setAvailableAnimations, currentAnimation }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/planktonFinal.glb");
  const { actions, names } = useAnimations(animations, group);

  const animationNameMap = {
    "dance": "I'm freaky",
    "withme": "TikTok Dancer",
    "cancan": "Can-can",
    "jumpdown": "PLEASE DON'T CLICK"
  };

  useEffect(() => {
    const desiredAnimations = ["dance", "withme", "cancan", "jumpdown"];
    const availableDesiredAnimations = names
      .filter(name => desiredAnimations.includes(name))
      .map(name => ({ original: name, display: animationNameMap[name] }));
    setAvailableAnimations(availableDesiredAnimations);

    // Play 'dance' animation initially
    if (actions.dance) {
      actions.dance.reset().play();
      actions.dance.clampWhenFinished = true;
      actions.dance.setLoop(THREE.LoopOnce);
    }
  }, [actions, names, setAvailableAnimations]);

  useEffect(() => {
    if (currentAnimation && actions[currentAnimation]) {
      Object.values(actions).forEach((action) => action.stop());
      actions[currentAnimation].reset().play();
      actions[currentAnimation].clampWhenFinished = true;
      actions[currentAnimation].setLoop(THREE.LoopOnce);
    }
  }, [currentAnimation, actions]);

  // Adjust initial camera position
  const { camera } = useThree();
  useEffect(() => {
    camera.position.set(0, 1, 15);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  return (
    <group ref={group}>
      <group name="Scene">
        <group
          name="Sketchfab_model"
          position={[0, 0, 73.967]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.055}
        >
          <group name="Chum_BucketFBX" rotation={[Math.PI / 2, 0, 0]}>
            <group name="RootNode">
              <group
                name="Chum_Bucket"
                position={[4.27, 0, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Chum_Bucket_02_-_Default_0"
                  geometry={nodes["Chum_Bucket_02_-_Default_0"].geometry}
                  material={materials["Material.002"]}
                  position={[0, 1359.112, 0]}
                />
                <mesh
                  name="Chum_Bucket_03_-_Default_0"
                  geometry={nodes["Chum_Bucket_03_-_Default_0"].geometry}
                  material={materials["03_-_Default"]}
                  position={[0, 1359.112, 0]}
                />
                <mesh
                  name="Chum_Bucket_07_-_Default_0"
                  geometry={nodes["Chum_Bucket_07_-_Default_0"].geometry}
                  material={materials["07_-_Default"]}
                  position={[0, 1359.112, 0]}
                />
                <mesh
                  name="Chum_Bucket_08_-_Default_0"
                  geometry={nodes["Chum_Bucket_08_-_Default_0"].geometry}
                  material={materials["08_-_Default"]}
                  position={[0, 1359.112, 0]}
                />
                <mesh
                  name="Chum_Bucket_09_-_Default_0"
                  geometry={nodes["Chum_Bucket_09_-_Default_0"].geometry}
                  material={materials["Material.001"]}
                  position={[0, 1359.112, 0]}
                />
                <mesh
                  name="Chum_Bucket_13_-_Default_0"
                  geometry={nodes["Chum_Bucket_13_-_Default_0"].geometry}
                  material={materials["13_-_Default"]}
                  position={[0, 1359.112, 0]}
                />
                <mesh
                  name="Chum_Bucket_14_-_Default_0"
                  geometry={nodes["Chum_Bucket_14_-_Default_0"].geometry}
                  material={materials["14_-_Default"]}
                  position={[0, 1359.112, 0]}
                />
                <mesh
                  name="Chum_Bucket_15_-_Default_0"
                  geometry={nodes["Chum_Bucket_15_-_Default_0"].geometry}
                  material={materials["15_-_Default"]}
                  position={[0, 1359.112, 0]}
                />
              </group>
              <group
                name="Road"
                position={[4.27, -229.982, -133.65]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={0.545}
              >
                <mesh
                  name="Road_19_-_Default_0"
                  geometry={nodes["Road_19_-_Default_0"].geometry}
                  material={materials["19_-_Default"]}
                  position={[0, 2495.893, 0.001]}
                />
              </group>
              <group
                name="Sand"
                position={[4.27, -476.796, -29.541]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[2.541, 2.541, 3.32]}
              >
                <mesh
                  name="Sand_04_-_Default_0"
                  geometry={nodes["Sand_04_-_Default_0"].geometry}
                  material={materials["04_-_Default"]}
                  position={[0, 534.851, 0]}
                />
              </group>
              <group
                name="Skybox"
                position={[4.27, -521.262, 0]}
                rotation={[-Math.PI / 2, 0, -2.705]}
                scale={[2.55, 2.55, 3.875]}
              >
                <group name="Skybox_10_-_Default_0" />
              </group>
            </group>
          </group>
        </group>
        <group
          name="main"
          position={[0.265, -0.355, 6.863]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.003}
        >
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name="Chfar001"
            geometry={nodes.Chfar001.geometry}
            material={materials["Black.005"]}
            skeleton={nodes.Chfar001.skeleton}
          />
          <skinnedMesh
            name="EyeOUT001"
            geometry={nodes.EyeOUT001.geometry}
            material={materials["Green.005"]}
            skeleton={nodes.EyeOUT001.skeleton}
          />
          <group name="Plancton001">
            <skinnedMesh
              name="Sphere018"
              geometry={nodes.Sphere018.geometry}
              material={materials["Black.005"]}
              skeleton={nodes.Sphere018.skeleton}
            />
            <skinnedMesh
              name="Sphere018_1"
              geometry={nodes.Sphere018_1.geometry}
              material={materials["Green.005"]}
              skeleton={nodes.Sphere018_1.skeleton}
            />
            <skinnedMesh
              name="Sphere018_2"
              geometry={nodes.Sphere018_2.geometry}
              material={materials["Yellow.005"]}
              skeleton={nodes.Sphere018_2.skeleton}
            />
            <skinnedMesh
              name="Sphere018_3"
              geometry={nodes.Sphere018_3.geometry}
              material={materials["red.005"]}
              skeleton={nodes.Sphere018_3.skeleton}
            />
            <skinnedMesh
              name="Sphere018_4"
              geometry={nodes.Sphere018_4.geometry}
              material={materials["Lsan.005"]}
              skeleton={nodes.Sphere018_4.skeleton}
            />
            <skinnedMesh
              name="Sphere018_5"
              geometry={nodes.Sphere018_5.geometry}
              material={materials["L7al9.005"]}
              skeleton={nodes.Sphere018_5.skeleton}
            />
          </group>
          <skinnedMesh
            name="Tooth001"
            geometry={nodes.Tooth001.geometry}
            material={materials["White.005"]}
            skeleton={nodes.Tooth001.skeleton}
          />
        </group>
        <mesh
          name="Text"
          geometry={nodes.Text.geometry}
          material={materials["Metal tread panel"]}
          position={[0.621, -2.159, 6.676]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={2.449}
        />
      </group>
    </group>
  );
}

const fontStyle = `
  @font-face {
    font-family: 'KrustyBurger';
    src: url('/kb.ttf') format('truetype');
  }
`;

function InfoCard({ onClose }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(10px)",
        padding: "30px",
        borderRadius: "20px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
        maxWidth: "800px",
        width: "90%",
        maxHeight: "80vh",
        overflowY: "auto",
        color: "#333",
        fontFamily: "KrustyBurger, Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <style>{fontStyle}</style>
      <h2
        style={{
          color: "#4CAF50",
          marginBottom: "20px",
          textAlign: "center",
          fontSize: "3em",
          textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        PlankTON
      </h2>

      <div
        style={{
          marginBottom: "30px",
          backgroundColor: "#f0f0f0",
          padding: "20px",
          borderRadius: "15px",
          width: "100%",
        }}
      >
        <h3 style={{ color: "#3498db", marginBottom: "15px", fontSize: "2em" }}>
          The Evil Plan
        </h3>
        <p style={{ color: "#555", lineHeight: "1.6", fontSize: "1.1em" }}>
          Plankton, the tiny but ambitious owner of the TON Bucket, has
          concocted his most ingenious plan yet to steal the secret Krabby
          PatTON formula. Leveraging the power of blockchain technology,
          Plankton has created PlankTON - a decentralized network of microscopic
          robots designed to infiltrate the Krusty Krab. These nano-bots,
          powered by TON, will work tirelessly to uncover the secret
          ingredients, all while operating under the radar of Mr. Krabs'
          watchful eye. With each PlankTON holder controlling a swarm of these
          robotic minions, Plankton believes he's finally found the key to
          unlocking the formula and achieving his dreams of culinary domination
          in Bikini Bottom!
        </p>
      </div>

      <div
        style={{
          marginBottom: "30px",
          backgroundColor: "#f0f0f0",
          padding: "20px",
          borderRadius: "15px",
          width: "100%",
        }}
      >
        <h3 style={{ color: "#3498db", marginBottom: "15px", fontSize: "2em" }}>
          Roadmap
        </h3>
        <ul
          style={{
            paddingLeft: "20px",
            color: "#555",
            listStyleType: "none",
          }}
        >
          {[
            {
              date: "July 10th",
              event: "Initial launch and community building",
            },
            {
              date: "July 20th",
              event: "Release of first interactive features",
            },
            { date: "August 2024", event: "Expansion of animation library" },
            { date: "Q4 2024", event: "Full integration with web-based games" },
          ].map((item, index) => (
            <li
              key={index}
              style={{
                marginBottom: "15px",
                display: "flex",
                alignItems: "center",
                fontSize: "1.1em",
              }}
            >
              <span
                style={{
                  fontWeight: "bold",
                  marginRight: "10px",
                  color: "#4CAF50",
                  minWidth: "100px",
                }}
              >
                {item.date}:
              </span>
              {item.event}
            </li>
          ))}
        </ul>
      </div>

      <div style={{ marginBottom: "30px", width: "100%" }}>
        <h3
          style={{
            color: "#3498db",
            marginBottom: "15px",
            fontSize: "2em",
            textAlign: "center",
          }}
        >
          Meme Gallery
        </h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "15px",
          }}
        >
          {["banner.png", "logo.gif", "converter.gif"].map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Meme ${index + 1}`}
              style={{
                width: "calc(33.33% - 10px)",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            />
          ))}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <a
          href="https://twitter.com/PlankTON"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px 20px",
            backgroundColor: "#1DA1F2",
            color: "white",
            textDecoration: "none",
            borderRadius: "20px",
            fontWeight: "bold",
            transition: "background-color 0.3s ease",
            fontSize: "1.1em",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#0c85d0")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#1DA1F2")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
            style={{ marginRight: "10px" }}
          >
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
          </svg>
          Twitter
        </a>
        <a
          href="https://t.me/PlankTON"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px 20px",
            backgroundColor: "#0088cc",
            color: "white",
            textDecoration: "none",
            borderRadius: "20px",
            fontWeight: "bold",
            transition: "background-color 0.3s ease",
            fontSize: "1.1em",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#006699")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#0088cc")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
            style={{ marginRight: "10px" }}
          >
            <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
          </svg>
          Telegram
        </a>
      </div>

      <button
        onClick={onClose}
        style={{
          padding: "12px 24px",
          backgroundColor: "#3498db",
          color: "white",
          border: "none",
          borderRadius: "25px",
          cursor: "pointer",
          fontSize: "1.2em",
          fontWeight: "bold",
          transition: "all 0.3s ease",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          outline: "none",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#2980b9")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#3498db")}
      >
        Close
      </button>
    </div>
  );
}
function App() {
  const [availableAnimations, setAvailableAnimations] = useState([]);
  const [currentAnimation, setCurrentAnimation] = useState("dance");
  const [showInfo, setShowInfo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.margin = null;
      document.body.style.padding = null;
      document.body.style.overflow = null;
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <audio ref={audioRef} src="/rolling.mp3" loop />
      <Canvas
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(to bottom, #87CEEB, #E0F6FF)",
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
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
          padding: "15px",
          borderRadius: "30px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          zIndex: 10,
        }}
      >
        {availableAnimations.map((anim) => (
          <button
            key={anim.original}
            onClick={() => setCurrentAnimation(anim.original)}
            style={{
              margin: "0 10px",
              padding: "12px 24px",
              fontSize: "18px",
              fontWeight: "bold",
              color: "white",
              backgroundColor:
                currentAnimation === anim.original ? "#4CAF50" : "#3498db",
              border: "none",
              borderRadius: "25px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              textTransform: "capitalize",
              boxShadow:
                currentAnimation === anim.original
                  ? "0 0 15px #4CAF50"
                  : "0 0 10px #3498db",
              outline: "none",
            }}
          >
            {anim.display}
          </button>
        ))}
        <button
          onClick={() => setShowInfo(true)}
          style={{
            margin: "0 10px",
            padding: "12px 24px",
            fontSize: "18px",
            fontWeight: "bold",
            color: "white",
            backgroundColor: "#f39c12",
            border: "none",
            borderRadius: "25px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 0 10px #f39c12",
            outline: "none",
          }}
        >
          ℹ️ Info
        </button>
        <button
          onClick={toggleAudio}
          style={{
            margin: "0 10px",
            padding: "12px 24px",
            fontSize: "18px",
            fontWeight: "bold",
            color: "white",
            backgroundColor: "#e74c3c",
            border: "none",
            borderRadius: "25px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 0 10px #e74c3c",
            outline: "none",
          }}
        >
          {isPlaying ? "🔈 Mute" : "🔊 Unmute"}
        </button>
      </div>
      {showInfo && <InfoCard onClose={() => setShowInfo(false)} />}
      <Loader />
    </div>
  );
}

export default App;