import React from "react";
import { SignIn } from "./components/sign-in";
import { auth, signOut } from "@/auth";

export default async function page() {
  const session = await auth();

  console.log(session);
  console.log(session?.user);

  if (!session?.user) {
    return (
      <div>
        <SignIn />
      </div>
    );
  }

  return (
    <div>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">Sign Out</button>
      </form>
    </div>
  );
}
