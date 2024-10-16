export function Footer() {
  return (
    <footer className="flex flex-col container mx-auto px-20 lg:px-44 mt-20 py-10">
      <h5 className="text-2xl bg-gradient-to-r from-blue to-blueEnd bg-clip-text text-transparent font-semibold">
        Nice to see you here!
      </h5>

      <div className="flex flex-col gap-1 mt-8 text-gray text-sm">
        <span>witnneygabriel13@gmail.com</span>
        <div className="flex justify-between">
          <span>Made with love © 2024 Witnney Gabriel</span>
          <div className="flex gap-10 text-base">
            <a
              href="https://www.linkedin.com/in/witnney-gabriel-6483672b4/"
              className="cursor-pointer hover:text-blue-400"
            >
              Linkedin
            </a>
            <a
              href="https://github.com/witnneyg"
              className="cursor-pointer hover:text-blue-400"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
