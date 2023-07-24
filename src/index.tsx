import * as React from 'react';
import { useState } from 'react'; 
import { createRoot } from 'react-dom/client';
import './style.css';

const navLinks = [
  {
    id: 1,
    title: "Resources",
    path: "./resources"
  },
  {
    id: 2,
    title: "Discussion",
    path: "./discussion"
  },
  {
    id: 3,
    title: "Contribute",
    path: "./contribute"
  }
];

const myLinks = navLinks.map((lnk)=><li className="navLink" key={lnk.id}>{lnk.title}</li>)

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

function SingularityBar() {
  const [clicked, setClicked] = useState(false);
  return (
    <div className={clicked?"navClicked":"navUnclicked"}>
      <h1 id="navLogo"> Singularity </h1>
      <ul className={clicked?"navListClicked":"navListUnclicked"}>
        {myLinks}
      </ul>
      <p id="navButton" onClick={()=>setClicked(!clicked)}> {clicked?"x":"+"} </p>
    </div>
  );
};

root.render(
    <div>
      <SingularityBar />
    </div>
);