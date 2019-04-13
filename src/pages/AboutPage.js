import React from 'react';
import Info from '../components/AboutPage/info';
import Main from '../components/main';
import ImgBcg from '../images/aboutBcg.jpeg'
export default function About() {
  return (
    <div>
      <Main img = {ImgBcg} />
      <Info/>
    </div>
  )
}

