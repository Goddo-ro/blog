import {createContext, ReactNode, useContext, useState} from "react";
import {User} from "../types/User.tsx";

type AuthProviderProps = {
    children: ReactNode
}

type AuthContext = {
    id: number | undefined
    token: string | undefined
    image: string | undefined
    login: (user: User) => void
    logout: () => void
}

const AuthContext = createContext({} as AuthContext);

export function useAuthContext() {
    return useContext(AuthContext);
}

export default function AuthProvider({ children }: AuthProviderProps) {
    const [id, setId] = useState<number | undefined>(undefined);
    const [token, setToken] = useState<string | undefined>(undefined);
    const [image, setImage] = useState<string | undefined>(undefined);

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
            login,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    )
}
