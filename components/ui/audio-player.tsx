"use client";

import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";

interface Track {
  title: string;
  client: string;
  src: string;
  cover?: string;
  tags?: string[];
}

interface AudioPlayerProps {
  tracks: Track[];
}

export function AudioPlayer({ tracks }: AudioPlayerProps) {
  const [currentTrack, setCurrentTrack] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlayPause = (index: number) => {
    if (currentTrack === index && isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      if (currentTrack !== index) {
        setCurrentTrack(index);
        if (audioRef.current) {
          audioRef.current.src = tracks[index].src;
        }
      }
      audioRef.current?.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="space-y-4">
      <audio 
        ref={audioRef} 
        onEnded={() => setIsPlaying(false)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      />
      
      {tracks.map((track, index) => (
        <div 
          key={index} 
          className={`flex items-center gap-4 p-4 rounded-xl border transition ${
            currentTrack === index 
              ? 'border-teal-400 bg-teal-400/10' 
              : 'border-white/10 bg-black/40 hover:bg-white/5'
          }`}
        >
          {track.cover && (
            <img 
              src={track.cover} 
              alt={track.title} 
              className="w-16 h-16 rounded-lg object-cover"
            />
          )}
          
          <div className="flex-1">
            <h4 className="font-semibold text-gray-200">{track.title}</h4>
            <p className="text-sm text-gray-400">{track.client}</p>
            {track.tags && track.tags.length > 0 && (
              <div className="flex gap-2 mt-2">
                {track.tags.map((tag, i) => (
                  <span key={i} className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-400">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          
          <button
            onClick={() => handlePlayPause(index)}
            className="p-3 rounded-full bg-gradient-to-r from-pink-600 via-teal-500 to-yellow-400 hover:opacity-90 transition"
            aria-label={isPlaying && currentTrack === index ? "Pause" : "Play"}
          >
            {isPlaying && currentTrack === index ? (
              <Pause className="h-5 w-5 text-black" />
            ) : (
              <Play className="h-5 w-5 text-black" />
            )}
          </button>
        </div>
      ))}
    </div>
  );
}