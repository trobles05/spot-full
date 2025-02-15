import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { songsArray } from "../assets/database/songs";

const SingleItem = ({ id, name, image, banner, artist }) => {
  return (
    <div className="single-item">
      <div className="single-item__div-image-button">
        <div className="single-item__div-image">
          <img
            src={image}
            alt={`Imagem do ${name}`}
            className="single-item__image"
          />
        </div>
        <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
      </div>
      <div className="single-item__text">
        <div className="single-item__2lines">
          <p className="single-item__title">{name}</p>
        </div>
        <p className="singçe-item__type">{artist ?? "Artista"}</p>
      </div>
    </div>
  );
};

export default SingleItem;
