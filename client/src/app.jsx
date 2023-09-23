import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home, About, Profile, SignIn, SignUp } from "./pages";
import { Header } from "./components";
const app = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};
export default app;
