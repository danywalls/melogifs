import React, { useEffect, useState } from "react";

import Giflist from "../components/Giflist";
import Search from "../components/Search";
import { getGifs } from "../services/getGifs";

export default function Home() {
  const [gifs, setGifs] = useState([]);
  const [filter, updateFilter] = useState(["teentitans"]);

  useEffect(() => {
    getGifs({ tag: filter }).then((result) => {
      setGifs(result);
    });
  }, [filter]);
  const showLoading = gifs.length === 0;
  return (
    <div>
      <Search filter={filter} update={updateFilter} />
      {showLoading ? <div> Loading </div> : <Giflist gifs={gifs} />}
    </div>
  );
}
