import { profile } from "@/data/content";

export default function StatusBar() {
  return (
    <footer className="border-t border-white/10 bg-ink-2/80">
      <div className="container-page flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-rose text-sm font-bold text-white">
            V
          </span>
          <div>
            <p className="text-sm font-semibold text-cream">{profile.name}</p>
            <p className="text-[11px] tracking-[0.16em] text-muted uppercase">
              {profile.roles.join(" · ")}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
          <a href={`mailto:${profile.email}`} className="transition hover:text-cream">
            Email
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-cream"
          >
            LinkedIn
          </a>
          <a
            href={profile.behance}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-cream"
          >
            Behance
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="transition hover:text-cream">
            Phone
          </a>
        </div>
        <p className="text-[11px] tracking-[0.14em] text-muted/70 uppercase">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
