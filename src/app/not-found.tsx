import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <div className="flex h-screen w-full items-center justify-center text-center text-2xl">
        <p className="text-2xl">
          Sorry... unfortunately either you made a typo, or I made a typo.
          <br></br>
          You can come back in an hour or two or you can{" "}
          <Button
            variant={"link"}
            className="p-0 text-2xl font-normal text-blue-300"
          >
            <Link href={"/"}>go back to home.</Link>
          </Button>
        </p>
      </div>
    </>
  );
}
