// This is the entry point of the application. It renders the App component into the root element.

import React, { useContext, useEffect, useState } from "react";

export const API_ENDPOINT = `https://api.tvmaze.com/search/shows?q=all`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [shows, setShows] = useState([]);

  const getMovies = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      if (data) {
        const newShows = data.map((item) => {
          const {
            show: { id, name, image, summary, genres, rating, premiered },
          } = item;
          return {
            id: id,
            name: name,
            image: image,
            summary: summary,
            genres: genres,
            rating: rating,
            premiered: premiered,
          };
        });
        setShows(newShows);
      } else {
        setShows([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies(API_ENDPOINT);
  }, []);

  return (
    <AppContext.Provider
      value={{
        loading,
        shows,
        Error,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// UseGlobalContext is a custom hook that we will use to consume the context in our components.
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext };
export default AppProvider;
export { useGlobalContext };
