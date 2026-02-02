import StudentCard from "./components/StudentCard";
import "./App.css";

function App() {
  const students = [
    {
      name: "Rahul",
      rollNo: 101,
      marks: [85, 78, 90]
    }
  ];

  return (
    <div className="app">
      <h1>Student Marks Card</h1>

      {students.map((s, i) => (
        <StudentCard
          key={i}
          name={s.name}
          rollNo={s.rollNo}
          marks={s.marks}
        />
      ))}
    </div>
  );
}

export default App;
