import { Card, CardBody, Heading, HStack, Image, } from "@chakra-ui/react"
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
    
<Card >
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