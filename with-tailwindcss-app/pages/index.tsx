import {Flex, useColorModeValue as mode} from "@chakra-ui/react";
import Navbar from "@/components/mineLauncherComponents/navbar";
import Footer from "@/components/mineLauncherComponents/footer";
import MainPage from "@/components/mineLauncherComponents/content/mainPage";


function Index() {

    return (<>
            <Flex direction="column" bg={mode('gray.100', 'gray.800')} minHeight="100vh">
                <div className="bg-gradient-to-l from-[#94bbe9] via-[#bdb3d0] to-[#94bbe9]">
                    <div className="my-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <MainPage/>
                    </div>
                </div>
            </Flex>
        </>
    )
}

export default Index