"use client";

import { useState } from "react";
import { Publication } from "@/data/publication";
import { PublicationEntry } from "@/components/publication-entry";

export function PublicationsSection({
  publications,
}: {
  publications: Publication[];
}) {
  const [showAll, setShowAll] = useState(false);

  const displayed = showAll
    ? publications
    : publications.filter((p) => p.selected);

  return (
    <section>
      <div className="flex items-center justify-between mb-12">
        <h2 className="font-serif text-l tracking-wide uppercase">
          Publications
        </h2>
        <div className="flex gap-2">
          {(["Show selected", "Show by date"] as const).map((label) => {
            const active = label === "Show by date" ? showAll : !showAll;
            return (
              <button
                key={label}
                onClick={() => setShowAll(label === "Show by date")}
                className={`px-3 py-1 text-xs tracking-wider uppercase transition-colors duration-200 rounded-md border ${
                  active
                    ? "bg-zinc-800 text-white border-zinc-800"
                    : "text-zinc-400 border-zinc-300 hover:text-zinc-700 hover:border-zinc-500"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
      <p className="text-xs text-zinc-500 mb-2">
        Name spelling: &quot;Zhi-Hao Lin&quot; → &quot;Chih-Hao Lin&quot; (since 2025)
      </p>
      <p className="text-xs text-zinc-500 mb-8">
        * Equal Contribution &nbsp;&nbsp; † Equal Advising
      </p>
      <div className="space-y-12">
        {displayed.map((publication, index) => (
          <div key={publication.title}>
            <PublicationEntry publication={publication} />
            {index < displayed.length - 1 && (
              <div className="h-px bg-zinc-200 my-8" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
