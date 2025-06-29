import "./About.css";

export default function About() {
  return (
    <div className="AboutPage">
      <div className="About__Wrapper">
        <div className="About__Card">
          <h1 className="About__Title">About Me</h1>
          <img
            src="item_tshirt_playeranegra.png"
            alt="Moises Sanchez"
            className="About__Image"
          />
          <blockquote className="About__Quote">
            "La pasión por el deporte es el motor que impulsa mi vida y
            trabajo."
          </blockquote>
          <h3 className="About__Name">Moises Sanchez</h3>
          <p className="About__Description">
            Soy un profesional dedicado a ofrecer productos deportivos de alta
            calidad que inspiran bienestar y estilo. Me apasiona ayudar a mis
            clientes a encontrar lo mejor para su entrenamiento y vida diaria.
          </p>
        </div>
      </div>
    </div>
  );
}
