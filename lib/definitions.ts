import { JwtPayload } from "jsonwebtoken";

export interface SessionPayload extends JwtPayload {
  userId: string;
}
