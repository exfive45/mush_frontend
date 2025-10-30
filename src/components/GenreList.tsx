
import  useGenres from "../hooks/useGenres"


const GenreList = () => {
    const {data} = useGenres()
  return (
    <>
    <ul>
        {data.map((gere)=><li key={gere.id}>{gere.name}</li>)}
    </ul>
    </>
  )
}

export default GenreList