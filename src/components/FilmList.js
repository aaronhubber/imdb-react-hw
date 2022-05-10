import React from "react";
import Film from "./Films";

const FilmList = ({films}) => {

  const filmsNodes = films.map(film => {
    return (
      <Film name={film.name} key={film.id}>{film.url}</Film>
    );
  });

  return(
    <>
      {filmsNodes}
    </>
  )

}

export default FilmList;