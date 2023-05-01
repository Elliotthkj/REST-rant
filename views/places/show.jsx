const React = require("react");
const Def = require("../default");

function show(data) {
  return (
    <Def>
      <main>
        <h1>{data.place.name}</h1>
        <section>Comments</section>
        <section>No comments yet!</section>
        <a href={`/places/${data.id}/edit`} className="btn btn-warning">
          Edit
        </a>
        <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </form>
      </main>
    </Def>
  );
}

module.exports = show;


// ACTIVITY 20: REST-Rant Part 9, PART 2, STEP 4 incomplete instructions

// <Def>
//   <main>
//     <div className="row">
//       <div className="col-sm-6">
//         <img src={data.place.pic} alt={data.place.name} />
//         <h3>
//           Located in {data.place.city}, {data.place.state}
//         </h3>
//       </div>
//       <div className="col-sm-6">
//         <h1>{data.place.name}</h1>
//         <section>Comments</section>
//         <section>No comments yet!</section>
//         <h2>
//           Description
//         </h2>
//         <h3>
//           {data.place.showEstablished()}
//         </h3>
//         <h4>
//           Serving {data.place.cuisines}
//         </h4>
//         <a href={`/places/${data.id}/edit`} className="btn btn-warning">
//           Edit
//         </a>
//         <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
//           <button type="submit" className="btn btn-danger">
//             Delete
//           </button>
//         </form>    </div>
//   </main>
// </Def>


// function show(data) {
//   return (
//     <Def>
//       <main>
//         <h1>{data.place.name}</h1>
//         <section>Comments</section>
//         <section>No comments yet!</section>
//         <a href={`/places/${data.id}/edit`} className="btn btn-warning">
//           Edit
//         </a>
//         <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
//           <button type="submit" className="btn btn-danger">
//             Delete
//           </button>
//         </form>
//       </main>
//     </Def>
//   );
// }