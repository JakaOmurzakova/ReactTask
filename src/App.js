import Footer from "./components/Footer";
import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  const users = [
    {
      id: 1,
      name: "Mars",
      lastName: "Kanatov",
      age: 15,
    },
    {
      id: 2,
      name: "Almaz",
      lastName: "ilyazov",
      age: 22,
    },
    {
      id: 3,
      name: "Nurtai",
      lastName: "Beishenov",
      age: 18,
    },
    {
      id: 4,
      name: "Alibek",
      lastName: "Mirlanov",
      age: 23,
    },
    {
      id: 5,
      name: "Nursultan",
      lastName: "Aliev",
      age: 25,
    },
    {
      id: 6,
      name: "Aliya",
      lastName: "Shamuza",
      age: 19,
    },
    {
      id: 7,
      name: "Altinbek",
      lastName: "Shumkarov",
      age: 23,
    },
  ];
  return (
    <div className="App" style={{ margin: "0 auto" }}>
      <Header />
      <Section users={users} />
      <Footer />
    </div>
  );
}

export default App;
