import "../styles/home.css";
import { Link } from "react-router-dom";

const entries = [
  {
    title: "HELIKON",
    to: "/helikon",
    copy: "Descubre como unimos arte y tecnologia para crear experiencias interactivas unicas. Clickea para conocer nuestra marca.",
  },
  {
    title: "JUANES",
    to: "/juanes",
    copy: "Explora el universo del artista, sus premios, su historia y la tienda vinculada a la experiencia Helikon.",
  },
  {
    title: "COMIC",
    to: "/comic",
    copy: "Explora un comic interactivo de ficcion inspirado en la esencia musical y creativa de Juanes. Una historia original para vivir una experiencia unica.",
  },
];

export default function HomePage() {
  return (
    <section className="home-page">
      <div className="home-stack">
        {entries.map((entry) => (
          <Link key={entry.title} to={entry.to} className="home-entry">
            <h1 className="home-title">{entry.title}</h1>
            <div className="home-entry-copy">
              <span className="home-arrow">v</span>
              <p>{entry.copy}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
