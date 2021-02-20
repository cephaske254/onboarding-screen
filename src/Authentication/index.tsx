import { assets as onBoardingAssets } from "./Onboarding";
import { assets as welcomeAssets } from "./Welcome/Welcome";

export { OnBoarding } from "./Onboarding";
export { default as Welcome } from "./Welcome/Welcome";

export const assets = [...onBoardingAssets, ...welcomeAssets];
