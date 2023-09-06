import LoginForm from "../components/LoginForm.tsx";
import {useFetching} from "../hooks/useFetching.tsx";
import UserService from "../services/UserService.tsx";
import {useAuthContext} from "../context/AuthContext.tsx";
import {Navigate} from "react-router-dom";
export default function Login() {
    const {id, login} = useAuthContext();

    if (id) return <Navigate to={"/"} />;

    const [loginFetch, isLoading, error, setError] = useFetching(async (username: string, password: string) => {
        const response = await UserService.login(username, password);
        if (!error)
            login({
                id: response.data.id,
                token: response.data.token,
                image: response.data.image,
                username: response.data.username,
            })
    })

    return (
        <LoginForm callback={loginFetch} isLoading={isLoading} error={error} setError={setError} />
    )
}
