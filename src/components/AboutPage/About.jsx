import "./About.css";
export default function About() {
  return (
    <div className="AboutPage">
      <div className="About__Section">
        <div className="About__Wrapper">
          <div className="About__Testimonial">
            <article>
              <h1>about me</h1>
              <img
                src="item_tshirt_playeranegra.png"
                className="About__Image"
              />
              <blockquote className="About__Quote">
                Tralalero tralala
              </blockquote>
              <h5 className="About__Name">Moises Sanchez</h5>
              <p className="About__AditionalText">
                Lorem ipsum dolor sit amet.
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
