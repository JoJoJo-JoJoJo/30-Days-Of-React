import FrontEndTechs from "./FrontEndTechs.jsx";
import Subscribe from "./Subscribe.jsx";
import UserCard from "./UserCard.jsx";
// eslint-disable-next-line
import styles from "./App.css";

export default function App() {
  return (
    <div className="app" id="app">
      <FrontEndTechs />
      <Subscribe />
      <UserCard />
    </div>
  );
}
