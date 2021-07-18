import React from "react";
import "./web.css";
function Web() {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#projects">
          <i class="fi-rr-edit-alt option-icon"></i>Projetos
        </a>
      </div>
      <div className="web-option">
        <a href="#skills">
          <i class="fi-rr-laptop option-icon"></i>Habilidades
        </a>
      </div>
      <div className="web-option">
        <a href="#work">
          <i class="fi-rr-briefcase option-icon"></i>Trabalhos
        </a>
      </div>
      <div className="web-option">
        <a href="#contact">
          <i class="fi-rr-user option-icon"></i>Contato
        </a>
      </div>
    </div>
  );
}

export default Web;
