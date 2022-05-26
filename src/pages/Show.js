import { useParams } from "react-router-dom";

export default function Show(props) {
  const { id } = useParams();
  const people = props.people;
  const person = people.find((p) => p._id === id);

  return (
    <div className="person">
      <h1>{person.name}</h1>
      <h2>{person.title}</h2>
      <img src={person.image} alt={person.name} />
    </div>
  );
}

