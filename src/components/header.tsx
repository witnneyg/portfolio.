export function Header() {
  return (
    <header className="flex  justify-between items-center gap-5  px-14 py-6 md:px-24 md:py-11">
      <h4 className="font-semibold text-xl">Witnney</h4>

      <div className="flex gap-10 mt-1">
        <span className="text-lg text-gray-400">Work</span>
        <span className="text-lg text-gray-400">About</span>
        <span className="text-lg text-gray-400">Resume</span>
      </div>
    </header>
  );
}
