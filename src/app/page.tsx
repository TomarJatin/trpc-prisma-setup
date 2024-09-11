import { SignInButton } from "@/components/Buttons/SignInButton";
import { SignOutButton } from "@/components/Buttons/SignOutButton";
import { getServerSession } from "next-auth/next";


export default async function Home() {
  const session = await getServerSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Create <span className="text-[hsl(280,100%,70%)]">Next</span> App
        </h1>
        <div className="flex flex-col items-center gap-2">
          {session ? (
            <>
              <p className="text-2xl text-white">
                Logged in as {session.user?.name}
              </p>
              <SignOutButton />
            </>
          ) : (
            <SignInButton />
          )}
        </div>
      </div>
    </main>
  );
}
