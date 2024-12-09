import React, { useState } from "react";
import "./CharList.css"; 

const CharList = ({ characters }) => {
  const [expandedIndex, setExpandedIndex] = useState(null); // Tıklanan kartı izlemek için state

  const handleCardClick = (index) => {
    // Eğer tıklanan kart zaten açıksa, kapat, değilse aç
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <div className="container">
      {/* Karakter kartları */}
      <div className="card-container">
        {characters.map((character, index) => (
          <div
            key={character.id}
            className={`card ${expandedIndex === index ? "expanded" : ""}`}
            onClick={() => handleCardClick(index)}
          >
            <div className="card-header">
              <img
                src={character.image}
                alt={character.name}
                className="character-image"
              />
              <h5>{character.name}</h5>
            </div>

            {expandedIndex === index && (
              <div className="card-info">
                <p>
                  <strong>Species:</strong> {character.species}
                </p>
                <p>
                  <strong>Status:</strong> {character.status}
                </p>
                <p>
                  <strong>Gender:</strong> {character.gender}
                </p>
                <p>
                  <strong>Location:</strong> {character.location.name}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharList;
