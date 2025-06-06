import Link from "next/link";
// import { buttonVariants } from "./ui/button";
import { ShipIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t w-full h-16">
      <div className="container flex items-center sm:justify-between justify-center sm:gap-0 gap-4 h-full text-muted-foreground text-sm flex-wrap sm:py-0 py-3 max-sm:px-4">
        <div className="flex items-center gap-3">
          <ShipIcon className="sm:block hidden w-5 h-5 text-muted-foreground" />
          <p className="text-center">
            Maintain by{" "}
            <Link
              className="px-1 underline underline-offset-2"
              href="https://github.com/wildanaziz"
            >
              Willi (PIC)
            </Link>
            . See our organizations on {" "}
            <Link
              className="px-1 underline underline-offset-2"
              href="https://github.com/wildanaziz/TL-Vision"
            >
              GitHub
            </Link>
            .
          </p>
        </div>

        <div className="gap-4 items-center hidden md:flex">
          {/* <FooterButtons /> */}
        </div>
      </div>
    </footer>
  );
}

// export function FooterButtons() {
//   return (
//     <>
//       <Link
//         href="https://vercel.com/templates/next.js/documentation-template"
//         className={buttonVariants({ variant: "outline", size: "sm" })}
//       >
//         <TriangleIcon className="h-[0.8rem] w-4 mr-2 text-primary fill-current" />
//         Deploy
//       </Link>
//       <Link
//         href="https://github.com/sponsors/nisabmohd"
//         className={buttonVariants({ variant: "outline", size: "sm" })}
//       >
//         <HeartIcon className="h-4 w-4 mr-2 text-red-600 fill-current" />
//         Sponsor
//       </Link>
//     </>
//   );
// }
