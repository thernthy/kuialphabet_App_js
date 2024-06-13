import { useEffect, useState } from "react";
const AudioPlayer = ({ audioFile }) => {
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audio) {
      if (isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }, [isPlaying, audio]);
  

  const togglePlayPause = () => {
    setIsPlaying((prevState) => !prevState);
  };


  return (
      <div className="audio-instance flex items-center space-x-2">
        {audioFile ? (
          <>
            <audio controls  className="max-w-52">
              <source src={audioFile} type="audio/mp3" />
              Your browser does not support the audio tag.
            </audio>
            {/* <button onClick={togglePlayPause}>
              {isPlaying ? "Pause" : "Play"}
            </button> */}
          </>
        ) : (
          <p>No audio file selected</p>
        )}
      </div>
  );
};

export default AudioPlayer;
