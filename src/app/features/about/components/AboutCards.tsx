import { AboutCard } from "./AboutCard";

export const AboutCards = () => {
  return (
    <>
      <div className="hidden md:block">
        <AboutCard image="smart-home.svg" text="Lorem ipsum has been the" />
        <AboutCard image="user-octagon.svg" text="Lorem ipsum has been the" />
      </div>
      <div className="md:hidden">
        <AboutCard image="smart-home.svg" text="Lorem ipsum has been" />
        <AboutCard image="user-octagon.svg" text="Lorem ipsum has been" />
      </div>
    </>
  );
};
