'use client';
import {useFrame} from '@react-three/fiber';
import {useMemo, useRef} from 'react';
import * as THREE from 'three';

type Props={day:boolean};
export default function SignalField({day}:Props){
  const points=useRef<THREE.Points>(null);
  const positions=useMemo(()=>{const a=new Float32Array(900);for(let i=0;i<300;i++){a[i*3]=(Math.random()-.5)*15;a[i*3+1]=(Math.random()-.5)*8;a[i*3+2]=-Math.random()*15+4}return a},[]);
  useFrame(({clock})=>{if(points.current)points.current.rotation.y=Math.sin(clock.elapsedTime*.06)*.08});
  return <points ref={points}><bufferGeometry><bufferAttribute attach="attributes-position" args={[positions,3]}/></bufferGeometry><pointsMaterial size={.025} color={day?'#576572':'#8bb8d8'} transparent opacity={day?.18:.42} depthWrite={false}/></points>;
}
