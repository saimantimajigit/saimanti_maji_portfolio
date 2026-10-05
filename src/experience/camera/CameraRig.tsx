'use client';
import {useFrame, useThree} from '@react-three/fiber';
import * as THREE from 'three';
import {useEffect, useMemo, useRef} from 'react';

const clamp=(n:number,a=0,b=1)=>Math.min(b,Math.max(a,n));
export default function CameraRig(){
  const {camera,pointer}=useThree();
  const progress=useRef(0); const target=useRef(0);
  const curve=useMemo(()=>new THREE.CatmullRomCurve3([
    new THREE.Vector3(0,1.2,8), new THREE.Vector3(-.6,1.05,5.2), new THREE.Vector3(.25,.4,2.5),
    new THREE.Vector3(2.7,.2,.8), new THREE.Vector3(.9,.65,-2.3), new THREE.Vector3(-2.8,1,-4.8), new THREE.Vector3(0,1.7,-7.5)
  ],false,'catmullrom',.32),[]);
  const lookCurve=useMemo(()=>new THREE.CatmullRomCurve3([
    new THREE.Vector3(0,.4,0), new THREE.Vector3(0,.35,-.4), new THREE.Vector3(.6,.1,-1.5),
    new THREE.Vector3(1.2,.4,-3), new THREE.Vector3(0,.3,-5), new THREE.Vector3(-.6,.7,-6.5), new THREE.Vector3(0,1,-9)
  ],false,'catmullrom',.3),[]);
  useEffect(()=>{const onScroll=()=>{const max=document.documentElement.scrollHeight-innerHeight;target.current=max?scrollY/max:0};onScroll();addEventListener('scroll',onScroll,{passive:true});return()=>removeEventListener('scroll',onScroll)},[]);
  useFrame((_,dt)=>{
    progress.current=THREE.MathUtils.damp(progress.current,target.current,4.2,dt);
    const t=clamp(progress.current);
    const pos=curve.getPointAt(t); const look=lookCurve.getPointAt(t);
    pos.x+=pointer.x*.08; pos.y+=pointer.y*.05;
    camera.position.lerp(pos,1-Math.exp(-dt*8)); camera.lookAt(look);
    if(camera instanceof THREE.PerspectiveCamera){
      camera.fov=THREE.MathUtils.damp(camera.fov,THREE.MathUtils.lerp(42,34,Math.sin(t*Math.PI)*.65),4,dt);
      camera.updateProjectionMatrix();
    }
  });
  return null;
}
