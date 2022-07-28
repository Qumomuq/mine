import {Flex, useColorModeValue as mode} from "@chakra-ui/react";
import Skin from "@/components/mineLauncherComponents/skin";

function Profile() {

    return (<>
            <Flex direction="column" bg={mode('gray.100', 'gray.800')} minHeight="100vh">
                <Skin/>
            </Flex>
        </>
    )
}

export default Profile