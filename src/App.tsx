import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Browse from "./pages/Browse";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Browse />} />
        {/* <Route path="/search" element={<SearchDetails />} />
        <Route path="/recipe/:slug" element={<RecipeDetails />} />
        <Route path="/category/:slug" element={<CategoryDetails />} /> */}
      </Routes>
    </Router>
  )
}

export default App