import type { ReactNode } from 'react';

type IProjectProps = {
  img: {
    src: string;
    alt: string;
  };
  name: string;
  description: string;
  link: string;
  link2: string;
  category: ReactNode;
};

const Project = (props: IProjectProps) => (
  <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row">
    <div className="shrink-0">
      <img
        className="h-36 w-36 hover:translate-y-1"
        src={props.img.src}
        alt={props.img.alt}
        loading="lazy"
      />
    </div>

    <div>
      <div className="flex flex-col items-center gap-y-2 md:flex-row">
        <div className="text-xl font-semibold">{props.name}</div>

        <div className="ml-3 flex flex-wrap gap-2">{props.category}</div>
      </div>

      <p className="mt-3 text-gray-400">{props.description}</p>

      <a href={props.link} target="_blank" className="mr-6">
        <button className="my-6 rounded-full bg-blue-500 px-4 py-1 font-bold text-white hover:translate-y-1 hover:bg-blue-700">
          View Source
        </button>
      </a>
      {props.link2 && (
        <a href={props.link2} target="_blank">
          <button className="my-6 rounded-full bg-blue-500 px-4 py-1 font-bold text-white hover:translate-y-1 hover:bg-blue-700">
            View Live Site
          </button>
        </a>
      )}
    </div>
  </div>
);

export { Project };
