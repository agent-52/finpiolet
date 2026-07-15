import { OAuth2Client } from "google-auth-library";
import { env } from "../config/env";
import { ApiError } from "./ApiError";

const GOOGLE_CLIENT_ID = env.GOOGLE_CLIENT_ID;

const googleClient = new OAuth2Client(env.GOOGLE_CLIENT_ID);

export async function verifyGoogleToken(googleToken: string) {
  if (!GOOGLE_CLIENT_ID) {
    throw new ApiError(400, "GOOGLE CLIENT ID NOT ACCESSABLE");
  }
  try {
    const ticket = await googleClient.verifyIdToken({
      idToken: googleToken,
      audience: GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    if (!payload) {
      throw new ApiError(400, "Invalid token payload");
    }

    return {
      email: payload.email,
      name: payload.name,
      picture: payload.picture,
      sub: payload.sub,
    };
  } catch (error) {
    throw new ApiError(500, "Google Token Verification Failed");
  }
}
