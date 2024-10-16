import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="flex  justify-between items-center gap-5  px-14 py-6 md:px-24 md:py-11">
      <Link to="/">
        <h4 className="font-semibold text-xl hover:text-blue">Witnney</h4>
      </Link>

      <div className="flex gap-10 mt-1">
        <Link to="/" className="text-lg text-gray">
          Work
        </Link>
        <Link to="/about" className="text-lg text-gray">
          About
        </Link>
        <span className="text-lg text-gray">Resume</span>
      </div>
    </header>
  );
}
