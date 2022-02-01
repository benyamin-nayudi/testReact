import "./testimonial.css";

const Testimonial = () => {
  return (
    <section className="testimonials-container" id="testimonial">
      <h2 className="testimonial-title fancy-border unobserve">Testimonials</h2>

      <div className="testimonials">
        <div className="testimonial unobserve">
          <p>
            I'm a paragraph. Click here to add your own text and edit me. I'm a
            great place for you to tell a story and let your users know a little
            more about you
          </p>
          <p className="author">
            suzanne smith, <span>Stylist</span>
          </p>
        </div>
        <div className="testimonial unobserve">
          <p>
            I'm a paragraph. Click here to add your own text and edit me. I'm a
            great place for you to tell a story and let your users know a little
            more about you
          </p>
          <p className="author">
            Emma jones, <span>Model</span>
          </p>
        </div>
        <div className="testimonial unobserve">
          <p>
            I'm a paragraph. Click here to add your own text and edit me. I'm a
            great place for you to tell a story and let your users know a little
            more about you
          </p>
          <p className="author">
            olivia heart, <span>lawyer</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
