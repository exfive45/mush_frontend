
import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react"
import  useGenres from "../hooks/useGenres"
import getCropedImageUrl from "../services/image_url"


const GenreList = () => {
    const {data, isLoading, error}  = useGenres()
    if(error)return null;

    if (isLoading ) return <Spinner />;
  return (
    <>
    <List>
        {data.map((gere)=><ListItem paddingY="6px"   key={gere.id}><HStack><Image boxSize='32px' borderRadius={8} src={getCropedImageUrl(gere.image_background)}/>
        
        <Text fontSize="lg">{gere.name}</Text>
        </HStack></ListItem>)}
    </List>
    </>
  )
}

export default GenreList