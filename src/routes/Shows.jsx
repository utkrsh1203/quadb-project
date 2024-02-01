import React, { useEffect, useState, useRef } from "react";

import ShowContainer from "../components/ShowContainer";

function Shows() {
  const [shows, setShows] = useState([]);
  let EndPoint = "https://api.tvmaze.com/search/shows?q=all";

  async function AllShows() {
    const res = await fetch(EndPoint);
    const data = await res.json();
    // console.log(data);
    setShows(data);
  }

  useEffect(() => {
    AllShows();
    // console.log(shows);
    // }, [user, setUsers]);
  }, []);

  return (
    <div>
      {/* <div className='flex justify-center h-11  my-5 items-center'></div> */}
      <ShowContainer users={shows} />
    </div>
  );
}

export default Shows;
