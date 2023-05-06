const React = require("react");
const Def = require("./default");

function error404() {
  const imgStyle = {
    maxWidth: "500px",
    maxHeight: "500px",
  };

  return (
    <Def>
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <p>Missing something? :D</p>
        <div>
          <img
            id="404-lost-kitty"
            src="/images/404winry.jpg"
            alt="404 lost kitty"
            style={imgStyle}
          />
        </div>
      </main>
    </Def>
  );
}

module.exports = error404;
