import { useState } from "react"
import { Link } from "react-router-dom"

export default function Index({people, createPeople}) {
    //state to hold formData
    const [newForm, setNewForm] = useState({
        name: "",
        image: "", 
        title: "", 
    })

    //handleChange function for form
    const handleChange = (event) => {
        setNewForm((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    }

    //handle submit function for form
    const handleSubmit = (event) => {
        event.preventDefault()
        createPeople(newForm)
        setNewForm({
            name: "",
            image: "",
            title: "",
        })
    }

    const loaded = () => {
        return people.map((person) => (
            <div key={person._id} className="person">
                <Link to={`/people/${person._id}`}>
                    <h1>{person.name}</h1>
                </Link>
                <img src={person.image} alt={person.name} />
                <h3>{person.title}</h3>
            </div>
        ))
    }

    const loading = () => <h1>Loading...</h1>

    return people? loaded() : loading()

    return (
      <section>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newForm.name}
            name="name"
            placeholder="name"
            onChange={handleChange}
          />
          <input
            type="text"
            value={newForm.image}
            name="image"
            placeholder="image URL"
            onChange={handleChange}
          />
           <input
            type="text"
            value={newForm.title}
            name="title"
            placeholder="title"
            onChange={handleChange}
          />
          <input type="submit" value="Create Person" />
        </form>
        {people ? loaded() : loading()}
      </section>
    );
}

