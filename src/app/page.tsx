import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignOutButton, SignUpButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return(
  <div>
    <h1>home page</h1>
    <SignedOut>
    <SignUpButton mode="modal">sign up</SignUpButton>
    </SignedOut>

    <SignedIn>
      <SignOutButton>logout</SignOutButton>
    </SignedIn>
  </div>
  )
}
