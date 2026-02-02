function StudentCard({ name, rollNo, marks }) {
  // safety check
  if (!marks || marks.length === 0) {
    return <p>Error: Marks data missing</p>;
  }

  const total = marks.reduce((sum, m) => sum + m, 0);

  return (
    <div className="card">
      <h3>Name: {name}</h3>
      <p>Roll No: {rollNo}</p>
      <p>Marks: {marks.join(", ")}</p>
      <p>Total: {total}</p>
    </div>
  );
}

export default StudentCard;
