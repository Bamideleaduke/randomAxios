import React,{useState} from 'react'
import axios from 'axios';

const url = 'https://course-api.com/axios-tutorial-post';


const PostRequest = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
 
    const handleSubmit = async (e) => {
        e.preventDefault();
try {
    const response = await axios.post(url,{name:name, email:email})
    console.log(response.data.user.name)
    setEmail('')
    setName('')
} catch (error) {
    console.log(error.response)
}        
      
        };
    return (
    <section className="formSection">
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-control">
        <input type="submit" name="submit" id="submit" />
      </div>
    </form>
    <p>my name is {name}</p>
    <p>your email address is {email}</p>
  </section>
  )
}

export default PostRequest
