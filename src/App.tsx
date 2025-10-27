import { Grid, GridItem, Show  } from "@chakra-ui/react"
import { NavBar } from "./components/NavBar"

const App = () => {
  return (
    <>
    <Grid templateAreas={{
      base:`"nav nav" "aside main"`,
      sm:`"nav " " main"`
    }}>
      <GridItem area="nav" bg='red'>< NavBar/></GridItem>

      <Show above="lg">
      <GridItem area="aside" bg='yellow'>aside</GridItem>
      </Show>

      <GridItem area="main" bg="black">main</GridItem>


    </Grid>
    </>
  )
}

export default App