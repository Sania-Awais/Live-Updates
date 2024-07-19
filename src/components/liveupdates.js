import React from 'react';
import '.././liveupdates.css';

const LiveUpdates = () => {
  return (
    <div className="live-updates-container">
      <div className="live-updates-title">LIVE UPDATES</div>
      <div className="updates">
        <div className="update">
          <div className="match-title">Final - 30th Azlan Shah Hockey Cup</div>
          <div className="teams">
            <div className="team">
              <span className="team-flag">🇵🇰</span>
              <span className="team-name">PAK</span>
              <span className="team-score">1</span>
            </div>
            <div className="team">
              <span className="team-flag">🔴</span>
              <span className="team-name">JPN</span>
              <span className="team-score">4</span>
            </div>
          </div>
          <div className="result">Japan won by penalty shootouts</div>
          <div className="links">
            <a href="#">POINTS TABLE</a>
            <a href="#">SCHEDULE</a>
          </div>
        </div>
        <div className="update">
          <div className="match-title">3rd Match - Pakistan Premier League</div>
          <div className="teams">
            <div className="team">
              <span className="team-flag">🇵🇰</span>
              <span className="team-name">PAK ARMY</span>
              <span className="team-score">2</span>
            </div>
            <div className="team">
              <span className="team-flag">🌐</span>
              <span className="team-name">WAPDA</span>
              <span className="team-score">1</span>
            </div>
          </div>
          <div className="result">Pakistan Army won</div>
          <div className="links">
            <a href="#">POINTS TABLE</a>
            <a href="#">SCHEDULE</a>
          </div>
        </div>
        <div className="update">
          <div className="match-title">Final - World Championship of Legends 2024</div>
          <div className="teams">
            <div className="team">
              <span className="team-flag">🇵🇰</span>
              <span className="team-name">PAK</span>
            </div>
            <div className="team">
              <span className="team-flag">❓</span>
              <span className="team-name">TBA</span>
            </div>
          </div>
          <div className="time">Saturday, 13 Jul, 9:00 PM</div>
          <div className="links">
            <a href="#">POINTS TABLE</a>
            <a href="#">SCHEDULE</a>
          </div>
        </div>
        <div className="update">
          <div className="match-title">3rd T20I - India tour of Zimbabwe, 2024</div>
          <div className="teams">
            <div className="team">
              <span className="team-flag">🇮🇳</span>
              <span className="team-name">IND</span>
              <span className="team-score">182-4 (20)</span>
            </div>
            <div className="team">
              <span className="team-flag">🇿🇼</span>
              <span className="team-name">ZIM</span>
              <span className="team-score">159-6</span>
            </div>
          </div>
          <div className="result">India won by 23 runs</div>
          <div className="links">
            <a href="#">FANTASY HANDBOOK</a>
            <a href="#">SCHEDULE</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveUpdates;
