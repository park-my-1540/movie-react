import "./styles.css";
import MainPage from "./comp/MainPage";
import MovieProvider from "./lib/Provider";

/**
 * 하는 일 : MainPage 렌더링, Provider 
 * @parameter : cover_img, rating,id,title,desc
 */

export default function App() {
  return (
    <>
      <MovieProvider>
      <MainPage />
      </MovieProvider>
    </>
  );
}
