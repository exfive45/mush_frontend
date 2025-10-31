import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronBarDown } from "react-icons/bs"
import usePlatform from "../hooks/usePlatForm"


const PlateFormSelector = () => {

    const {data, error} = usePlatform()

    if (error) return null

  return (
    <Menu>
        <MenuButton 
        as={Button} 
        rightIcon={<BsChevronBarDown/>}
      >
        Select Platform
        </MenuButton>
        <MenuList>
        {data.map(platForm =><MenuItem key={platForm.id}>{platForm.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlateFormSelector