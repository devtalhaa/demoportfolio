export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#101828]">
      <div className="mx-auto flex flex-col gap-6 px-4 py-10 text-sm text-slate-400 sm:px-6 lg:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-base font-semibold text-white">
            CoWork<span className="text-[color:var(--primary-pink)]">24</span>
          </p>
          <p>Flexible workspaces for ambitious teams in Islamabad.</p>
        </div>
        <p>© {new Date().getFullYear()} CoWork24. All rights reserved.</p>
      </div>
    </footer>
  );
}

