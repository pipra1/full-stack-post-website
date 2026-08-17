import React from 'react'
import { useNavigate } from 'react-router-dom'

function CreatePost() {
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    try {
      const response = await fetch('http://localhost:4000/create-post', {
        method: 'POST',
        body: formData,
      })

      if(response.ok) {
        const data = await response.json()
        console.log('Post created:', data)

        navigate('/feed')
      }
      else {
        console.log("Failed to create post");
      }
    } catch(error) {
      console.log("Error sending data:", error);
      
    }
  }

  return (
    <section className="create-post-section">
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" name="image" accpet="image/*" />
        <input type="text" name="caption" placeholder='Enter caption' required />

        <button type='submit'> Submit </button>
      </form>
    </section>
  )
}

export default CreatePost