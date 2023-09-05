import {createContext, ReactNode, useContext, useState} from "react";

type AuthProviderProps = {
    children: ReactNode
}

type AuthContext = {
    id: number | null
    token: string | null
    login: (id: number, token: string) => void
    logout: () => void
}

const AuthContext = createContext({} as AuthContext);

export function useAuthContext() {
    return useContext(AuthContext);
}

export default function AuthProvider({ children }: AuthProviderProps) {
    const [id, setId] = useState<number | null>(null);
    const [token, setToken] = useState<string | null>(null);

    function login(id: number, token: string) {
        setId(id);
        setToken(token);
    }

    function logout() {
        setId(null);
        setToken(null);
    }

    return (
        <AuthContext.Provider value={{
            id,
            token,
            login,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    )
}
