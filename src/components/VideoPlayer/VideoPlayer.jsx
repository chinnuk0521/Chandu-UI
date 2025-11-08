import React, { useState, useRef } from "react";
import { HiPlay, HiPause, HiVolumeUp, HiVolumeOff } from "react-icons/hi";
import "./VideoPlayer.css";

/**
 * Reusable VideoPlayer Component
 *
 * @param {string} src - Video source URL
 * @param {string} poster - Poster image URL
 * @param {boolean} controls - Show controls
 * @param {boolean} autoplay - Autoplay video
 * @param {string} className - Additional CSS classes
 */
export default function VideoPlayer({
  src,
  poster,
  controls = true,
  autoplay = false,
  className = "",
  ...props
}) {
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
      setIsMuted(newVolume === 0);
    }
  };

  return (
    <div className={`video-player ${className}`} {...props}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="video-player-video"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      {controls && (
        <div className="video-player-controls">
          <button className="video-player-button" onClick={togglePlay}>
            {isPlaying ? <HiPause /> : <HiPlay />}
          </button>
          <div className="video-player-volume">
            <button className="video-player-button" onClick={toggleMute}>
              {isMuted || volume === 0 ? <HiVolumeOff /> : <HiVolumeUp />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="video-player-volume-slider"
            />
          </div>
        </div>
      )}
    </div>
  );
}
