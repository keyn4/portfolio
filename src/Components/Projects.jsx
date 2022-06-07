import React from "react";
import s from "./Projects.module.css";

export default function Projects() {
  return (
    <div className={`${s.ProjectsDiv}`}>
      <div className={`${s.projectDiv1}`}>
        <div className={`${s.projectInfo}`}>
          <h3 className={`${s.projectTitle}`}>
            PokeDex &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://github.com/keyn4/pokedex/tree/master">
              <img
                src="https://img.icons8.com/doodle/48/undefined/github--v1.png"
                alt="Repositorio de Github"
              />
            </a>
          </h3>
          <p className={`${s.projectDes}`}>
            Single Page Application with retro style inspired in the "Pokemon fire Red".
            Search the pokemon name and obtain its information, you can also create your own pokemon, filter them by type, origin, order them by strength, or name.
            First individual project.
          </p>
        </div>
        <div className={`${s.container}`}>
          <iframe
            className={`${s.responsiveIframe}`}
            src="https://www.youtube.com/embed/a3uIXfXFY7w"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div className={`${s.projectDiv2}`}>
        <div className={`${s.projectInfo}`}>
          <h3 className={`${s.projectTitle}`}>
            Cindie &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://github.com/keyn4/PG-IndieCine">
              <img
                src="https://img.icons8.com/doodle/48/undefined/github--v1.png"
                alt="Repositorio de Github"
              />
            </a>
          </h3>
          <p className={`${s.projectDes}`}>
            Cindie is a Latinoamerican Independent Cine stream platform, for independent
            artists and producers to showcase their
            filmography. As a user access to the content with a free membership, as a
            content creator access to a fremium membership, and upgrade your
            plan to have more storage to upload and show all your projects, you can also display your public profile with your own information and receive donations from the public.
            Made with React, Node Js, Auth 0, Admin Js, and more.
          </p>
        </div>
        <div className={`${s.container}`}>
        <iframe className={`${s.responsiveIframe}`} src="https://www.youtube.com/embed/VIeKmKBpYAg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  );
}
