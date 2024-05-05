import Image from "next/image";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";


export default function Home() {
  
  return (
    <div>
      <h2>Ayorbami</h2>
      <LoginLink>Sign in</LoginLink>

      <RegisterLink>Sign up</RegisterLink>
      





    </div>
  );
}


