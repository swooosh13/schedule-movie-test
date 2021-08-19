import "./styles/app.scss";
import { Calendar, Header, Content } from "./components"

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Calendar />
    </div>
  );
}

export default App;
