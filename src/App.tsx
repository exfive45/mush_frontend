import { Grid, GridItem, Show  } from "@chakra-ui/react"
import { NavBar } from "./components/NavBar"
import GameGrid from "./components/GameGrid"

const App = () => {
  return (
    <>
    <Grid templateAreas={{
  base: `"nav nav" "main main"`, // aside removed
  lg: `"nav nav" "aside main"`   // aside shown
}}>
      <GridItem area="nav" bg='red'>< NavBar/></GridItem>

      <Show above="lg">
      <GridItem area="aside" bg='yellow'>aside</GridItem>
      </Show>

      <GridItem area="main" bg="blue"><GameGrid /></GridItem>


    </Grid>
    </>
  )
}

export default App