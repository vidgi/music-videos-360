import './App.css';

import { Suspense } from 'react'

import { Canvas } from "react-three-fiber";
import { Loader,FirstPersonControls,PointerLockControls, Html, OrbitControls, PerspectiveCamera } from "@react-three/drei";

function App() {
  const videos = [
    "https://www.youtube.com/embed/OFfiljkfmx8",
    "https://www.youtube.com/embed/0Szr5Dcwn4Y",
    "https://www.youtube.com/embed/sBXtJGLhSk8",
    "https://www.youtube.com/embed/Ysf6pcyeBsY",
    "https://www.youtube.com/embed/au6T5QEoZ4k",
    "https://www.youtube.com/embed/zuXOiV6U7tk",
    "https://www.youtube.com/embed/xUAgawZAi5g",
    "https://www.youtube.com/embed/coXTMUhWFmY",
    "https://www.youtube.com/embed/FzjOp-qIQOQ",
    "https://www.youtube.com/embed/AQ8-YXveL2o",
    "https://www.youtube.com/embed/YO2R3SxhPeA",
    "https://www.youtube.com/embed/lhfs1CzzUPM",
    "https://www.youtube.com/embed/_95Rt3uYf7M",
    "https://www.youtube.com/embed/Vu0nRz_bQ0Y",
    "https://www.youtube.com/embed/u24e43iW9KE",
    "https://www.youtube.com/embed/k3MD7TaCXLA",
    "https://www.youtube.com/embed/cQZDH4NWmaU",
    "https://www.youtube.com/embed/GQmgPnnf18Y",
    "https://www.youtube.com/embed/ZAn3JdtSrnY",
    "https://www.youtube.com/embed/q-XH92Wie0U",
    "https://www.youtube.com/embed/8EnSTG8G1t8",
    "https://www.youtube.com/embed/fYEAflCO4Eo",
    "https://www.youtube.com/embed/EIFlhzdILMc",
    "https://www.youtube.com/embed/BLmqr4iKpUs",
    "https://www.youtube.com/embed/TbJE-KVZvTA",
    "https://www.youtube.com/embed/53I6fcFXqxo",
    "https://www.youtube.com/embed/ncBPcx4RdbE",
    "https://www.youtube.com/embed/f9X1C7pTu-M",
    "https://www.youtube.com/embed/eVOWYeZm9v8",
    "https://www.youtube.com/embed/CrFcxR4Y6C0",
    "https://www.youtube.com/embed/_bhJzXTf6KE",
    "https://www.youtube.com/embed/tl9SRsPbWLM",
    "https://www.youtube.com/embed/OTHHeIAYfuU",
    "https://www.youtube.com/embed/BjC0KUxiMhc",
    "https://www.youtube.com/embed/GtBmZYqZZjU",
    "https://www.youtube.com/embed/nnYTNRADQQ4",
    "https://www.youtube.com/embed/EWcTp1r_Nls",
    "https://www.youtube.com/embed/-5Ae-LhMIG0",
    "https://www.youtube.com/embed/AcukstLwNPw",
    "https://www.youtube.com/embed/D5qUpJo_Gac",
    "https://www.youtube.com/embed/XDpoBc8t6gE",
    "https://www.youtube.com/embed/qRLReDmuIf8",
    "https://www.youtube.com/embed/BqnG_Ei35JE",
    "https://www.youtube.com/embed/6C5sB6AqJkM",
    "https://www.youtube.com/embed/XDN2wbm6zi8",
    "https://www.youtube.com/embed/wtZskz4zo24",
    "https://www.youtube.com/embed/sn3cHUtNZKo",
    "https://www.youtube.com/embed/cFElidiwxYU",
    "https://www.youtube.com/embed/-d3xu4sToI8",
    "https://www.youtube.com/embed/PPZZmfcLxFI",
    "https://www.youtube.com/embed/ATNJAYcIL04",
    "https://www.youtube.com/embed/VHqEXaOzxbA",
    "https://www.youtube.com/embed/LluBWyXztvQ",
    "https://www.youtube.com/embed/xUEg2mXJx0M",
    "https://www.youtube.com/embed/-Js_-DtskxM",
    "https://www.youtube.com/embed/t5p5uCgY-tY",
    "https://www.youtube.com/embed/hVyjLwKnOCk",
    "https://www.youtube.com/embed/uIjU0do0PqU",
    "https://www.youtube.com/embed/2KkMyDSrBVI",
    "https://www.youtube.com/embed/pIz2K3ArrWk",
  ]
  return (
    <div className="App">
       <Canvas style={{ height: "100vh", width: "100vw" }}>
       <Suspense fallback={null}>

        <group transform position={[20, 0, -20]}>

          <YouTubeEmbed position={[-5, -20, 51]} link = {videos[0]} rotation={[0 * (Math.PI / 180), -150 * (Math.PI / 180), 0]}/>
          <YouTubeEmbed position={[-5, -10, 51]} link = {videos[1]} rotation={[0 * (Math.PI / 180), -150 * (Math.PI / 180), 0]}/>
          <YouTubeEmbed position={[-5, 0, 51]} link = {videos[2]} rotation={[0 * (Math.PI / 180), -150 * (Math.PI / 180), 0]}/>
          <YouTubeEmbed position={[-5, 10, 51]} link = {videos[3]} rotation={[0 * (Math.PI / 180), -150 * (Math.PI / 180), 0]}/>
          <YouTubeEmbed position={[-5, 20, 51]} link = {videos[4]} rotation={[0 * (Math.PI / 180), -150 * (Math.PI / 180), 0]}/>

          <YouTubeEmbed position={[6, -20, 40]} link = {videos[5]} rotation={[0 * (Math.PI / 180), -120 * (Math.PI / 180), 0]}/>
          <YouTubeEmbed position={[6, -10, 40]} link = {videos[6]} rotation={[0 * (Math.PI / 180), -120 * (Math.PI / 180), 0]}/>
          <YouTubeEmbed position={[6, 0, 40]} link = {videos[7]} rotation={[0 * (Math.PI / 180), -120 * (Math.PI / 180), 0]}/>
          <YouTubeEmbed position={[6, 10, 40]} link = {videos[8]} rotation={[0 * (Math.PI / 180), -120 * (Math.PI / 180), 0]}/>
          <YouTubeEmbed position={[6, 20, 40]} link = {videos[9]} rotation={[0 * (Math.PI / 180), -120 * (Math.PI / 180), 0]}/>

          <YouTubeEmbed position={[10, -20, 25]} link = {videos[10]} rotation={[0 * (Math.PI / 180), -90 * (Math.PI / 180), 0]}/>
          <YouTubeEmbed position={[10, -10, 25]} link = {videos[11]} rotation={[0 * (Math.PI / 180), -90 * (Math.PI / 180), 0]}/>
          <YouTubeEmbed position={[10, 0, 25]} link = {videos[12]} rotation={[0 * (Math.PI / 180), -90 * (Math.PI / 180), 0]}/>
          <YouTubeEmbed position={[10, 10, 25]} link = {videos[13]} rotation={[0 * (Math.PI / 180), -90 * (Math.PI / 180), 0]}/>
          <YouTubeEmbed position={[10, 20, 25]} link = {videos[14]} rotation={[0 * (Math.PI / 180), -90 * (Math.PI / 180), 0]}/>

          <YouTubeEmbed position={[6, -20, 10]} link = {videos[15]} rotation={[0 * (Math.PI / 180), -60 * (Math.PI / 180), 0]}/>
          <YouTubeEmbed position={[6, -10, 10]} link = {videos[16]} rotation={[0 * (Math.PI / 180), -60 * (Math.PI / 180), 0]}/>
          <YouTubeEmbed position={[6, 0, 10]} link = {videos[17]} rotation={[0 * (Math.PI / 180), -60 * (Math.PI / 180), 0]}/>
          <YouTubeEmbed position={[6, 10, 10]} link = {videos[18]} rotation={[0 * (Math.PI / 180), -60 * (Math.PI / 180), 0]}/>
          <YouTubeEmbed position={[6, 20, 10]} link = {videos[19]} rotation={[0 * (Math.PI / 180), -60 * (Math.PI / 180), 0]}/>

          <YouTubeEmbed position={[-5, -20, -1]} link={videos[20]} rotation={[0 * (Math.PI / 180), - 30 * (Math.PI / 180), 0]}/>
          <YouTubeEmbed position={[-5, -10, -1]} link={videos[21]} rotation={[0 * (Math.PI / 180), - 30 * (Math.PI / 180), 0]}/>
          <YouTubeEmbed position={[-5, 0, -1]} link={videos[22]} rotation={[0 * (Math.PI / 180), - 30 * (Math.PI / 180), 0]}/>
          <YouTubeEmbed position={[-5, 10, -1]} link={videos[23]} rotation={[0 * (Math.PI / 180), - 30 * (Math.PI / 180), 0]}/>
          <YouTubeEmbed position={[-5, 20, -1]} link={videos[24]} rotation={[0 * (Math.PI / 180), - 30 * (Math.PI / 180), 0]}/>

          <YouTubeEmbed position={[-20, -20, -5]} link = {videos[25]} rotation={[0 * (Math.PI / 180), 0 * (Math.PI / 180), 0]}/>
          <YouTubeEmbed position={[-20, -10, -5]} link = {videos[26]} rotation={[0 * (Math.PI / 180), 0 * (Math.PI / 180), 0]}/>
          <YouTubeEmbed position={[-20, 0, -5]} link = {videos[27]} rotation={[0 * (Math.PI / 180), 0 * (Math.PI / 180), 0]}/>
          <YouTubeEmbed position={[-20, 10, -5]} link = {videos[28]} rotation={[0 * (Math.PI / 180), 0 * (Math.PI / 180), 0]}/>
          <YouTubeEmbed position={[-20, 20, -5]} link = {videos[29]} rotation={[0 * (Math.PI / 180), 0 * (Math.PI / 180), 0]}/>

          <YouTubeEmbed position={[-35, -20, -1]} link = {videos[30]} rotation={[0 * (Math.PI / 180), 30 * (Math.PI / 180), 0]}/>
          <YouTubeEmbed position={[-35, -10, -1]} link = {videos[31]} rotation={[0 * (Math.PI / 180), 30 * (Math.PI / 180), 0]}/>
          <YouTubeEmbed position={[-35, 0, -1]} link = {videos[32]} rotation={[0 * (Math.PI / 180), 30 * (Math.PI / 180), 0]}/>
          <YouTubeEmbed position={[-35, 10, -1]} link = {videos[33]} rotation={[0 * (Math.PI / 180), 30 * (Math.PI / 180), 0]}/>
          <YouTubeEmbed position={[-35, 20, -1]} link = {videos[34]} rotation={[0 * (Math.PI / 180), 30 * (Math.PI / 180), 0]}/>

          <YouTubeEmbed position={[-46, -20, 10]} link = {videos[35]} rotation={[0 * (Math.PI / 180), 60 * (Math.PI / 180), 0]}/>
          <YouTubeEmbed position={[-46, -10, 10]} link = {videos[36]} rotation={[0 * (Math.PI / 180), 60 * (Math.PI / 180), 0]}/>
          <YouTubeEmbed position={[-46, 0, 10]} link = {videos[37]} rotation={[0 * (Math.PI / 180), 60 * (Math.PI / 180), 0]}/>
          <YouTubeEmbed position={[-46, 10, 10]} link = {videos[38]} rotation={[0 * (Math.PI / 180), 60 * (Math.PI / 180), 0]}/>
          <YouTubeEmbed position={[-46, 20, 10]} link = {videos[39]} rotation={[0 * (Math.PI / 180), 60 * (Math.PI / 180), 0]}/>

          <YouTubeEmbed position={[-50, -20, 25]} link = {videos[40]} rotation={[0 * (Math.PI / 180), 90 * (Math.PI / 180), 0]}/>
          <YouTubeEmbed position={[-50, -10, 25]} link = {videos[41]} rotation={[0 * (Math.PI / 180), 90 * (Math.PI / 180), 0]}/>
          <YouTubeEmbed position={[-50, 0, 25]} link = {videos[42]} rotation={[0 * (Math.PI / 180), 90 * (Math.PI / 180), 0]}/>
          <YouTubeEmbed position={[-50, 10, 25]} link = {videos[43]} rotation={[0 * (Math.PI / 180), 90 * (Math.PI / 180), 0]}/>
          <YouTubeEmbed position={[-50, 20, 25]} link = {videos[44]} rotation={[0 * (Math.PI / 180), 90 * (Math.PI / 180), 0]}/>

          <YouTubeEmbed position={[-46, -20, 40]} link = {videos[45]} rotation={[0 * (Math.PI / 180), 120 * (Math.PI / 180), 0]}/>
          <YouTubeEmbed position={[-46, -10, 40]} link = {videos[46]} rotation={[0 * (Math.PI / 180), 120 * (Math.PI / 180), 0]}/>
          <YouTubeEmbed position={[-46, 0, 40]} link = {videos[47]} rotation={[0 * (Math.PI / 180), 120 * (Math.PI / 180), 0]}/>
          <YouTubeEmbed position={[-46, 10, 40]} link = {videos[48]} rotation={[0 * (Math.PI / 180), 120 * (Math.PI / 180), 0]}/>
          <YouTubeEmbed position={[-46, 20, 40]} link = {videos[49]} rotation={[0 * (Math.PI / 180), 120 * (Math.PI / 180), 0]}/>

          <YouTubeEmbed position={[-35, -20, 51]} link = {videos[50]} rotation={[0 * (Math.PI / 180), 150 * (Math.PI / 180), 0]}/>
          <YouTubeEmbed position={[-35, -10, 51]} link = {videos[51]} rotation={[0 * (Math.PI / 180), 150 * (Math.PI / 180), 0]}/>
          <YouTubeEmbed position={[-35, 0, 51]} link = {videos[52]} rotation={[0 * (Math.PI / 180), 150 * (Math.PI / 180), 0]}/>
          <YouTubeEmbed position={[-35, 10, 51]} link = {videos[53]} rotation={[0 * (Math.PI / 180), 150 * (Math.PI / 180), 0]}/>
          <YouTubeEmbed position={[-35, 20, 51]} link = {videos[54]} rotation={[0 * (Math.PI / 180), 150 * (Math.PI / 180), 0]}/>

          <YouTubeEmbed position={[-20, -20, 55]} link = {videos[55]} rotation={[0 * (Math.PI / 180), 180 * (Math.PI / 180), 0]}/>
          <YouTubeEmbed position={[-20, -10, 55]} link = {videos[56]} rotation={[0 * (Math.PI / 180), 180 * (Math.PI / 180), 0]}/>
          <YouTubeEmbed position={[-20, 0, 55]} link = {videos[57]} rotation={[0 * (Math.PI / 180), 180 * (Math.PI / 180), 0]}/>
          <YouTubeEmbed position={[-20, 10, 55]} link = {videos[58]} rotation={[0 * (Math.PI / 180), 180 * (Math.PI / 180), 0]}/>
          <YouTubeEmbed position={[-20, 20, 55]} link = {videos[59]} rotation={[0 * (Math.PI / 180), 180 * (Math.PI / 180), 0]}/>

        </group>
        </Suspense>
        <ambientLight />
        {/* <FirstPersonControls
          movementSpeed={0}
          lookSpeed= {0.02}
          /> */}
          <PointerLockControls/>
        {/* <OrbitControls 
         minDistance={20}
          maxDistance={20}
          autoRotate="false"
        // autoRotateSpeed={0.4}
          />
         <PerspectiveCamera position={[-20, 0, -20]} /> */}

      </Canvas>
      <Loader />

    </div>
  );
}

export default App;

function YouTubeEmbed(props) {
  return (
    <Html transform position={props.position} rotation={props.rotation}>
      {/* <p>{props.link}</p> */}
      <iframe width="560" height="315" src={props.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </Html>

    
  );
}