import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import EditorPage from "./pages/EditorPage";
import "../src/App.css";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <div>
        <Toaster
          position="top-right"
          toastOptions={{
            success: {
              theme: {
                primary: "#4aedd",
              },
            },
          }}
        ></Toaster>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editor/:roomId" element={<EditorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
