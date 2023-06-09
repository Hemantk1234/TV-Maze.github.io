// This ShowList component is used to display the list of shows. It uses the useGlobalContext hook to get the shows and loading state from the context. It also uses the NavLink component from react-router-dom to link to the SingleShow component. The SingleShow component is used to display the details of a single show. The ShowList component is used in the App component.

import React from "react";
import { useGlobalContext } from "./ContextApi";
import { NavLink } from "react-router-dom";

const ShowList = () => {
  const { shows, loading } = useGlobalContext();
  if (loading) return <div className="loading">Loading...</div>;

  return (
    <>
      <h1 className="Heading">TV-Maze</h1>
      <section className="show-page">
        <div className="container grid grid-4-col">
          {shows.map((item) => {
            const { id, name, image } = item;
            console.log(image);
            return (
              <NavLink to={`/SingleShow/${id}`} key={id}>
                <div className="card" key={id}>
                  <div className="card-info">
                    <h2>{name}</h2>
                    <img
                      src={
                        image
                          ? image.medium
                          : "https://via.placeholder.com/210x295/ffffff/666666/?text=TV"
                      }
                      alt={id}
                    />
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ShowList;
