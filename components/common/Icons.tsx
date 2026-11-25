"use client";

import React, { useRef, useEffect, forwardRef, useImperativeHandle } from "react";
import {
  ChevronDown,
  Search,
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  ArrowDown,
  ArrowUpRight as PulsoArrowUpRight,
  Mouse,
  GraduationCap,
  BookOpen,
  Users,
  Rocket,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Globe,
  Play,
  Sparkle,
  BrandLinkedin,
  BrandX,
  BrandYoutube,
  BrandInstagram,
  Menu,
  Heart,
  X as PulsoClose,
  Compass,
} from "pulsoicon-react";

// Re-export all standard pulsoicon-react components for direct imports
export * from "pulsoicon-react";

/**
 * Higher-order animated icon wrapper that:
 * 1. Forwards refs so imperative triggers (startAnimation, stopAnimation) work.
 * 2. Optionally triggers a smooth entrance animation on mount / view (animateOnMount, defaults to true).
 * 3. Preserves pulsoicon-react's native pointerenter/focus auto-animations on hover/tap.
 * 4. Passes all className, strokeWidth, size, color and other props directly.
 */
function createAnimatedIcon(
  Component: React.ComponentType<any>,
  defaultProps: Record<string, any> = {}
) {
  const Icon = forwardRef(function AnimatedIcon(
    {
      className,
      animateOnMount = true,
      play,
      ...props
    }: {
      className?: string;
      animateOnMount?: boolean;
      play?: boolean;
      [key: string]: any;
    },
    ref: any
  ) {
    const innerRef = useRef<{ startAnimation: () => void; stopAnimation: () => void } | null>(null);

    useImperativeHandle(ref, () => ({
      startAnimation: () => innerRef.current?.startAnimation(),
      stopAnimation: () => innerRef.current?.stopAnimation(),
    }));

    useEffect(() => {
      if (animateOnMount) {
        // Trigger subtle entrance play on mount
        const timer = setTimeout(() => {
          innerRef.current?.startAnimation();
        }, 150);
        return () => clearTimeout(timer);
      }
    }, [animateOnMount]);

    return (
      <Component
        ref={innerRef}
        className={className}
        play={play}
        {...defaultProps}
        {...props}
      />
    );
  });

  Icon.displayName = `Animated(${Component.displayName || Component.name || "Icon"})`;
  return Icon;
}

/**
 * CaretDownIcon
 * Outline dropdown caret with animated arrow motion from pulsoicon-react
 */
export const CaretDownIcon = createAnimatedIcon(ChevronDown, {
  className: "w-3 h-3",
  strokeWidth: 2.5,
});

/**
 * SearchIcon
 * Outline search magnifying glass with animated focus motion from pulsoicon-react
 */
export const SearchIcon = createAnimatedIcon(Search, {
  className: "w-4 h-4",
  strokeWidth: 2,
});

/**
 * ArrowRightIcon
 * Outline horizontal right arrow with directional translation motion from pulsoicon-react
 */
export const ArrowRightIcon = createAnimatedIcon(ArrowRight, {
  className: "w-4 h-4",
  strokeWidth: 2,
});

/**
 * ArrowLeftIcon
 * Outline horizontal left arrow with directional translation motion from pulsoicon-react
 */
export const ArrowLeftIcon = createAnimatedIcon(ArrowLeft, {
  className: "w-4 h-4",
  strokeWidth: 2,
});

/**
 * ArrowUpIcon
 * Outline vertical up arrow with directional translation motion from pulsoicon-react
 */
export const ArrowUpIcon = createAnimatedIcon(ArrowUp, {
  className: "w-4 h-4",
  strokeWidth: 2,
});

/**
 * ArrowDownIcon
 * Outline vertical down arrow with directional translation motion from pulsoicon-react
 */
export const ArrowDownIcon = createAnimatedIcon(ArrowDown, {
  className: "w-4 h-4",
  strokeWidth: 2,
});

/**
 * ArrowUpRight / ArrowUpRightIcon
 * Outline diagonal top-right arrow with animated impulse motion from pulsoicon-react
 */
export const ArrowUpRight = createAnimatedIcon(PulsoArrowUpRight, {
  className: "w-4 h-4",
  strokeWidth: 2,
});

export const ArrowUpRightIcon = ArrowUpRight;

/**
 * MouseScrollIcon
 * Outline computer mouse with animated scroll wheel motion from pulsoicon-react
 */
export const MouseScrollIcon = createAnimatedIcon(Mouse, {
  className: "w-4 h-6",
  strokeWidth: 1.8,
});

/**
 * GradCapIcon
 * Outline graduation cap with animated tassel motion from pulsoicon-react
 */
export const GradCapIcon = createAnimatedIcon(GraduationCap, {
  className: "w-5 h-5",
  strokeWidth: 2,
});

/**
 * BookOpenIcon
 * Outline open book with animated page-turn motion from pulsoicon-react
 */
export const BookOpenIcon = createAnimatedIcon(BookOpen, {
  className: "w-5 h-5",
  strokeWidth: 2,
});

/**
 * CommunityIcon
 * Outline people/users group with animated presence motion from pulsoicon-react
 */
