import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Pillar, PillarIconName, pillars } from "@/lib/Initiatives";
import {
  GradCapIcon,
  BookOpenIcon,
  CommunityIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  GlobeIcon,
  RocketIcon,
} from "../common/Icons";
import ScrollReveal from "../common/ScrollReveal";

function PillarBadgeIcon({
  name,
  className = "w-4 h-4",
}: {
  name: PillarIconName;
  className?: string;
}) {
  switch (name) {
    case "globe":
      return <GlobeIcon className={className} />;
    case "grad-cap":
      return <GradCapIcon className={className} />;
    case "book-open":
      return <BookOpenIcon className={className} />;
    case "rocket":
      return <RocketIcon className={className} />;
    case "community":
      return <CommunityIcon className={className} />;
    default:
      return <GlobeIcon className={className} />;
  }
}

export default function InitiativeDetail({ pillar }: { pillar: Pillar }) {
  const currentIndex = pillars.findIndex((p) => p.id === pillar.id);
  const prevPillar = currentIndex > 0 ? pillars[currentIndex - 1] : null;
  const nextPillar =
    currentIndex < pillars.length - 1 ? pillars[currentIndex + 1] : null;
  const otherPillars = pillars.filter((p) => p.id !== pillar.id);

  return (
    <article className="py-6 sm:py-8 lg:py-10 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs text-[#7A8475] mb-2.5 sm:mb-4">
          <Link href="/" className="hover:text-[#414D3C] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href="/initiatives"
            className="hover:text-[#414D3C] transition-colors"
          >
            Initiatives
          </Link>
          <span>/</span>
          <span className="text-[#1E231C] font-medium truncate max-w-xs">
            {pillar.title}
          </span>
        </nav>

        {/* Header Metadata */}
        <header className="mb-8 sm:mb-10">
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-4">
            <span className="inline-block text-[11px] font-bold text-[#414D3C] px-3 py-1 rounded-full bg-[#EFE9DF] border border-[#DCD5C9]">
              PILLAR {pillar.number}
            </span>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E2DDD3] text-[#414D3C] text-[11px] font-medium shadow-2xs">
              <PillarBadgeIcon name={pillar.icon} className="w-3.5 h-3.5" />
              <span>{pillar.badge}</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-[44px] font-serif font-normal text-[#1E231C] leading-[1.18] tracking-tight mb-4 break-words">
            {pillar.title}
          </h1>

          <p className="text-base sm:text-lg text-[#3E4639] font-serif font-medium leading-relaxed mb-4">
            {pillar.tagline}
          </p>

          <p className="text-sm sm:text-base text-[#565E50] leading-relaxed border-l-2 border-[#A3AEA0] pl-4">
            {pillar.desc}
          </p>
        </header>

        {/* Cover Photo */}
        <div className="w-full h-[260px] sm:h-[380px] lg:h-[460px] rounded-2xl sm:rounded-3xl overflow-hidden relative bg-[#EAE6DF] mb-10 border border-[#E2DDD4] shadow-xs">
          <Image
            src={pillar.image}
            alt={pillar.title}
            fill
            sizes="(max-width: 1024px) 100vw, 900px"
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Content Body */}
        <div className="space-y-10 sm:space-y-12 text-[#242D21]">
          {/* Key Pillars Highlights */}
          {pillar.bullets && pillar.bullets.length > 0 && (
            <div className="bg-white rounded-2xl p-5 sm:p-7 border border-[#ECE7DF] shadow-2xs">
              <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-[#5A6455] mb-4">
                Core Focus Areas
              </h2>
              <div className="space-y-3">
                {pillar.bullets.map((bullet, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 text-xs sm:text-sm text-[#3E4639] leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#414D3C] shrink-0 mt-2" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Detailed Overview */}
          {pillar.details?.overview && (
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-serif font-normal text-[#1E231C]">
                Initiative Overview
              </h2>
              <p className="text-sm sm:text-base text-[#4E5748] leading-relaxed">
                {pillar.details.overview}
              </p>
            </section>
          )}

          {/* Goal Callout */}
          {pillar.details?.goal && (
            <div className="bg-[#F4EFE6] rounded-2xl p-5 sm:p-6 border border-[#E5DFD4]">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#414D3C] block mb-1.5">
                Strategic Goal
              </span>
              <p className="text-sm sm:text-base text-[#2E372B] leading-relaxed font-serif">
                {pillar.details.goal}
              </p>
            </div>
          )}

          {/* Detailed Highlights */}
          {pillar.details?.highlights && pillar.details.highlights.length > 0 && (
            <section className="space-y-4">
              <h3 className="text-lg sm:text-xl font-serif font-normal text-[#1E231C]">
                Key Objectives & Outcomes
              </h3>
              <div className="space-y-2.5">
                {pillar.details.highlights.map((h, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 text-xs sm:text-sm text-[#4E5748] leading-relaxed bg-white rounded-xl p-3.5 border border-[#ECE7DF]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5A6455] shrink-0 mt-2" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Process / Steps (e.g. for ESP) */}
          {pillar.details?.process && pillar.details.process.length > 0 && (
            <section className="space-y-5">
              <h3 className="text-lg sm:text-xl font-serif font-normal text-[#1E231C]">
                Implementation Framework
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {pillar.details.process.map((step, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-5 border border-[#ECE7DF] shadow-2xs flex flex-col"
                  >
                    <div className="text-xs font-bold text-[#414D3C] uppercase tracking-wider mb-2">
                      Step {idx + 1}: {step.step}
                    </div>
                    <p className="text-xs text-[#5D6558] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Core Beliefs (e.g. for ESP) */}
          {pillar.details?.coreBeliefs && (
            <section className="bg-white rounded-2xl p-5 sm:p-7 border border-[#ECE7DF] space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-[#5A6455]">
                Core Beliefs
              </h3>
              <div className="space-y-2">
                {pillar.details.coreBeliefs.map((belief, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 text-xs sm:text-sm text-[#3E4639]"
                  >
                    <span className="text-[#414D3C] font-serif font-bold">
                      “
                    </span>
                    <span className="italic">{belief}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Internship Opportunity (e.g. for Digital) */}
          {pillar.details?.internship && (
            <div className="bg-[#F0EBE1] rounded-2xl p-5 sm:p-7 border border-[#E0D9CD]">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#414D3C] block mb-2">
                Student Opportunities
              </span>
              <h3 className="text-lg sm:text-xl font-serif font-semibold text-[#1E231C] mb-2.5">
                {pillar.details.internship.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#4E5748] leading-relaxed mb-4">
                {pillar.details.internship.description}
              </p>
              {pillar.details.internship.applyUrl && (
                <a
                  href={pillar.details.internship.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#414D3C] hover:bg-[#323D2E] transition-all shadow-xs"
                >
                  <span>Apply for Internship</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          )}

          {/* Field Report (e.g. for Youth) */}
          {pillar.details?.fieldReport && (
            <section className="bg-white rounded-2xl p-5 sm:p-7 border border-[#ECE7DF] space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#ECE7DF] pb-3">
                <h3 className="text-base sm:text-lg font-serif font-semibold text-[#1E231C]">
                  Field Report
                </h3>
                <span className="text-xs text-[#6B7565]">
                  By {pillar.details.fieldReport.author} (
                  {pillar.details.fieldReport.role})
                </span>
              </div>
              <div className="space-y-4 pt-1">
                {pillar.details.fieldReport.highlights.map((h, idx) => (
                  <div key={idx} className="space-y-1">
                    <h4 className="text-xs sm:text-sm font-semibold text-[#414D3C]">
                      {h.location}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#5D6558] leading-relaxed">
                      {h.summary}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Case Study (e.g. for Rural Innovation) */}
          {pillar.details?.caseStudy && (
            <div className="bg-white rounded-2xl p-5 sm:p-7 border border-[#ECE7DF]">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#5A6455] block mb-2">
                Case Study
              </span>
              <h3 className="text-lg sm:text-xl font-serif font-semibold text-[#1E231C] mb-2.5">
                {pillar.details.caseStudy.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#4E5748] leading-relaxed">
                {pillar.details.caseStudy.summary}
              </p>
            </div>
          )}

          {/* Ways to Contribute */}
          {pillar.details?.waysToContribute &&
            pillar.details.waysToContribute.length > 0 && (
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-serif font-normal text-[#1E231C]">
                  Ways to Contribute
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {pillar.details.waysToContribute.map((way, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl p-5 border border-[#ECE7DF]"
                    >
                      <h4 className="text-xs sm:text-sm font-semibold text-[#1E231C] mb-1.5">
                        {way.title}
                      </h4>
                      <p className="text-xs text-[#5D6558] leading-relaxed">
                        {way.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

          {/* Video Embed (e.g. for EdSP) */}
          {pillar.details?.videoEmbedUrl && (
            <section className="space-y-3">
              <h3 className="text-lg sm:text-xl font-serif font-normal text-[#1E231C]">
                Featured Video
              </h3>
              <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-xs border border-[#E2DDD4]">
                <iframe
                  src={pillar.details.videoEmbedUrl}
                  title={`${pillar.title} Video`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </section>
          )}

          {/* Resources & Links */}
          {pillar.details?.resources && pillar.details.resources.length > 0 && (
            <section className="bg-white rounded-2xl p-5 sm:p-7 border border-[#ECE7DF] space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-[#5A6455]">
                Downloads &amp; Resources
              </h3>
              <div className="space-y-2">
                {pillar.details.resources.map((res, idx) => (
                  <a
                    key={idx}
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-[#FAF8F5] hover:bg-[#F3EDE3] transition-colors border border-[#ECE7DF] text-xs sm:text-sm text-[#414D3C] font-medium"
                  >
                    <span>{res.label}</span>
                    <ArrowRightIcon className="w-3.5 h-3.5 shrink-0" />
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* Leadership & Mentors */}
          {(pillar.details?.mentors ||
            pillar.details?.mentor ||
            pillar.details?.programLead ||
            pillar.details?.volunteers) && (
            <div className="bg-white rounded-2xl p-5 sm:p-7 border border-[#ECE7DF] space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-[#5A6455]">
                Initiative Leadership &amp; Mentorship
              </h3>
              <div className="flex flex-wrap gap-2 text-xs text-[#3E4639]">
                {pillar.details.mentor && (
                  <span className="px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#DDD7CD]">
                    <strong>Mentor:</strong> {pillar.details.mentor}
                  </span>
                )}
                {pillar.details.programLead && (
                  <span className="px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#DDD7CD]">
                    <strong>Program Lead:</strong> {pillar.details.programLead}
                  </span>
                )}
                {pillar.details.mentors?.map((m, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#DDD7CD]"
                  >
                    {m}
                  </span>
                ))}
                {pillar.details.volunteers?.map((v, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#DDD7CD]"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Gallery */}
          {pillar.details?.gallery && pillar.details.gallery.length > 0 && (
            <section className="space-y-4">
              <h3 className="text-lg sm:text-xl font-serif font-normal text-[#1E231C]">
                Photo Archive
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {pillar.details.gallery.map((item, idx) => (
                  <div
                    key={idx}
                    className="space-y-1.5"
                  >
                    <div className="relative h-36 sm:h-44 rounded-xl overflow-hidden bg-[#EAE6DF] border border-[#E2DDD4]">
                      <Image
                        src={item.src}
                        alt={item.caption || `${pillar.title} photo ${idx + 1}`}
                        fill
                        sizes="(max-width: 640px) 50vw, 33vw"
                        className="object-cover object-center hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    {item.caption && (
                      <p className="text-[10px] text-[#6B7565] truncate px-1">
                        {item.caption}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Footer CTAs and Other Pillars Navigation */}
        <ScrollReveal>
          <div className="mt-12 sm:mt-16 pt-8 border-t border-[#E5DFD4] space-y-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link
                href="/initiatives"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#414D3C] hover:text-[#1E231C] transition-colors"
              >
                <ArrowLeftIcon className="w-3.5 h-3.5" />
                <span>Back to All Initiatives</span>
              </Link>

              <Link
                href="/donate"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white bg-[#414D3C] hover:bg-[#323D2E] transition-all shadow-xs hover:shadow"
              >
                <span>Support This Initiative</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Prev / Next Navigation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#ECE7DF]">
              {prevPillar ? (
                <Link
                  href={`/initiatives/${prevPillar.id}`}
                  className="p-4 rounded-xl bg-white border border-[#ECE7DF] hover:border-[#414D3C] transition-colors flex items-center gap-3 text-left group"
                >
                  <ArrowLeftIcon className="w-4 h-4 text-[#5A6455] group-hover:-translate-x-1 transition-transform" />
                  <div>
                    <div className="text-[10px] uppercase font-bold text-[#7A8475]">
                      Previous Initiative
                    </div>
                    <div className="text-xs font-semibold text-[#1E231C]">
                      {prevPillar.title}
                    </div>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {nextPillar ? (
                <Link
                  href={`/initiatives/${nextPillar.id}`}
                  className="p-4 rounded-xl bg-white border border-[#ECE7DF] hover:border-[#414D3C] transition-colors flex items-center justify-between text-right group sm:col-start-2"
                >
                  <div>
                    <div className="text-[10px] uppercase font-bold text-[#7A8475]">
                      Next Initiative
                    </div>
                    <div className="text-xs font-semibold text-[#1E231C]">
                      {nextPillar.title}
                    </div>
                  </div>
                  <ArrowRightIcon className="w-4 h-4 text-[#5A6455] group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : null}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </article>
  );
}
