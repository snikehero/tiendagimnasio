import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "./SearchResults.css";

export default function SearchResults() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (!query) {
      setResults([]);
      setError(null);
      return;
    }

    const timeoutId = setTimeout(() => {
      setLoading(true);
      setError(null);

      fetch(
        `https://gateway-production-b320.up.railway.app/api/productos/search?name=${encodeURIComponent(
          query
        )}`
      )
        .then((res) => {
          if (!res.ok) throw new Error("Error al buscar productos");
          return res.json();
        })
        .then((data) => setResults(data.content || data))
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [query]);

  const handleClick = (id) => {
    navigate(`/SingleProductPage/${id}`);
  };

  return (
    <div className="SearchResultsContainer">
      <input
        type="text"
        placeholder="Buscar productos..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="SearchResultsInput"
      />
      <div className="SearchResultsDropdown">
        {loading && <p>Cargando...</p>}
        {error && <p className="Error">{error}</p>}
        {!loading && !error && results.length === 0 && query && (
          <p>No se encontraron productos.</p>
        )}
        {!loading && !error && results.length > 0 && (
          <ul>
            {results.map((item) => (
              <li
                key={item.id}
                onClick={() => handleClick(item.id)}
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "8px",
                }}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleClick(item.id);
                }}
                aria-label={`Ver detalle del producto ${item.name}`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "cover",
                    borderRadius: "4px",
                  }}
                />
                <div>
                  <div>{item.name}</div>
                  <div style={{ color: "#555" }}>${item.price.toFixed(2)}</div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
