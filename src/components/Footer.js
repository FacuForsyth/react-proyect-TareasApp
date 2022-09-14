import React from "react";
import "../styles/footer.css"

export default function Footer() {

  return(
    <div className="footer">
      <h3>Facundo Ramirez Forsyth</h3>
      <h4>Full Stack Developer</h4>
      <div className="redes">
        <a href="https://www.linkedin.com/in/facuramirez/" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank" alt="" /></a>
        <a href="https://github.com/FacuForsyth" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/-GitHub-05122A?style=flat&logo=github" target="_blank" alt="" /></a>
      </div>
    </div>
  )
}