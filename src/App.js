import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./styles/styles.css"
import ListPostsController from './pages/ListPosts/ListPostsController';
import AddPostController from './pages/AddPost/AddPostController';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<ListPostsController />} />
      <Route path='/add-post' element={<AddPostController />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
