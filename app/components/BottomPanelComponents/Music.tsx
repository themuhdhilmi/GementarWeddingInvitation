"use client";
import React, { useEffect, useRef, useState } from "react";
import YouTube from "react-youtube";

const Music = (props: any) => {
  const [player, setPlayer] = useState<any>(null);
  const [playing, setPlaying] = useState<any>(false);
  const playerRef = useRef(null);

  const [isAlreadyPlay, setIsAlreadyPlay] = useState(false);

  const onReady = (event: any) => {
    setPlayer(event.target);
  };

  const onStateChange = (event: any) => {
    const { data } = event;
    // Check if the video is playing
    // if (data === window.YT.PlayerState.PLAYING) {
    //   setPlaying(true);
    // } else {
    //   setPlaying(false);
    // }
  };

  useEffect(() => {
    // Add event listener to document for click events
    document.addEventListener("click", handleClick);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [player, isAlreadyPlay]);

  const handleClick = () => {
    if (player && !playing) {
      if (!isAlreadyPlay) {
        player.playVideo(); // Play video only if it's not already playing
        setIsAlreadyPlay(true);
      }
    }
  };

  return (
    <div>
      <YouTube
        videoId={"kI3dsd3czC4"}
        opts={{ width: "320", height: "130" }}
        onReady={onReady}
        onStateChange={onStateChange}
        ref={playerRef}
      />
    </div>
  );
};

export default Music;
