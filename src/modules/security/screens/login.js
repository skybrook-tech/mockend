/** @jsx jsx */
import { jsx } from "@emotion/core";
import LoginForm from "../forms/authentication/login";
import Header from "../../core/ui/header";
import { Link } from "@reach/router";

const containerStyles = theme => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: theme.colors.mainGradient
});

const Login = ({ location }) => {
  return (
    <div className="fit-parent" css={containerStyles}>
      <Header size="large" color="white">
        <Link to="/">MockEnd</Link>
      </Header>

      <LoginForm location={location} />

      <Link className="mt2" to="/signup">
        <h4 css={{ color: "white" }}>Don't have an account? sign up</h4>
      </Link>
    </div>
  );
};

export default Login;