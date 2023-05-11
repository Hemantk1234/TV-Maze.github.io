import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

const SingleShow = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [shows, setShows] = useState({});

  const getShow = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      if (data) {
        setShows(data); 
        setLoading(false);
      } else {
        setLoading(false);
        setShows({});
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timeout = setTimeout(() => {
      getShow(`https://api.tvmaze.com/shows/${id}`);
    }, 800);

    return () => clearTimeout(timeout);
  }, [id]);

  if (loading)
    return (
      <div className="movie-section">
        <div className="loading">Loading...</div>
      </div>
    );

  return (
    <section className="movie-section">
      <h1 className="Heading">TV-Maze</h1>
      <div className="movie-card">
        <figure>
          <img
            src={
              shows.image
                ? shows.image.medium
                : "https://via.placeholder.com/210x295/ffffff/666666/?text=TV"
            }
            alt={shows.name}
          />
        </figure>
        <div className="card-content">
          <p className="title">{shows.name}</p>
          <p className="card-text">{shows.genres && shows.genres.join(", ")}</p>
          <p className="card-text">
            Rating: {shows.rating && shows.rating.average}
          </p>
          <p className="card-text">Premiered: {shows.premiered}</p>
          <p
            className="card-text"
            dangerouslySetInnerHTML={{ __html: shows.summary }}
          ></p>
          <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
          <NavLink to="/LoginForm" className="book-btn">
            Book Tickets
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default SingleShow;
