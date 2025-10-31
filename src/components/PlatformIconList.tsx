import {FaWindows, FaApple, FaPlaystation, FaXbox, FaLinux,FaAndroid } from 'react-icons/fa'
import { MdOutlinePhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import type { Platform } from "../hooks/useGame"
import { HStack, Icon, Text } from "@chakra-ui/react"
import type { IconType } from 'react-icons'


interface Props {
    platforms: Platform[]
}


export const PlatformIconList = ({platforms}:Props) => {
const iconMap:{[key:string]:IconType} = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  nintendo: SiNintendo,
  ios: MdOutlinePhoneIphone,
  android: FaAndroid,
  mac: FaApple,
  linux: FaLinux,
  web: BsGlobe,
}


  return (
    <HStack marginY={1}>
    {platforms.map((platform)=><Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500'/>

)}
   
    
    </HStack>
  )
}
