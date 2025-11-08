import React, { useState, useRef, useEffect } from "react";
import { HiPlay, HiPause, HiVolumeUp, HiVolumeOff } from "react-icons/hi";
import "./AudioPlayer.css";

/**
 * Reusable AudioPlayer Component
 *
 * @param {string} src - Audio source URL
 * @param {string} title - Audio title
 * @param {string} artist - Artist name
 * @param {boolean} autoplay - Autoplay audio
 * @param {string} className - Additional CSS classes
 */
export default function AudioPlayer({
  src,
  title = "Audio Track",
  artist = "Unknown Artist",
  autoplay = false,
  className = "",
  ...props
}) {
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener("loadedmetadata", () => {
        setDuration(audio.duration);
      });
      audio.addEventListener("timeupdate", () => {
        setCurrentTime(audio.currentTime);
      });
      audio.addEventListener("ended", () => {
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      setVolume(newVolume);
      setIsMuted(newVolume === 0);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className={`audio-player ${className}`} {...props}>
      <audio ref={audioRef} src={src} />
      <div className="audio-player-info">
        <div className="audio-player-title">{title}</div>
        <div className="audio-player-artist">{artist}</div>
      </div>
      <div className="audio-player-controls">
        <button className="audio-player-button" onClick={togglePlay}>
          {isPlaying ? <HiPause /> : <HiPlay />}
        </button>
        <div className="audio-player-progress">
          <span className="audio-player-time">{formatTime(currentTime)}</span>
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleSeek}
            className="audio-player-slider"
          />
          <span className="audio-player-time">{formatTime(duration)}</span>
        </div>
        <div className="audio-player-volume">
          <button className="audio-player-button" onClick={toggleMute}>
            {isMuted || volume === 0 ? <HiVolumeOff /> : <HiVolumeUp />}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="audio-player-volume-slider"
          />
        </div>
      </div>
    </div>
  );
}
