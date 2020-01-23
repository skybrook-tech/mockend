/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";
import Header from "../../ui/header";
import Button from "../../ui/button";
import Menu from "../../ui/menu";

const TopBar = ({ primary }) => {
  return (
    <Menu
      size="large"
      inverted
      borderless
      css={({ colors }) => ({
        "&&&": {
          padding: "5px 20px",
          backgroundColor: primary ? colors.primary : "transparent",
          boxShadow: "none",
          border: "none",
          borderRadius: 0,
          "& .header": {
            color: "white"
          }
        }
      })}
    >
      <Menu.Item>
        <Header size="large">MockEnd</Header>
      </Menu.Item>
      <Menu.Menu position="right">
        <Link
          data-testid="landingPage-loginButton"
          to="/login"
          css={{ "&&&": { display: "flex" } }}
        >
          <Menu.Item>
            <Header size="small">Log In</Header>
          </Menu.Item>
        </Link>

        <Link to="/signup">
          <Menu.Item>
            <Button data-testid="landingPage-signupButton" color="white">
              Sign Up
            </Button>
          </Menu.Item>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};

export default TopBar;