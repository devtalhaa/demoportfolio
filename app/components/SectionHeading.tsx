import { ReactNode } from "react";

type SectionHeadingProps = {
  kicker?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  kicker,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div
      className={`space-y-4 ${isCenter ? "text-center mx-auto max-w-3xl" : "text-left"}`}
    >
      {kicker ? (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--light-green)]">
          {kicker}
        </p>
      ) : null}
      <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
      {description ? (
        <p className="text-base md:text-lg text-slate-300">{description}</p>
      ) : null}
    </div>
  );
}

