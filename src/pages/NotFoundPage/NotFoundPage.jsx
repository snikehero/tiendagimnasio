import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <div className="NotFound">
      <h1 className="NotFound__Title">404</h1>
      <p className="NotFound__Message">Oops! La página que buscas no existe.</p>
      <Link to="/">
        <button className="NotFound__Button">Regresar al Inicio</button>
      </Link>
    </div>
  );
}
