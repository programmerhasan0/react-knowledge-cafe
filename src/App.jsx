import "./App.css";
import Blogs from "./components/Blogs";
import Header from "./components/Header";

function App() {
    return (
        <>
            <h1 className="text-4xl font-bold">React Knowledge Cafe</h1>
            <Header />
            <Blogs />
        </>
    );
}

export default App;
