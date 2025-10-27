import { HStack, Switch, Text, useColorMode} from "@chakra-ui/react"

export const ColorMoswSwitch = () => {

  const {toggleColorMode, colorMode} =  useColorMode()
  return (
    <HStack>
        <Switch isChecked={colorMode==='dark'} onChange={toggleColorMode} colorScheme='green'/>
        <Text>color mode</Text>
    </HStack>
  )
}
