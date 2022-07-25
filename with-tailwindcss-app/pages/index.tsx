import {Flex, useColorModeValue as mode} from "@chakra-ui/react";
import Navbar from "@/components/mineLauncherComponents/navbar";
import Footer from "@/components/mineLauncherComponents/footer";
import MainPage from "@/components/mineLauncherComponents/content/mainPage";


function Index() {

    return (<>
            <Flex direction="column" bg={mode('gray.100', 'gray.800')} minHeight="100vh">
                <Navbar/>
                <MainPage/>
                <Footer/>
            </Flex>
        </>
    )
}

export default Index