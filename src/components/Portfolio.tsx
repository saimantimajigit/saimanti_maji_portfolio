'use client';

import {useEffect, useState} from 'react';
import dynamic from 'next/dynamic';
import Navigation from './layout/Navigation';
import OverlayContent from './sections/OverlayContent';

const ExperienceCanvas = dynamic(() => import('@/experience/ExperienceCanvas'), {ssr:false});

export default function Portfolio(){
  const [day,setDay]=useState(false);
  useEffect(()=>{ document.documentElement.dataset.mood=day?'day':'night'; },[day]);
  return <>
    <Navigation day={day} onToggle={()=>setDay(v=>!v)}/>
    <ExperienceCanvas day={day}/>
    <OverlayContent/>
  </>;
}
