/** @jsx jsx */
import { jsx } from "@emotion/core";
import TopBarMenu from "../components/menus/top-bar";

const containerStyles = theme => ({
  backgroundImage: theme.colors.mainGradient
});

const LandingPage = () => {
  return (
    <div css={containerStyles} className="fit-parent">
      <TopBarMenu />
    </div>
  );
};

const landingPage = {
  Component: LandingPage,
  name: "LandingPAge",
  route: "/"
};

export default landingPage;
