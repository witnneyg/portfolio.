import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="flex  justify-between items-center gap-5  px-14 py-6 md:px-24 md:py-11">
      <Link to="/">
        <h4 className="font-semibold text-xl">Witnney</h4>
      </Link>

      <div className="flex gap-10 mt-1">
        <Link to="/" className="text-lg text-gray-400">
          Work
        </Link>
        <Link to="/about" className="text-lg text-gray-400">
          About
        </Link>
        <span className="text-lg text-gray-400">Resume</span>
      </div>
    </header>
  );
}
