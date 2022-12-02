import "./App.css";
import CardComponent from "./components/CardComponent";
import CardComponentGrey from "./components/CardComponentGrey";
import CardTop from "./components/CardTop";
import avatarMark from "./images/avatar-mark-webber.webp";
import avatarJacob from "./images/avatar-jacob-thompson.webp";
import avatarAngela from "./images/avatar-angela-gray.webp";
import avatarKimberly from "./images/avatar-kimberly-smith.webp";
import avatarNathan from "./images/avatar-nathan-peterson.webp";
import avatarAnna from "./images/avatar-anna-kim.webp";
import avatarRizky from "./images/avatar-rizky-hasanuddin.webp";
let notifications = 3;

function App() {
  return (
    <div className="App">
      <div className="container">
        <CardTop count ={notifications}/>
        <div className="card-main">
          <CardComponentGrey
            name="Mark Webber"
            link={avatarMark}
            description="reacted to your  recent post"
            gray="My first tournament today!"
            time="1m ago"
          />
          <CardComponentGrey
            name="Angela Gray"
            link={avatarAngela}
            description="followed you"
            time="5m ago"
          />
          <CardComponentGrey
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
