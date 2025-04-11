import { ImageGrid } from "./components/ImageGrid";
import { AboutCards } from "./components/AboutCards";

export const About = () => {
  return (
    <div className="mx-auto max-w-screen-xl mt-20">
      <span className="text-[var(--colour-1)] text-[19.4px] font-medium tracking-widest">
        WHO WE ARE
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] pt-[60px]">
        <div>
          <h2 className="h2-semibold text-[var(--text-colour-2)]">
            Assisting individuals in locating the appropriate real estate.
          </h2>
          <p className="paragraph-regular text-[var(--text-colour-3)] mt-[30px]">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it
          </p>
          <div className="hidden md:block">
            <AboutCards />
          </div>
        </div>
        <ImageGrid />
        <div className="md:hidden">
          <AboutCards />
        </div>
      </div>
    </div>
  );
};
