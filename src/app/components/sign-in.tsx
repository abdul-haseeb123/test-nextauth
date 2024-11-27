import { signIn } from "@/auth";
import Google from "next-auth/providers/google";

export function SignIn() {
  return (
    <form
      action={async (formData) => {
        "use server";
        await signIn("google");
      }}
    >
      <button type="submit">Sign In</button>
    </form>
  );
}
