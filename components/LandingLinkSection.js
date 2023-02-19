import LandingLink from "./LandingLink";

export default function LandingLinkSection() {
  return (
    <div className="">
      <LandingLink
        link="/blog"
        description={
          "Some thoughts and experiments in a well enough format. The blog is the mistakes we made along the way."
        }
        text={"Blog"}
      />
      <LandingLink
        link="/portfolio"
        description={
          "(Mostly) all the works I've done so far. This includes design, icons, video, animations and music!"
        }
        text={"Portfolio"}
      />
      <LandingLink
        link="/curriculum"
        description={"Professionally curated information about my career."}
        text={"Curriculum"}
      />
      <LandingLink
        link="/about"
        description={
          'This section aims to answer the question "who am I?", which is always existentially painful.'
        }
        text={"About"}
      />
    </div>
  );
}
