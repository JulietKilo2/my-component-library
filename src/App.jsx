import "./App.css";
import CustomAvatar from "./components/CustomAvatar";
import CustomButton from "./components/CustomButton";
import CustomCard from "./components/CustomCard";
import CustomTooltip from "./components/CustomTooltip";

function App() {
  const clickEvent = () => {
    console.log("clicked");
  };

  const newEvent = () => {
    const newParagraph = document.createElement("p");
    const newContent = document.createTextNode("Hello world");
    newParagraph.appendChild(newContent);
    document.body.append(newParagraph);
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <CustomCard customStyle={{ borderRadius: "4px", maxWidth: "320px" }}>
        <div style={{ textAlign: "center" }}>
          <CustomAvatar imgSrc={"https://mui.com/static/images/avatar/1.jpg"} />
        </div>
        <p style={{ fontWeight: 600, textAlign: "center" }}>
          Lorem, ipsum dolor.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          maiores sed quae iste, quas facere rem iure nulla quo animi!
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CustomTooltip label={"tooltip"}>
            <CustomButton
              customStyles={{
                color: "#ffffff",
                backgroundColor: "#000080",
                borderRadius: "4px",
              }}
              buttonEvent={newEvent}
            >
              Click
            </CustomButton>
          </CustomTooltip>
        </div>
      </CustomCard>
    </div>
  );
}

export default App;
