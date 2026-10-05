type Props={day:boolean;onToggle:()=>void};
export default function Navigation({day,onToggle}:Props){
  return <header className="nav-shell">
    <a className="brand" href="#intro" aria-label="Saimanti Maji home"><span>SM</span><i/></a>
    <nav aria-label="Primary navigation">
      <a href="#work">Work</a><a href="#experience">Experience</a><a href="#stack">Stack</a><a href="#contact">Contact</a>
    </nav>
    <button className="mood-toggle" onClick={onToggle} aria-label={`Switch to ${day?'night':'day'} environment`}><span/><b>{day?'DAY':'NIGHT'}</b></button>
  </header>;
}
