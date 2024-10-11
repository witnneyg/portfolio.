export function WitStoreProject() {
  return (
    <div className="flex flex-col gap-6 mt-5 ">
      <h3 className="font-semibold text-3xl ">WitStore</h3>
      <p className="text-lg w-[740px]">
        An engaging application that helps School of the art institute of
        Chicago students make a mentor-mentee relationship through personalized
        search.
      </p>

      <div className="flex gap-32 mt-8 ">
        <div className="flex flex-col ">
          <h4 className="font-semibold">My Role</h4>
          <p>Programmer</p>
        </div>
        <div>
          <h4 className="font-semibold">Project</h4>
          <p>Personal Project</p>
        </div>
        <div>
          <h4 className="font-semibold">Timeline</h4>
          <p>7 days (2024)</p>
        </div>
        <div>
          <h4 className="font-semibold">Languages Used</h4>
          <p>React, NodeJs, Tailwind</p>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <a href="" target="blank">
          <span className="text-blue-500 cursor-pointer">Github project</span>
        </a>
        <a href="" target="blank">
          <span className="text-blue-500 cursor-pointer">Website</span>
        </a>
      </div>
    </div>
  );
}
