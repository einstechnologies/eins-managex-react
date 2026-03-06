import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../../ts/api/login/login_service";
import type { LoginRequest } from "../../ts/api/login/login_request_response";
import { useNavigate } from "react-router-dom";


export const useLogin = () => {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: (credentials: LoginRequest) => loginUser(credentials),
        onSuccess: async (data) => {
            localStorage.setItem('token', data.token);
            localStorage.setItem('loginUserId', data.userId.toString());
            await new Promise((resolve) => setTimeout(resolve, 800));
            // Push a blocker entry BEFORE replacing with Home
            window.history.pushState(null, "", "/EINS_ManageX/Home");
            navigate("/EINS_ManageX/Home", { replace: true });
            console.log('Logged in as:', data.username, '| Role:', data.userRole)
        },

    });
}