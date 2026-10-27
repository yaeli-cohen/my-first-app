function ShowInput() {
  function handleChange(e) {
    console.log(e.target.value)
  }

  return <input onChange={handleChange} />
}

export default ShowInput
