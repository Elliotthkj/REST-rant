const React = require("react");
const Def = require("../default");

function show(data) {
  let comments = <h3 className="inactive">No comments yet!</h3>;
  if (data.place.comments.length) {
    comments = data.place.comments.map((c) => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? "Rant! ðŸ˜¡" : "Rave! ðŸ˜»"}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      );
    });
  }
  return (
    <Def>
      <main>
        <div className="row">...</div>
        <hr />
        <h2>Comments</h2>
        {comments}
        <form method="POST" action="/comment">
          <label htmlFor="author">Author:</label>
          <input type="text" id="author" name="author"></input>

          <label htmlFor="content">Content:</label>
          <textarea id="content" name="content"></textarea>

          <label htmlFor="star-rating">Star Rating:</label>
          <input
            type="number"
            id="star-rating"
            name="star-rating"
            min="0"
            max="5"
            step="0.5"
          ></input>

          <label htmlFor="rant">Rant:</label>
          <input type="checkbox" id="rant" name="rant"></input>

          <input type="submit" value="Submit"></input>
        </form>
      </main>
    </Def>
  );
}

module.exports = show;
