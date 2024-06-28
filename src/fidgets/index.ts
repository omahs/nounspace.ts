// TO DO: Figure out how to do this importing dynamically
import Example from "./example";
import Frame from "./farcaster/Frame";
import Gallery from "./ui/gallery";
import TextFidget from "./ui/Text";
import IFrame from "./ui/IFrame";
import Profile from "./ui/profile";
import Grid from "./layout/Grid";
import NounishGovernance from "./community/nouns-dao/NounishGovernance";
import Cast from "./farcaster/Cast";
import Feed from "./farcaster/Feed";
import CreateCast from "./farcaster/components/CreateCast";

export const CompleteFidgets = {
  //
  example:
    process.env.NEXT_PUBLIC_VERCEL_ENV === "development" ? Example : undefined,
  // Farcaster
  frame: Frame,
  cast: Cast,
  feed: Feed,
  createCast: CreateCast,
  // Basic UI elements
  gallery: Gallery,
  text: TextFidget,
  iframe: IFrame,
  profile: Profile,
  // Nouns
  governance: NounishGovernance,
};

export const LayoutFidgets = {
  grid: Grid,
};
