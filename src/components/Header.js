import { Link } from "react-router-dom";

const Header = ({ signedIn, setToken, token }) => {
  return (
    <>
      <div className="header">
        <h1 className="title">Fitness Trackr</h1>

        <nav id="links" className="links">
          <Link to="/" id="link">
            Home
          </Link>
          <Link to="/routines" id="link">
            Routines
          </Link>

          {signedIn ? (
            <Link to="/myroutines" id="link">
              My Routines
            </Link>
          ) : null}

          <Link to="/activities" id="link">
            Activities
          </Link>

          <div className="loglinks">
            {signedIn ? (
              <Link
                to="/"
                id="link"
                className="log"
                onClick={() => {
                  setToken(null);
                  window.localStorage.removeItem("token: ", token);
                  console.log(token);
                  window.location.reload();
                }}
              >
                Log Out
              </Link>
            ) : (
              <>
                <Link to="/signup" id="link" className="log">
                  Sign Up
                </Link>

                <Link to="/login" id="link" className="log">
                  Log In
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
