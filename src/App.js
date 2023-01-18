import image from "./images/illustration-woman-online-desktop.svg"
import illustration_box from "./images/illustration-box-desktop.svg";
import mobile_with_woman from "./images/illustration-woman-online-mobile.svg";

function App() {
  return (
    <main>
      <div>
        <div>
          <div>
            <img src={image} alt="" />
            <img src={illustration_box} alt="" />
            <img src={mobile_with_woman} alt="" />
          </div>
          <div>
            <h1>FAQ</h1>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