export const CommunityIcon = createAnimatedIcon(Users, {
  className: "w-5 h-5",
  strokeWidth: 2,
});

/**
 * RocketIcon
 * Outline rocket with animated launch motion from pulsoicon-react
 */
export const RocketIcon = createAnimatedIcon(Rocket, {
  className: "w-5 h-5",
  strokeWidth: 2,
});

/**
 * CalendarIcon
 * Outline calendar with animated date/leaf motion from pulsoicon-react
 */
export const CalendarIcon = createAnimatedIcon(Calendar, {
  className: "w-4 h-4",
  strokeWidth: 2,
});

/**
 * MapPinIcon
 * Outline map location pin with animated drop/bounce motion from pulsoicon-react
 */
export const MapPinIcon = createAnimatedIcon(MapPin, {
  className: "w-4 h-4",
  strokeWidth: 2,
});

/**
 * MailIcon
 * Outline email envelope with animated open/fold motion from pulsoicon-react
 */
export const MailIcon = createAnimatedIcon(Mail, {
  className: "w-4 h-4",
  strokeWidth: 2,
});

/**
 * PhoneIcon
 * Outline telephone handset with animated ring/vibration motion from pulsoicon-react
 */
export const PhoneIcon = createAnimatedIcon(Phone, {
  className: "w-4 h-4",
  strokeWidth: 2,
});

/**
 * GlobeIcon
 * Outline wireframe earth globe with animated spin/rotation motion from pulsoicon-react
 */
export const GlobeIcon = createAnimatedIcon(Globe, {
  className: "w-6 h-6",
  strokeWidth: 1.8,
});

/**
 * PlayIcon
 * Solid play triangle with animated click/pulse motion from pulsoicon-react
 */
export const PlayIcon = createAnimatedIcon(Play, {
  className: "w-3.5 h-3.5",
  solid: true,
});

/**
 * SparkleIcon
 * Solid 4-point sparkle with animated twinkle motion from pulsoicon-react
 */
export const SparkleIcon = createAnimatedIcon(Sparkle, {
  className: "w-4 h-4",
  solid: true,
});

/**
 * CompassIcon
 * Outline compass with animated directional needle rotation motion from pulsoicon-react
 */
export const CompassIcon = createAnimatedIcon(Compass, {
  className: "w-5 h-5",
  strokeWidth: 1.8,
});

/**
 * LinkedInIcon
 * Brand LinkedIn emblem with animated hover motion from pulsoicon-react
 */
export const LinkedInIcon = createAnimatedIcon(BrandLinkedin, {
  className: "w-4 h-4",
});

/**
 * XIcon
 * Brand X (formerly Twitter) social glyph with animated motion from pulsoicon-react
 */
export const XIcon = createAnimatedIcon(BrandX, {
  className: "w-4 h-4",
});

/**
 * YouTubeIcon
 * Brand YouTube player glyph with animated motion from pulsoicon-react
 */
export const YouTubeIcon = createAnimatedIcon(BrandYoutube, {
  className: "w-4 h-4",
});

/**
 * InstagramIcon
 * Brand Instagram camera glyph with animated motion from pulsoicon-react
 */
export const InstagramIcon = createAnimatedIcon(BrandInstagram, {
  className: "w-4 h-4",
});

/**
 * MenuIcon
 * Outline 3-line hamburger menu with animated morph motion from pulsoicon-react
 */
export const MenuIcon = createAnimatedIcon(Menu, {
  className: "w-6 h-6",
  strokeWidth: 2,
});

/**
 * HeartHandIcon
 * Outline heart glyph with animated heartbeat/pulse motion from pulsoicon-react
 */
export const HeartHandIcon = createAnimatedIcon(Heart, {
  className: "w-5 h-5",
  strokeWidth: 1.8,
});

/**
 * CloseIcon
 * Outline X cross with animated rotation/dismiss motion from pulsoicon-react
 */
export const CloseIcon = createAnimatedIcon(PulsoClose, {
  className: "w-6 h-6",
  strokeWidth: 2,
});

/**
 * LeafLogoIcon
 * The Boston Pledge 4-leaf proprietary emblem.
 * Retained as official brand trademark SVG fallback to preserve the 4-founder organic leaf identity.
 */
export function LeafLogoIcon({
  className = "w-8 h-8",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 28C6 28 12 26 18 20C24 14 26 8 26 8C26 8 20 10 14 16C8 22 6 28 6 28Z"
        fill="#3F4D3A"
      />
      <path
        d="M11 33C11 33 18 31 24 24C30 17 32 11 32 11C32 11 26 13 20 20C14 27 11 33 11 33Z"
        fill="#55664F"
      />
      <path
        d="M17 37C17 37 24 35 29 29C34 23 36 17 36 17C36 17 31 19 25 25C19 31 17 37 17 37Z"
        fill="#6E8166"
      />
      <path
        d="M2 22C2 22 7 20 12 15C17 10 19 5 19 5C19 5 14 7 9 12C4 17 2 22 2 22Z"
        fill="#2B3627"
      />
    </svg>
  );
}
