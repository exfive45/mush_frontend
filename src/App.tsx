import { Grid, GridItem, Show  } from "@chakra-ui/react"
import { NavBar } from "./components/NavBar"

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

      <GridItem area="main" bg="blue">main</GridItem>


    </Grid>
    </>
  )
}

export default App