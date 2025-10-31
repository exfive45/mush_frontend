import { Grid, GridItem, Show  } from "@chakra-ui/react"
import { NavBar } from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"
import type { Genre } from "./hooks/useGenres"

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  return (
    <>
    <Grid templateAreas={{
  base: `"nav nav" "main main"`, // aside removed
  lg: `"nav nav" "aside main"`   // aside shown
}}

templateColumns={{
  base:"1fr",
  lg:"200px 1fr"
}}
>
      <GridItem area="nav" bg='red'>< NavBar/></GridItem>

      <Show above="lg">
      <GridItem area="aside" paddingX={5} ><GenreList onSelectedGenre={(genre)=>setSelectedGenre(genre)} /></GridItem>
      </Show>

      <GridItem area="main" bg="blue"><GameGrid selectedGenre={selectedGenre} /></GridItem>


    </Grid>
    </>
  )
}

export default App