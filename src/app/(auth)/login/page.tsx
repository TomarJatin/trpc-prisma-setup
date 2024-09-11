"use client";
import { Button } from "@/components/ui/button";
// import { NEXT_GOOGLE_AUTH_CLIENT_ID, NEXT_GOOGLE_AUTH_REDIRECT_URI } from '@/constants/api';
import Link from "next/link";
import { signIn } from "next-auth/react";

const GetStarted = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gradient-to-b from-blue-50 via-gray-50 to-red-50">
        <div className="z-10 flex flex-col items-center gap-3">
          <p className="text-[22px] font-medium text-[#3D386B]">Welcome</p>
          <p className="font-regular text-[22px] text-[#759AAB]">
            Continue with your account
          </p>
        </div>
        <Button
          className="z-10 flex w-[491px] gap-[23px] border-[#C4C4C4] bg-[#FBFCFD] px-[111px] py-[26px] hover:bg-[#563C5C] hover:text-white"
          variant="outline"
          onClick={() => signIn("google")}
        >
          <svg
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.7374 10.856H25.65V10.8H13.5V16.2H21.1295C20.0165 19.3435 17.0255 21.6 13.5 21.6C9.02678 21.6 5.4 17.9732 5.4 13.5C5.4 9.02678 9.02678 5.4 13.5 5.4C15.5648 5.4 17.4433 6.17895 18.8737 7.45132L22.6922 3.63285C20.281 1.38577 17.0559 0 13.5 0C6.04463 0 0 6.04463 0 13.5C0 20.9554 6.04463 27 13.5 27C20.9554 27 27 20.9554 27 13.5C27 12.5948 26.9069 11.7113 26.7374 10.856Z"
              fill="#FFC107"
            />
            <path
              d="M1.55713 7.21642L5.99255 10.4693C7.1927 7.4979 10.0993 5.4 13.5006 5.4C15.5654 5.4 17.4439 6.17895 18.8743 7.45132L22.6927 3.63285C20.2816 1.38577 17.0565 0 13.5006 0C8.31523 0 3.81838 2.92747 1.55713 7.21642Z"
              fill="#FF3D00"
            />
            <path
              d="M13.5008 26.9999C16.9878 26.9999 20.1563 25.6654 22.5519 23.4953L18.3736 19.9596C17.0182 20.9863 15.3334 21.5999 13.5008 21.5999C9.98945 21.5999 7.00797 19.3609 5.88477 16.2363L1.48242 19.6282C3.71667 24.0002 8.25402 26.9999 13.5008 26.9999Z"
              fill="#4CAF50"
            />
            <path
              d="M26.7367 10.8562H25.6493V10.8002H13.4993V16.2002H21.1288C20.5942 17.7101 19.6229 19.0122 18.3701 19.9606C18.3707 19.9599 18.3714 19.9599 18.3721 19.9592L22.5503 23.4949C22.2547 23.7635 26.9993 20.2502 26.9993 13.5002C26.9993 12.595 26.9061 11.7114 26.7367 10.8562Z"
              fill="#1976D2"
            />
          </svg>
          <p className="font-regular text-[20px]">Continue with Google</p>
        </Button>

        <footer className="z-10 text-center text-[#759AAB] dark:text-gray-500">
          By continuing, you acknowledge that you understand
          <br /> and agree to the{" "}
          <Link href="/auth" className="font-medium underline">
             Terms & Conditions 
          </Link>{" "}
          and Privacy 
        </footer>
      </div>
    </>
  );
};

export default GetStarted;
