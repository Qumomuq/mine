import {Flex, useColorModeValue as mode} from "@chakra-ui/react";
import Navbar from "@/components/mineLauncherComponents/navbar";
import Footer from "@/components/mineLauncherComponents/footer";
import Skin from "@/components/mineLauncherComponents/skin";

function Profile() {

    return (<>
            <Flex direction="column" bg={mode('gray.100', 'gray.800')} minHeight="100vh">
                <Navbar/>
                <Skin/>
                <Footer/>
            </Flex>
        </>
    )
}

export default Profile