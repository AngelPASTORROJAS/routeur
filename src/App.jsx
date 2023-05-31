import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Effect from "./Effect";
import Form from "./Form";
import NotFound from "./NotFound";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/form" element={<Form />} />
          <Route path="/effect/:decimal?" element={<Effect />} />
          <Route path="/*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
