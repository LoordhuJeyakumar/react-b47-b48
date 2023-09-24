function App(Props) {

  const { notes } = Props;
  const addNote = (event)=>{
    event.preventDefault();
  console.log(event.target);

  }
  return (

    <div>
      <p>Hello World!</p>
      <ul>
        {
          notes.map((note, index) => {
            return <li key={index} >{note.content}</li>
          })
        }
      </ul>

      <form action="">
        <input type="text" />
        <button onClick={addNote}>Save Note</button>
      </form>
    </div>
  )
}

export default App; 