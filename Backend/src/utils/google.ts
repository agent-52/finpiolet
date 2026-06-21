import { OAuth2Client } from "google-auth-library";
import { env } from "../config/env";

const GOOGLE_CLIENT_ID = env.GOOGLE_CLIENT_ID;

const googleClient = new OAuth2Client(env.GOOGLE_CLIENT_ID);

export async function verifyGoogleToken(googleToken: string) {
  if (!GOOGLE_CLIENT_ID) {
    throw new Error("GOOGLE CLIENT ID NOT ACCESSABLE");
  }
  try {
    const ticket = await googleClient.verifyIdToken({
      idToken: googleToken,
      audience: GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    if (!payload) {
      throw new Error("Invalid token payload");
    }

    return {
      email: payload.email,
      name: payload.name,
      picture: payload.picture,
      sub: payload.sub,
    };
  } catch (error) {
    throw new Error("Google Token Verification Failed");
  }
}
