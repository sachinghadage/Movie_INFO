import React from 'react';
import './CastList.css';

function CastList({ cast }) {
  return (
    <div className="cast-list">
      {cast.length > 0 ? (
        <div className="cast-grid">
          {cast.map((member) => (
            <div key={member.id} className="cast-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${member.profile_path}`}
                alt={member.name}
                className="cast-photo"
              />
              <p className="cast-name">{member.name}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No cast information available.</p>
      )}
    </div>
  );
}

export default CastList;
