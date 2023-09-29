import { createCookieSessionStorage } from "@remix-run/node";

type SessionData = {
  flash: {
    type: "success" | "error";
    message: string;
  };
};

export const sessionStorage = createCookieSessionStorage<SessionData>({
  cookie: {
    name: "__session",
    secrets: ["r3m1xr0ck5"],
    sameSite: "lax",
  },
});
