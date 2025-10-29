import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react"
import type { Game } from "../hooks/useGame"
import { PlatformIconList } from "./PlatformIconList"
import CreditScore from "./CreditScore"
import getCropedImageUrl from "../services/image_url"

interface Props {
    game:Game
}
const GameCard = ({game}:Props) => {


  return (
    <>
    
<Card borderRadius={10} overflow='hidden' width='250'>
    <Image src={getCropedImageUrl(game.background_image)}/>
    <CardBody>
    <Heading fontSize="xl">{game.name}</Heading>

    <HStack justify={"space-between"}>
    <PlatformIconList platforms={game.parent_platforms.map((p)=>p.platform)}/>
    <CreditScore score={game.metacritic}/>
    </HStack>
    </CardBody>
</Card>
    
    </>
  )
}

export default GameCard