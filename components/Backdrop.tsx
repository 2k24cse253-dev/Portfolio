import Image from "next/image";

type Props = {
  src: string;
  alt?: string;
  /** Tailwind classes for the darkening / color-matched overlay */
  overlay?: string;
  className?: string;
  /** object-position style for the photo */
  position?: string;
  quality?: number;
};

const defaultOverlay =
  "bg-[linear-gradient(180deg,rgba(10,7,8,0.92)_0%,rgba(10,7,8,0.78)_45%,rgba(10,7,8,0.94)_100%)]";

export default function Backdrop({
  src,
  alt = "",
  overlay = defaultOverlay,
  className = "",
  position = "center",
  quality = 75,
}: Props) {
  return (
    <div
      aria-hidden={!alt}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        quality={quality}
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: position }}
      />
      <div className={`absolute inset-0 ${overlay}`} />
      <div className="absolute inset-0 bg-rose/8 mix-blend-soft-light" />
    </div>
  );
}
