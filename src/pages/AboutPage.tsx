import { BookOpen, MonitorSmartphone } from "lucide-react";
import aboutImg from "../assets/about-img.png";

export function AboutPage() {
  return (
    <div className="flex flex-col gap-10 mt-12">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-5 w-[80rem]">
          <h2 className="font-bold text-2xl">
            Get to know more{" "}
            <span className="bg-gradient-to-r from-blue to-blueEnd bg-clip-text text-transparent">
              about Witnney
            </span>
          </h2>
          <p className="w-[29rem]">
            I recently graduated from the Carnegie Mellon University Master of
            Entertainment Technology program and joined Duolingo as a product
            designer.
            <br /> <br />
            I am a highly motivated and enthusiastic Product Designer with a
            strong passion for 3D and AR/VR design. I enjoy combining my
            artistic background with my technical skills to create innovative
            and creative solutions.
            <br /> <br />I have experience developing visionary concepts,
            conducting user research, and establishing product frameworks
            through the use of animated and interactive prototypes. Possessing a
            positive attitude and a growth-oriented mindset, I am constantly
            seeking opportunities to expand my knowledge and skills as a
            designer.
          </p>
        </div>
        <div>
          <img src={aboutImg} alt="Image" className="w-[42rem]" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-y-14  mt-8">
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 items-center">
            <MonitorSmartphone size={22} />
            <h4 className="font-semibold text-lg">Areas of expertise</h4>
          </div>
          <div className="flex flex-col">
            <span>HTML</span>
            <span>CSS</span>
            <span>Java script</span>
            <span>Type script</span>
            <span>React</span>
            <span>Tailwindcss</span>
            <span>Nodejs</span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-1 items-center">
            <BookOpen size={22} />
            <h4 className="font-semibold text-lg">Currently learning</h4>
          </div>
          <div className="flex flex-col">
            <span>Testes</span>
            <span>CI/CD</span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-1 items-center">
            <BookOpen size={22} />
            <h4 className="font-semibold text-lg">Personal interests</h4>
          </div>
          <div className="flex flex-col">
            <span>Coffee</span>
            <span>Games</span>
            <span>Traveling</span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-1 items-center">
            <BookOpen size={22} />
            <h4 className="font-semibold text-lg">Current projects</h4>
          </div>
          <div className="flex flex-col">
            <span>Weather API</span>
            <span>Another one</span>
          </div>
        </div>
      </div>
    </div>
  );
}
