'use client';
import {useFrame} from '@react-three/fiber';
import {RoundedBox} from '@react-three/drei';
import {useMemo, useRef} from 'react';
import * as THREE from 'three';

type Props={day:boolean};
export default function FlowCore({day}:Props){
  const group=useRef<THREE.Group>(null); const ringA=useRef<THREE.Mesh>(null); const ringB=useRef<THREE.Mesh>(null);
  const material=useMemo(()=>new THREE.MeshStandardMaterial({color:day?'#cfd5d4':'#111823',metalness:.62,roughness:.28}),[day]);
  const nodes=[[-1.1,-1.45,'#55d7ff'],[-.72,-1.45,'#55d7ff'],[-.34,-1.45,'#ff7a66'],[.04,-1.45,'#9f8cff'],[.42,-1.45,'#9f8cff'],[.80,-1.45,'#b9df72'],[1.18,-1.45,'#e5b563']] as const;
  useFrame(({clock},dt)=>{if(!group.current)return;group.current.rotation.y=THREE.MathUtils.damp(group.current.rotation.y,Math.sin(clock.elapsedTime*.28)*.16,2.8,dt);if(ringA.current)ringA.current.rotation.z+=dt*.18;if(ringB.current)ringB.current.rotation.x-=dt*.12;});
  return <group ref={group} position={[0,.2,0]}>
    <RoundedBox args={[3.1,2.1,.72]} radius={.18} smoothness={5} material={material}/>
    <mesh position={[0,0,.39]}><planeGeometry args={[2.55,1.58]}/><meshStandardMaterial color={day?'#f7f8f5':'#07141c'} emissive={day?'#9ddfff':'#21bde8'} emissiveIntensity={day ? 0.12 : 0.18} roughness={0.22}/></mesh>
    <mesh position={[-.72,.34,.405]}><boxGeometry args={[.78,.09,.03]}/><meshBasicMaterial color="#55d7ff"/></mesh>
    <mesh position={[-.34,.05,.405]}><boxGeometry args={[1.54,.25,.03]}/><meshBasicMaterial color={day?'#1b2026':'#edf4f5'}/></mesh>
    <mesh position={[-.57,-.27,.405]}><boxGeometry args={[1.08,.25,.03]}/><meshBasicMaterial color="#ff7a66"/></mesh>
    <mesh ref={ringA} rotation={[Math.PI/2,0,0]}><torusGeometry args={[2.05,.018,8,160]}/><meshBasicMaterial color="#55d7ff" transparent opacity={.65}/></mesh>
    <mesh ref={ringB} rotation={[0,Math.PI/2,0]}><torusGeometry args={[2.35,.012,8,160]}/><meshBasicMaterial color="#9f8cff" transparent opacity={.35}/></mesh>
    {nodes.map(([x,y,c],i)=><group key={i} position={[x,y,0]}><mesh><sphereGeometry args={[.055,16,16]}/><meshBasicMaterial color={c}/></mesh>{i<nodes.length-1&&<mesh position={[.19,0,0]}><boxGeometry args={[.28,.008,.008]}/><meshBasicMaterial color={c} transparent opacity={0.55}/></mesh>}</group>)}
  </group>;
}
