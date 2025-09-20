import { KreaLogo, MobbinLogo } from "./icons";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between px-5 py-2 bg-[#2F2F2F] text-white">
      <div className="flex items-center gap-5">
        <span className="bg-black p-1 rounded-md">
          <KreaLogo className="h-7 w-7" />
        </span>
        <span className="text-2xl">Krea AI</span>
      </div>
      <div className="flex items-center gap-8">
        <p className="font-semibold text-xl">curated by</p>
        <div className="flex items-center gap-2 text-2xl">
          <MobbinLogo className="h-16 w-16" />
          <span className="font-semibold">Mobbin</span>
        </div>
      </div>
    </footer>
  );
}
