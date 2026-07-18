import { AiRole } from "../generated/prisma/enums";

export type ConversationHistory = {
 role: AiRole;
 message: string;
}[]