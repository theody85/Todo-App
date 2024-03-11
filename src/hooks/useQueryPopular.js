import { useEffect, useState } from "react";

const useQueryPopular = () => {
  const [popular, setPopular] = useState([]);
  const baseUrl = "https://api.themoviedb.org/3";

  const fetchPopular = async () => {
    const url = `${baseUrl}/movie/popular?api_key=8d27666dca41180d42a80d675e9ba4ab&language=en-US&page=1`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

    const res = await (await fetch(url, options)).json();
    console.log(res.results);
    setPopular(res.results);
  };

  useEffect(() => {
    fetchPopular();
  }, []);
  return { results: popular };
};

export default useQueryPopular;
