import logo from "../../img/img_logo.png";
import "./header.scss";

function Header() {
  return (
    <div className="headerSite">
      <div className="insideHeaderUp">
        <div className="container_logo">
          <a href="/">
            <img className="img_logo" src={logo} alt="logo" />
          </a>
        </div>

        <div className="menu">
          <p>
            <a href="/docs">docs</a>
          </p>
          <p>
            <a href="/about">about</a>
          </p>
          <p className="support_us">
            <a href="/support_us">support us</a>
          </p>
        </div>
      </div>

      <div className="title">
        <h1 className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ">
          The Rick and Morty API
        </h1>
      </div>
    </div>
  );
}

export default Header;
