/**
 * Documentation:
 * Refer to COMPONENT_DOCUMENTATION.md
 * Section: ## AudioPlayer
 */

import React, { useState, useRef, useEffect } from "react";
import { HiPlay, HiPause, HiVolumeUp, HiVolumeOff } from "react-icons/hi";
import "./AudioPlayer.css";

/**
 * Reusable AudioPlayer Component
 *
 * @param {string} src - Audio source URL
 * @param {string} title - Audio title
 * @param {string} artist - Artist name
 * @param {string} cover - Cover image URL
 * @param {boolean} autoplay - Autoplay audio
 * @param {string} className - Additional CSS classes
 */
export default function AudioPlayer({
  src,
  title = "Audio Track",
  artist = "Unknown Artist",
  cover,
  autoplay = false,
  className = "",
  ...props
}) {
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [buffered, setBuffered] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleLoadedData = () => {
      setIsLoading(false);
      setDuration(audio.duration);
    };
    const handleWaiting = () => setIsLoading(true);
    const handleCanPlay = () => setIsLoading(false);
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };
    const updateBuffered = () => {
      if (audio.buffered.length > 0) {
        const bufferedEnd = audio.buffered.end(audio.buffered.length - 1);
        setBuffered((bufferedEnd / audio.duration) * 100);
      }
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("loadeddata", handleLoadedData);
    audio.addEventListener("waiting", handleWaiting);
    audio.addEventListener("canplay", handleCanPlay);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("progress", updateBuffered);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("loadeddata", handleLoadedData);
      audio.removeEventListener("waiting", handleWaiting);
      audio.removeEventListener("canplay", handleCanPlay);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("progress", updateBuffered);
    };
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
    if (isNaN(time) || !isFinite(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className={`audio-player ${className} ${isPlaying ? "playing" : ""}`}
        {...props}
      >
      <audio ref={audioRef} src={src} autoPlay={autoplay} />
      
      {/* Animated background gradient */}
      <div className="audio-player-background" />
      
      <div className="audio-player-content">
        {cover && (
          <div className="audio-player-cover">
            <div className="audio-player-cover-wrapper">
              <img src={cover} alt={`${title} cover`} />
              {isPlaying && (
                <>
                  <div className="audio-player-cover-overlay" />
                  <div className="audio-player-cover-rings">
                    <div className="audio-player-ring ring-1" />
                    <div className="audio-player-ring ring-2" />
                    <div className="audio-player-ring ring-3" />
                  </div>
                </>
              )}
            </div>
            {isPlaying && (
              <div className="audio-player-equalizer">
                <div className="audio-player-bar" />
                <div className="audio-player-bar" />
                <div className="audio-player-bar" />
                <div className="audio-player-bar" />
              </div>
            )}
          </div>
        )}

        <div className="audio-player-info">
          <div className="audio-player-title">{title}</div>
          <div className="audio-player-artist">{artist}</div>
          {isPlaying && (
            <div className="audio-player-status">
              <span className="audio-player-status-dot" />
              <span>Now Playing</span>
            </div>
          )}
        </div>

        <div className="audio-player-main-controls">
          <button
            className="audio-player-play-button"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause" : "Play"}
            disabled={isLoading}
          >
            <div className="audio-player-play-button-bg" />
            {isLoading ? (
              <div className="audio-player-spinner" />
            ) : isPlaying ? (
              <HiPause />
            ) : (
              <HiPlay />
            )}
          </button>

          <div className="audio-player-progress-container">
            <div className="audio-player-progress-wrapper">
              <div className="audio-player-progress-track" />
              <div
                className="audio-player-progress-buffer"
                style={{ width: `${buffered}%` }}
              />
              <div
                className="audio-player-progress-filled"
                style={{ width: `${progressPercentage}%` }}
              >
                <div className="audio-player-progress-thumb" />
              </div>
              <input
                type="range"
                min="0"
                max={duration || 0}
                step="0.1"
                value={currentTime}
                onChange={handleSeek}
                className="audio-player-slider"
                aria-label="Seek"
              />
            </div>
            <div className="audio-player-time-container">
              <span className="audio-player-time">{formatTime(currentTime)}</span>
              <span className="audio-player-time-separator">/</span>
              <span className="audio-player-time">{formatTime(duration)}</span>
            </div>
          </div>
        </div>

        <div className="audio-player-volume-container">
          <button
            className="audio-player-volume-button"
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted || volume === 0 ? <HiVolumeOff /> : <HiVolumeUp />}
          </button>
          <div className="audio-player-volume-wrapper">
            <div
              className="audio-player-volume-fill"
              style={{ width: `${volume * 100}%` }}
            />
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="audio-player-volume-slider"
              aria-label="Volume"
            />
          </div>
        </div>
      </div>
      </div>);
}
