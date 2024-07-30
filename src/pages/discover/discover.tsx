import "./discover.scss";

const Discover = () => {
  return (
    <div className="discover">
      <img src="/ellipse.svg" className="discover__background" />

      <img
        src="/code-text-1.svg"
        className="discover__background-code discover__background-code-1"
      />
      <img
        src="/code-text-2.svg"
        className="discover__background-code discover__background-code-2"
      />

      <section className="discover__main-page">
        <div className="discover__text-section">
          <p className="discover__title animate--1s .scroll-text">
            Je suis Rayan,
          </p>
          <p className="discover__title animate--2s .scroll-text">
            développeur Full-stack
          </p>
        </div>
      </section>

      <section className="discover__projects ">
        <p className="discover__projects-title">Mes Projets</p>
      </section>
    </div>
  );
};

export default Discover;
