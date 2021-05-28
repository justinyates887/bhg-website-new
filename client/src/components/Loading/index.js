import { Center } from "@chakra-ui/layout";
import ReactLoading from "react-loading";

export function Loader() {

    return (
        <Center h="800px">
            <ReactLoading 
                type={"bars"}
                color={"#0080ff"}
                height={100}
                width={100}
            />
        </Center>
    )
}