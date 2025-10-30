import useGenres from "../hooks/useGenres"

const GenreList = () => {
    const {genres} = useGenres()
  return (
    <>
    <ul>
        {genres.map((gere)=><li key={gere.id}>{gere.name}</li>)}
    </ul>
    </>
  )
}

export default GenreList