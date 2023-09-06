import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";
import AuthProvider from "./context/AuthContext.tsx";
import {SkeletonTheme} from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
      <AuthProvider>
          <SkeletonTheme baseColor={"#313131"} highlightColor={"#525252"}>
              <App />
          </SkeletonTheme>
      </AuthProvider>
  </BrowserRouter>
)
