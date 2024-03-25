import React from "react";

const Textpage = () => {
  return (
    <div>
      {/* <!-- Element 1 --> */}
      <div className="animate-slidein opacity-0 [--slidein-delay:300ms] ...">
        <div className="...">Introducing Linear Asks</div>
        <img loading="lazy" src="..." className="..." alt="Icon" />
      </div>

      {/* <!-- Element 2 --> */}
      <h1 className="animate-slidein opacity-0 [--slidein-delay:300ms] ...">
        Linear is a better way
        <br />
        to build products
      </h1>

      {/* <!-- Element 3 --> */}
      <p className="animate-slidein opacity-0 [--slidein-delay:500ms] ...">
        Meet the new standard for modern software development.
        <br />
        Streamline issues, sprints, and product roadmaps.
      </p>

      {/* <!-- Element 4 --> */}
      <div className="animate-slidein opacity-0 [--slidein-delay:700ms] ...">
        <div className="...">Get started</div>
        <img loading="lazy" src="..." className="..." alt="Arrow icon" />
      </div>
    </div>
  );
};
export default Textpage;
