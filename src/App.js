import "./App.css";
import CardComponent from "./components/CardComponent";
import CardComponentColor from "./components/CardComponentColor";
import CardTop from "./components/CardTop";
import avatarMark from "./avatar-mark-webber.webp";
import avatarJacob from "./avatar-jacob-thompson.webp";
import avatarAngela from "./avatar-angela-gray.webp";
import avatarKimberly from "./avatar-kimberly-smith.webp";
import avatarNathan from "./avatar-nathan-peterson.webp";
import avatarAnna from "./avatar-anna-kim.webp";
import avatarRizky from "./avatar-rizky-hasanuddin.webp";

function App() {
  return (
    <div className="App">
      <div className="container">
        <CardTop />
        <div className="card-main">
          <CardComponentColor
            name="Mark Webber"
            link={avatarMark}
            description="reacted to your  recent post"
            gray="My first tournament today!"
            time="1m ago"
          />
          <CardComponentColor
            name="Angela Gray"
            link={avatarAngela}
            description="followed you"
            time="5m ago"
          />
          <CardComponentColor
            name="Jacob Thompson"
            link={avatarJacob}
            description="has joined your  group"
            blue="Chess Club"
            time="1 day ago"
          />
          <CardComponent
            name="Kimberly Smith"
            link={avatarKimberly}
            description="commented on your picture"
            time="1 week ago"
          />
          <CardComponent
            name="Kimberly Smith"
            link={avatarRizky}
            description="sent you a private message"
            time="5 days ago"
          />
          <CardComponent
            name="Nathan Peterson"
            link={avatarNathan}
            description="reacted to your  recent post"
            gray="5 end-game strategies to increase your win rate"
            time="2 weeks ago"
          />
          <CardComponent
            name="Anna Kim"
            link={avatarAnna}
            description="left the group"
            blue="Chess Club"
            time="2 weeks ago"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
