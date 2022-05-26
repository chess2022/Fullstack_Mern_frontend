import { useState } from "react"
import { Link } from "react-router-dom"

export default function Index({people, createPeople}) {
    //state to hold formData
    const [form, setForm] = useState({
        name: "",
        image: "", 
        title: "", 
    })

    //handleChange function for form
    const handleChange = (event) => {
        setForm((form) => ({
            ...form,
            [event.target.name]: event.target.value,
        }))
    }

    //handle submit function for form
    const handleSubmit = (event) => {
        event.preventDefault()
        createPeople(form)
        setForm({
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

    // return people? loaded() : loading()

    return (
      <section>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={form.name}
            name="name"
            placeholder="name"
            onChange={handleChange}
          />
          <input
            type="text"
            value={form.image}
            name="image"
            placeholder="image URL"
            onChange={handleChange}
          />
           <input
            type="text"
            value={form.title}
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

