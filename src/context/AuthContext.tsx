import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {User} from "../types/User.tsx";
import {useLocalStorage} from "../hooks/useLocalStorage.tsx";
import {useFetching} from "../hooks/useFetching.tsx";
import UserService from "../services/UserService.tsx";

type AuthProviderProps = {
    children: ReactNode
}

type AuthContext = {
    id: number | undefined
    token: string | undefined
    image: string | undefined
    isUserLoading: boolean
    login: (user: User) => void
    logout: () => void
}

const AuthContext = createContext({} as AuthContext);

export function useAuthContext() {
    return useContext(AuthContext);
}

export default function AuthProvider({ children }: AuthProviderProps) {
    const [id, setId] = useLocalStorage("id", undefined);
    const [token, setToken] = useLocalStorage("token", undefined);
    const [image, setImage] = useState<string | undefined>(undefined);

    const [fetchUser, isUserLoading, error] = useFetching(async (id: number) => {
        const response = await UserService.getUserById(id);
        if (response) {
            setImage(response.data.image);
        }
    })

    useEffect(() => {
        if (id && !image) {
            fetchUser(id);
        }
        if (error)
            logout();
    }, []);

    function login(user: User) {
        setId(user.id);
        user.token && setToken(user.token);
        setImage(user.image);
    }

    function logout() {
        setId(undefined);
        setToken(undefined);
    }

    return (
        <AuthContext.Provider value={{
            id,
            token,
            image,
            isUserLoading,
            login,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    )
}
