import type {CSSProperties} from 'react';
import {profile,projects,skills} from '@/data/portfolio';

export default function OverlayContent(){
  return <main className="story">
    <section className="scene scene-intro" id="intro">
      <div className="scene-copy hero-copy">
        <p className="eyebrow"><span>01</span> FULL-STACK SOFTWARE DEVELOPER</p>
        <h1>SAIMANTI<br/><strong>MAJI</strong></h1>
        <p className="lede">Building software that moves real operations forward: healthcare, warehouse, logistics and retail.</p>
        <div className="hero-facts"><span>NEARLY 4 YEARS</span><span>KOLKATA, INDIA</span><span>BACKEND-FIRST / FULL-STACK</span></div>
      </div>
      <div className="scroll-note" aria-hidden="true"><span>SCROLL TO TRACE THE FLOW</span><i/></div>
    </section>

    <section className="scene scene-flow" id="flow">
      <div className="scene-copy flow-copy">
        <p className="eyebrow"><span>02</span> SYSTEM FLOW</p>
        <h2>FROM<br/>INTERFACE TO<br/><strong>OPERATION.</strong></h2>
        <p>She works across the chain: Angular interfaces, Node and FastAPI services, queues, workers, Redis, and SQL or MongoDB data layers.</p>
      </div>
      <div className="flow-caption"><span>REQUEST / EVENT / DATA</span><b>LIVE PIPELINE</b></div>
    </section>

    <section className="scene scene-work" id="work">
      <div className="work-heading scene-copy">
        <p className="eyebrow"><span>03</span> SELECTED SYSTEMS</p>
        <h2>SOFTWARE FOR<br/><strong>REAL WORKFLOWS.</strong></h2>
      </div>
      <div className="project-list">
        {projects.map(p=><article className={`project-row ${p.tone}`} key={p.title}>
          <span className="project-index">{p.index}</span><div><p>{p.kicker}</p><h3>{p.title}</h3><small>{p.stack}</small></div><p className="project-description">{p.description}</p><span className="project-arrow">↗</span>
        </article>)}
      </div>
    </section>

    <section className="scene scene-experience" id="experience">
      <div className="scene-copy experience-copy">
        <p className="eyebrow"><span>04</span> EXPERIENCE</p>
        <h2>BUILD.<br/>OBSERVE.<br/><strong>SUPPORT.</strong></h2>
      </div>
      <div className="experience-card">
        <p className="experience-date">DEC 2022 — PRESENT</p>
        <h3>Software Developer</h3>
        <h4>Sastasundar Ventures Limited · Kolkata</h4>
        <div className="experience-grid">
          <p><b>WAREHOUSE</b>GRN putaway, bulk rack putaway, universal hold and rack transfer modules.</p>
          <p><b>ASYNC</b>RabbitMQ consumers, Celery tasks and Redis-backed notification workflows.</p>
          <p><b>API</b>REST services in Node.js/Express and FastAPI with internal and third-party integrations.</p>
          <p><b>PRODUCTION</b>Debugging across APIs, SQL, Docker, Redis, RabbitMQ and Node services.</p>
        </div>
      </div>
    </section>

    <section className="scene scene-stack" id="stack">
      <div className="scene-copy stack-copy"><p className="eyebrow"><span>05</span> TOOLKIT</p><h2>A STACK BUILT<br/>AROUND THE<br/><strong>PROBLEM.</strong></h2></div>
      <div className="skill-grid">{skills.map((skill,i)=><span key={skill} style={{'--i':i} as CSSProperties}>{skill}</span>)}</div>
    </section>

    <section className="scene scene-contact" id="contact">
      <div className="contact-copy">
        <p className="eyebrow"><span>06</span> OPEN CHANNEL</p>
        <h2>LET'S BUILD<br/>THE NEXT<br/><strong>WORKFLOW.</strong></h2>
        <p>{profile.summary}</p>
      </div>
      <div className="contact-links">
        <a className="primary-link" href={`mailto:${profile.email}`}>START A CONVERSATION <span>↗</span></a>
        <a href={profile.github} target="_blank" rel="noreferrer">GITHUB <span>↗</span></a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">LINKEDIN <span>↗</span></a>
        <small>B.Tech · College of Engineering and Management · CGPA 8.6/10</small>
      </div>
    </section>
  </main>;
}
