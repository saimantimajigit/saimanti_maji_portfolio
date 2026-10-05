'use client';
import {RoundedBox} from '@react-three/drei';
import * as THREE from 'three';
import {useFrame} from '@react-three/fiber';
import {useRef} from 'react';
const items=[['#55d7ff',1.0],['#ff7a66',.9],['#9f8cff',1.08],['#b9df72',.92],['#e5b563',1.02]] as const;
export default function ProjectMonoliths({day}:{day:boolean}){
  const group=useRef<THREE.Group>(null); useFrame(({clock})=>{if(group.current)group.current.position.y=Math.sin(clock.elapsedTime*.55)*.04-.2});
  return <group ref={group} position={[0,-.2,-5.3]}>
    {items.map(([color,scale],i)=>{const x=(i-2)*1.55;const z=Math.abs(i-2)*-.28;return <group key={color} position={[x,0,z]} rotation={[0,(i-2)*-.06,0]} scale={scale}>
      <RoundedBox args={[1.18,2.55,.42]} radius={.12} smoothness={4}><meshStandardMaterial color={day?'#d7dad6':'#10151e'} metalness={0.45} roughness={0.32}/></RoundedBox>
      <mesh position={[0,.36,.225]}><planeGeometry args={[.86,1.0]}/><meshBasicMaterial color={color} transparent opacity={day?.18:.32}/></mesh>
      <mesh position={[0,-.52,.23]}><boxGeometry args={[.62,.08,.02]}/><meshBasicMaterial color={day?'#202830':'#e9edef'} transparent opacity={0.88}/></mesh>
      <mesh position={[0,-.72,.23]}><boxGeometry args={[.40,.035,.02]}/><meshBasicMaterial color={color} transparent opacity={0.75}/></mesh>
    </group>})}
  </group>;
}
