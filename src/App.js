// Import React Router
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import Root from './routes/root';
import MainView from './routes/mainView';
import DetailedView from './routes/detailedView';
import './App.css';
import frontPageData from "./assets/data/mockData";
import { extractCardData } from './modules/helperFunctions';

function App() {
  // Extract useable card data from the raw API data using the helper function extractCardData()
  const cardData = extractCardData(frontPageData);
  console.log(cardData);

  // set up the routing between the card view and the detailed view
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<MainView cardData={cardData} />} />
        <Route path="card/:cardId" element={<DetailedView />} />
      </Route>
    )
  );
  
  // render the router
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
