"use client";

import { useState } from "react";
import { HOW_TO_PLAY_VIDEO_ID } from "@/lib/site";

// Shows a play tile; the YouTube player only loads once the visitor asks for it.
export function VideoTile() {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="relative aspect-video min-w-0 flex-[2_1_480px] overflow-hidden rounded-[28px] bg-ink">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${HOW_TO_PLAY_VIDEO_ID}?autoplay=1`}
          title="How to Play Bananarchy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="bg-rings flex min-h-[clamp(240px,26vw,360px)] min-w-0 flex-[2_1_480px] cursor-pointer flex-col justify-between gap-6 rounded-[28px] p-7 text-left text-ink [--rings-x:78%] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
    >
      <span className="self-start rounded-full bg-ink px-[15px] py-[9px] text-sm leading-tight font-semibold text-banana">
        Skip the rulebook
      </span>
      <span className="flex flex-wrap items-center gap-x-6 gap-y-[18px]">
        <span
          aria-hidden="true"
          className="flex size-[84px] flex-none items-center justify-center rounded-full bg-ink"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="#ffffff"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinejoin="round"
          >
            <path d="M7 4.5v15l12-7.5z" />
          </svg>
        </span>
        <span className="flex flex-col gap-1">
          <span className="font-display text-[clamp(32px,3.4vw,46px)] leading-none font-black">
            Watch the 2-minute video
          </span>
          <span className="font-medium">Then play the game.</span>
        </span>
      </span>
    </button>
  );
}
