import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {User as UserType} from "../types/User.tsx";
import {useFetching} from "../hooks/useFetching.tsx";
import UserService from "../services/UserService.tsx";
import {Box} from "@chakra-ui/react";
import UserInfo from "../components/UserInfo.tsx";

export default function User() {
    const [user, setUser] = useState<UserType>();

    const [fetchUser, isUserLoading] = useFetching(async (id: number) => {
        const response = await UserService.getUserById(id);
        setUser(response.data);
    })

    const {id} = useParams();

    useEffect(() => {
        fetchUser(id);
    }, []);

    return (
        <Box>
            {
                !isUserLoading && <UserInfo user={user}/>
            }
        </Box>
    )
}
