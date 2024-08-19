import { createFileRoute } from "@tanstack/react-router";
import clsx from "clsx";
import { Cover } from "~/components/ui/cover";
import { SparklesCore } from "~/components/ui/sparkles";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="w-screen h-screen bg-gunmetal">
      <section
        className={clsx(
          "flex flex-col items-center justify-center h-full w-full",
        )}
      >
        <SparklesCore
          particleColor="#24292F"
          particleDensity={10}
          background="bg-gunmetal/50"
          particleSize={1}
          speed={0.01}
          minSize={0.01}
          className="bg-transparent z-0 absolute"
        />
        <Cover className="text-white bg-transparent hover:bg-gunmetal/10 w-6/5 h-full text-2xl z-10 font-bold p-8 rounded-lg duration-300 transform-3d">
          Davi Spindola / Software Engineer
        </Cover>
      </section>
    </div>
  );
}
