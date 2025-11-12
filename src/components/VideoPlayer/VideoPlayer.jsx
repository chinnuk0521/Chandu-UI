import React, { useState, useRef, useEffect } from "react";
import {
  HiPlay,
  HiPause,
  HiVolumeUp,
  HiVolumeOff,
  HiArrowsExpand,
  HiX,
} from "react-icons/hi";
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
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const controlsTimeoutRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration);
    const handleLoadedData = () => {
      setIsLoading(false);
      setDuration(video.duration);
    };
    const handleWaiting = () => setIsLoading(true);
    const handleCanPlay = () => setIsLoading(false);

    video.addEventListener("timeupdate", updateTime);
    video.addEventListener("loadedmetadata", updateDuration);
    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("waiting", handleWaiting);
    video.addEventListener("canplay", handleCanPlay);

    return () => {
      video.removeEventListener("timeupdate", updateTime);
      video.removeEventListener("loadedmetadata", updateDuration);
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("waiting", handleWaiting);
      video.removeEventListener("canplay", handleCanPlay);
    };
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

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

  const handleProgressChange = (e) => {
    const newTime = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch((err) => {
        console.error("Error attempting to enable fullscreen:", err);
      });
    } else {
      document.exitFullscreen();
    }
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };

  const handleMouseLeave = () => {
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    if (isPlaying) {
      setShowControls(false);
    }
  };

  useEffect(() => {
    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`video-player ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <div className="video-player-wrapper">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          className="video-player-video"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onClick={togglePlay}
        />
        {isLoading && (
          <div className="video-player-loading">
            <div className="video-player-spinner"></div>
          </div>
        )}
      </div>
      {controls && (
        <div
          className={`video-player-controls ${showControls || !isPlaying ? "visible" : ""}`}
        >
          <div className="video-player-progress-container">
            <div
              className="video-player-progress-buffer"
              style={{
                width: videoRef.current
                  ? `${(videoRef.current.buffered.length > 0
                      ? videoRef.current.buffered.end(0) / duration
                      : 0) * 100}%`
                  : "0%",
              }}
            />
            <div
              className="video-player-progress-filled"
              style={{
                width: duration ? `${(currentTime / duration) * 100}%` : "0%",
              }}
            />
            <input
              type="range"
              min="0"
              max={duration || 0}
              step="0.1"
              value={currentTime}
              onChange={handleProgressChange}
              className="video-player-progress"
            />
          </div>

          <div className="video-player-controls-bottom">
            <div className="video-player-controls-left">
              <button
                className="video-player-button"
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <HiPause /> : <HiPlay />}
              </button>

              <div className="video-player-volume">
                <button
                  className="video-player-button video-player-button-small"
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted || volume === 0 ? <HiVolumeOff /> : <HiVolumeUp />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="video-player-volume-slider"
                  aria-label="Volume"
                />
              </div>

              <div className="video-player-time">
                <span>{formatTime(currentTime)}</span>
                <span className="video-player-time-separator">/</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            <div className="video-player-controls-right">
              <button
                className="video-player-button video-player-button-small"
                onClick={toggleFullscreen}
                aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
              >
                {isFullscreen ? <HiX /> : <HiArrowsExpand />}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
