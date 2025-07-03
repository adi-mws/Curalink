import React, { useState } from 'react';
import './VideoChat.css';

export default function VideoChat() {
  const [micOn, setMicOn] = useState(true);
  const [cameraOn, setCameraOn] = useState(true);

  return (
    <div className="video-chat-container">
      <div className="video-section">
        <div className="video-display">
          {cameraOn ? (
            <video autoPlay muted className="video-element" />
          ) : (
            <div className="camera-off">Camera Off</div>
          )}
        </div>
        <div className="controls">
          <button onClick={() => setMicOn(!micOn)} className={micOn ? 'active' : ''}>
            {micOn ? '🎤 Mic On' : '🔇 Mic Off'}
          </button>
          <button onClick={() => setCameraOn(!cameraOn)} className={cameraOn ? 'active' : ''}>
            {cameraOn ? '📷 Camera On' : '📷 Off'}
          </button>
          <button className="end-call">❌ End Call</button>
        </div>
      </div>

      <div className="chat-section">
        <h3>Live Chat</h3>
        <div className="messages">
          {/* Messages will go here */}
        </div>
        <input type="text" placeholder="Type your message..." className="chat-input" />
      </div>
    </div>
  );
}
