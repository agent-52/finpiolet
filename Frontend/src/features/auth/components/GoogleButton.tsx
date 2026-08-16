import { GoogleLogin } from "@react-oauth/google";
import { googleAuth } from "../api";
import { setAccessToken } from "../../../lib/token";
import { useAuthStore } from "../store/authStore";

export function GoogleSignInButton() {
  const login = useAuthStore((state) => state.login);

  return (
    <GoogleLogin
      onSuccess={async (credentialResponse) => {
        const googleToken = credentialResponse.credential;
        if (!googleToken) {
          console.error("No credential in response:", credentialResponse);
          return;
        }
        const googleResponse = await googleAuth(googleToken);
        setAccessToken(googleResponse.accessToken);
        login(googleResponse.user);
      }}
      onError={() => {
        console.log("Google Login Failed");
      }}
    />
  );
}
