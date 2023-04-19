const React = require("react");
const Def = require("../default");

function index(data) {
  console.log(data); // TODO: data is not being passed correctly to the view or the view is accessing it incorrectly

  let placesFormatted =
    data.places && data.places.length > 0 ? (
      data.places.map((place) => {
        return (
          <div>
            <h2>{place.name}</h2>
            <img src={place.pic} alt={place.name} />
          </div>
        );
      })
    ) : (
      <p>No places found.</p>
    );
  return (
    <Def>
      <main>
        <h1>PLACES INDEX PAGE</h1>
        {placesFormatted}
      </main>
    </Def>
  );
}

module.exports = index;

module.exports = index;
