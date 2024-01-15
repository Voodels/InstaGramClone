import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import PageLayout from "./Layouts/PageLayout/PageLayout";
import Page404 from "./Page404/Page404";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
  return (
    <>
      <PageLayout>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>} />
          <Route path="/auth" element={<AuthPage></AuthPage>}/>
          <Route path="*" element={<Page404></Page404>} />
          <Route path="/:username" element={<ProfilePage></ProfilePage>} />
        </Routes>
      </PageLayout>
    </>
  );
}

export default App;
