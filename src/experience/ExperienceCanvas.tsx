'use client';
import {Canvas} from '@react-three/fiber';
import {AdaptiveDpr, PerformanceMonitor} from '@react-three/drei';
import {EffectComposer, Bloom, Vignette} from '@react-three/postprocessing';
import {useState} from 'react';
import CameraRig from './camera/CameraRig';
import FlowCore from './scenes/FlowCore';
import SignalField from './scenes/SignalField';
import ProjectMonoliths from './scenes/ProjectMonoliths';

type Props={day:boolean};
export default function ExperienceCanvas({day}:Props){
  const [effects,setEffects]=useState(true);
  return <div className="webgl-layer" aria-hidden="true">
    <Canvas dpr={[1,1.6]} camera={{position:[0,1.2,8],fov:42}} gl={{antialias:true,alpha:true,powerPreference:'high-performance'}}>
      <PerformanceMonitor onDecline={()=>setEffects(false)}/><AdaptiveDpr pixelated/>
      <color attach="background" args={[day?'#e8e8e2':'#07090e']}/>
      <fog attach="fog" args={[day?'#e8e8e2':'#07090e',9,25]}/>
      <ambientLight intensity={day?1.25:.45}/>
      <directionalLight position={[4,8,5]} intensity={day?2.1:1.1} color={day?'#fff5e6':'#b7d8ff'}/>
      <pointLight position={[-4,1,2]} intensity={day?1.1:2.4} color="#55d7ff" distance={12}/>
      <pointLight position={[4,-1,1]} intensity={day?.8:1.8} color="#ff7a66" distance={10}/>
      <CameraRig/>
      <FlowCore day={day}/><SignalField day={day}/><ProjectMonoliths day={day}/>
      {effects && <EffectComposer multisampling={0}><Bloom intensity={day?.15:.55} luminanceThreshold={day?.8:.35} mipmapBlur/><Vignette eskil={false} offset={.18} darkness={day?.12:.5}/></EffectComposer>}
    </Canvas>
  </div>;
}
