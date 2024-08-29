import BookList from "./components/BookList";
import NavBar from "./components/NavBar";
import AuthContextProvider from "./context/AuthContext";
import ThemeContextProvider from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <NavBar />
          <BookList />
          <ThemeToggle/>
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
