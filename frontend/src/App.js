import { Button } from "@chakra-ui/button";
import "./App.css";
import { Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import Chatpage from "./pages/chatpage";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} />
    </div>
  );
}

export default App;
