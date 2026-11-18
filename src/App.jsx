
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Student from "./components/Student.jsx";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh"
      }}
    >
      <Header />

      <main
        style={{
          display: "flex",
          flex: "1",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "10px"
        }}
      >
        <Student name="Charan" age={20} />
        <Student name="Sravani" age={21} />
        <Student name="Maha Lakshmi" age={26} />
        <Student name="Harsha" age={22} />
        <Student name="Vardhan" age={24} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
