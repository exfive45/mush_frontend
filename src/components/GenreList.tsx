
import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react"
import  useGenres, { type Genre } from "../hooks/useGenres"
import getCropedImageUrl from "../services/image_url"

interface Props {
    onSelectedGenre:(Genre:Genre)=>void
}

const GenreList = ({onSelectedGenre}:Props) => {
    const {data, isLoading, error}  = useGenres()
    if(error)return null;

    if (isLoading ) return <Spinner />;
  return (
    <>
    <List>
        {data.map((gere)=><ListItem paddingY="6px"   key={gere.id}><HStack><Image boxSize='32px' borderRadius={8} src={getCropedImageUrl(gere.image_background)}/>
        
        <Button onClick={()=>onSelectedGenre(gere)
        } fontSize="lg" variant='link'>{gere.name}</Button>
        </HStack></ListItem>)}
    </List>
    </>
  )
}

export default GenreList