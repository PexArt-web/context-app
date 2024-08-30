import BookList from "./components/BookList";
import NavBar from "./components/NavBar";
import AuthContextProvider from "./context/AuthContext";
import ThemeContextProvider from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import BookContextProvider from "./context/BookContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ThemeContextProvider>
          <BookContextProvider>
            <NavBar />
            <BookList />
            <ThemeToggle />
          </BookContextProvider>
        </ThemeContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
