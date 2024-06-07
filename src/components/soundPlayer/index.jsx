import React, { useState, useRef, useEffect } from 'react';
import { Howl, Howler } from 'howler';
import Sound from '../../assets/sound/downfall-3-208028.mp3'
export const SoundPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);
  const soundRef = useRef(null);

  useEffect(() => {
    const sound = new Howl({
      src: [Sound],
      onload: () => {
        setDuration(sound.duration());
      },
      onplay: () => {
        setPlaying(true);
      },
      onend: () => {
        setPlaying(false);
        setPosition(0);
      },
      onpause: () => setPlaying(false),
      onstop: () => {
        setPlaying(false);
        setPosition(0);
      },
      onseek: () => {
        setPosition(sound.seek());
      },
    });
    soundRef.current = sound;

    return () => {
      soundRef.current.unload();
    };
  }, []);

  const handlePlay = () => {
    soundRef.current.play();
  };

  const handlePause = () => {
    soundRef.current.pause();
  };

  const handleStop = () => {
    soundRef.current.stop();
  };

  const handleSeek = (e) => {
    const newPosition = parseInt(e.target.value, 10);
    soundRef.current.seek(newPosition);
    setPosition(newPosition);
  };

  return (
    <div className="sound-player">
      <input
        type="range"
        min={0}
        max={duration}
        value={position}
        onChange={handleSeek}
        disabled={!playing}
        className="w-full mt-4"
      />
      <div className="controls mt-2 flex justify-center space-x-4">
        <button onClick={handlePlay} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Play
        </button>
        <button onClick={handlePause} className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
          Pause
        </button>
        <button onClick={handleStop} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Stop
        </button>
      </div>
    </div>
  );
};
