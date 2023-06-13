import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { request } from "graphql-request";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Character from "./pages/Character";

const App = () => {
  const [comics, setComics] = useState(null);

  useEffect(() => {
    const fetchComics = async () => {
      const { comics } = await request(
        "https://api-sa-east-1.hygraph.com/v2/clit3y4d90ci201tf42ph6j7y/master",
        `
        {
          comics{
            title
            slug
            icon
            banner
            series{
              title
              cover
            }
          }
        }`
      );
      setComics(comics);
    };
    fetchComics();
  }, []);

  return (
    <Router>
      <Sidebar comics={comics} />
      <Routes>
        <Route path="/" Component={Home}></Route>
        {comics &&
          comics.map((comics) => (
            <Route
              key={comics.slug}
              path={comics.slug}
              element={<Character slug={comics.slug} comics={comics} />}
            ></Route>
          ))}
      </Routes>
    </Router>
  );
};

export default App;
