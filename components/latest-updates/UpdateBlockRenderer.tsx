import React from "react";
import { ContentBlock } from "@/lib/latestUpdates";
import { ArrowRightIcon } from "../common/Icons";

export function getUpdateCoverImage(update: { coverImage?: string; category?: string }): string {
  if (update.coverImage && update.coverImage.trim() !== "") {
    return update.coverImage.trim();
  }
  return getUpdateFallbackImage(update);
}

export function getUpdateFallbackImage(update: { category?: string }): string {
  const cat = (update.category || "").toLowerCase();
  if (cat.includes("webinar")) {
    return "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80";
  }
  if (cat.includes("workshop")) {
    return "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80";
  }
  if (cat.includes("conference")) {
    return "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80";
  }
  return "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80";
}

export default function UpdateBlockRenderer({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "heading": {
      if (block.level === 3) {
        return (
          <h3 className="text-xl sm:text-2xl font-serif text-[#1E231C] mt-8 mb-3 font-normal">
            {block.text}
          </h3>
        );
      }
      return (
        <h2 className="text-2xl sm:text-3xl font-serif text-[#1E231C] mt-10 mb-4 font-normal">
          {block.text}
        </h2>
      );
    }

    case "paragraph": {
      return (
        <p className="text-sm sm:text-base text-[#3A4335] leading-relaxed mb-5 font-normal">
          {block.text}
        </p>
      );
    }

    case "list": {
      return (
        <ul className="my-6 space-y-2.5 pl-2">
          {block.items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-[#3A4335]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#414D3C] mt-2.5 shrink-0" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      );
    }

    case "quote": {
      return (
        <blockquote className="my-8 p-6 rounded-2xl bg-[#EFE9DF] border-l-4 border-[#414D3C] text-base sm:text-lg font-serif italic text-[#2A3326] leading-relaxed">
          {block.text}
          {block.author && (
            <span className="block mt-2 not-italic font-sans text-xs text-[#5C6556] font-semibold">
              — {block.author}
            </span>
          )}
        </blockquote>
      );
    }

    case "image": {
      return (
        <figure className="my-8">
          <div className="rounded-2xl overflow-hidden bg-[#EAE6DF] border border-[#E2DDD4]">
            <img src={block.src} alt={block.alt} className="w-full h-auto object-cover" />
          </div>
          {block.caption && (
            <figcaption className="text-xs text-center text-[#687262] mt-2 italic">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    }

    case "video": {
      return (
        <div className="my-8 rounded-2xl overflow-hidden aspect-video bg-black/90">
          <iframe
            src={block.url}
            title="Video content"
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      );
    }

    case "button": {
      return (
        <div className="my-4">
          <a
            href={block.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white bg-[#414D3C] hover:bg-[#323D2E] transition-all"
          >
            <span>{block.label}</span>
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </a>
        </div>
      );
    }

    case "link": {
      return (
        <p className="my-3">
          <a
            href={block.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#414D3C] underline hover:text-[#283224] transition-colors group"
          >
            <span>{block.label}</span>
            <ArrowRightIcon className="w-3.5 h-3.5 no-underline shrink-0" />
          </a>
        </p>
      );
    }

    default:
      return null;
  }
}
