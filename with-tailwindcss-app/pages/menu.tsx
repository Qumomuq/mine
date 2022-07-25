import {Flex, useColorModeValue as mode} from "@chakra-ui/react";
import Navbar from "@/components/mineLauncherComponents/navbar";
import Footer from "@/components/mineLauncherComponents/footer";
import MenuTable from "@/components/mineLauncherComponents/menuTable";


function Menu() {

    return (<>
            <Flex direction="column" bg={mode('gray.100', 'gray.800')} minHeight="100vh">
                <Navbar/>
                <MenuTable/>
                <Footer/>
            </Flex>
        </>
    )
}

export default Menu