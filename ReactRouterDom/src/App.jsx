import { Routes, Route, useNavigate, Link } from "react-router-dom";
import CommentsComponents from "./pages/comments";
import RecipeComponents from "./pages/recipe";
import RecipeDetailsComponent from "./pages/recipe-details";
import Not_FoundPage from "./pages/Not-FoundPage";
import Layout from "./components/layout";


function App() {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Hey, Mangesh</h1>

      {/* useNavigate() Hook  */}
      <button onClick={() => navigate('/home/recipe')}>Go to Recipe Page</button>
      <button onClick={() => navigate('/home/comment')}>Go to Comment Page</button>

      {/* link method to navigate pages*/}
      <Link to={'/about'}>
        Go to About page
      </Link>
      <Routes>
        <Route path="/home" element={<Layout />}>
          <Route path="recipe" element={<RecipeComponents />} />
          <Route path="comment" element={<CommentsComponents />} />
          <Route path="recipe/:id" element={<RecipeDetailsComponent />} />
        </Route>

        {/* Route for Not-Found Page */}
        <Route path="*" element={<Not_FoundPage />} />

      </Routes>
    </div>
  );
}

export default App;





