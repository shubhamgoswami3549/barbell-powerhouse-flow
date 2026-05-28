import { createFileRoute } from "@tanstack/react-router";
import { AuthPage } from "./login";

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [{ title: "Sign Up — Barbell Fitness" }] }),
  component: () => <AuthPage mode="signup" />,
});
