import webDesignImg from "../assets/40apvfvlimllilesp56ef3rtkt.png";

export function MainContent() {
  return (
    <div className="flex gap-14 mt-20">
      <div className="flex flex-col gap-6 lg:w-[500px]">
        <h2 className="text-2xl font-semibold leading-10">
          Hi, I'm Witnney, a{" "}
          <span className="bg-gradient-to-r from-blue to-blueEnd bg-clip-text text-transparent">
            software enginner
          </span>{" "}
          with a passion for programming
        </h2>
        <div className="flex flex-col gap-2 text-stone">
          <p className="text-gray-600">
            Software enginner at{" "}
            <a href="" className="text-black cursor-pointer">
              Duolingo↗
            </a>
          </p>
          <p className="text-gray-600">
            Previously worked with{" "}
            <span className="text-black">
              <a href=""> Meta↗ </a> <a href="">Google↗</a> and{" "}
              <a href="">Samsung↗</a>
            </span>
          </p>
          <p className="text-gray-600">
            Graduated from{" "}
            <a href="" className="text-black">
              CMU↗
            </a>
          </p>
        </div>
      </div>
      <img src={webDesignImg} alt="web design image" className="w-[26rem]" />
    </div>
  );
}
