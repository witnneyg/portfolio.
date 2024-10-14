export function AboutPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-between">
        <div className="flex flex-col gap-5 w-[80rem]">
          <h2 className="font-semibold text-2xl">
            Get to know more{" "}
            <span className="text-blue-500">about Witnney</span>
          </h2>
          <p>
            I recently graduated from the Carnegie Mellon University Master of
            Entertainment Technology program and joined Duolingo as a product
            designer.
            <br />
            I am a highly motivated and enthusiastic Product Designer with a
            strong passion for 3D and AR/VR design. I enjoy combining my
            artistic background with my technical skills to create innovative
            and creative solutions.
            <br />I have experience developing visionary concepts, conducting
            user research, and establishing product frameworks through the use
            of animated and interactive prototypes. Possessing a positive
            attitude and a growth-oriented mindset, I am constantly seeking
            opportunities to expand my knowledge and skills as a designer.
          </p>
        </div>
        <div className="">
          <img src="" alt="Image" />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            icon
            <h4 className="text-semibold">Areas of expertise</h4>
          </div>
          <div className="flex flex-col gap-1">
            <span>Product Design</span>
            <span>Product Design</span>
            <span>Product Design</span>
            <span>Product Design</span>
            <span>Product Design</span>
            <span>Product Design</span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            icon
            <h4 className="text-semibold">Currently learning</h4>
          </div>
          <div className="flex flex-col gap-1">
            <span>Product Design</span>
            <span>Product Design</span>
            <span>Product Design</span>
          </div>
        </div>
      </div>
    </div>
  );
}
