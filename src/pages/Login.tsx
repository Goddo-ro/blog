import LoginForm from "../components/LoginForm.tsx";
import {useFetching} from "../hooks/useFetching.tsx";
import UserService from "../services/UserService.tsx";
export default function Login() {
    const [login, isLoading, error, setError] = useFetching(async (username: string, password: string) => {
        const response = await UserService.login(username, password);
        console.log(response)
    })

    return (
        <LoginForm callback={login} isLoading={isLoading} error={error} setError={setError} />
    )
}
