import { Link } from "@remix-run/react";
import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <div className="relative sm:pb-16 sm:pt-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src="https://cgfjpzrnyiqtomxrgprp.supabase.co/storage/v1/object/public/slipstream-images/images/background.jpg?t=2023-05-03T18%3A16%3A21.748Z"
                alt="F1 race start Abu Dhabi"
              />
              <div className="absolute inset-0 bg-[color:rgba(139,92,246,0.5)] mix-blend-multiply" />
            </div>
            <div className="lg:pb-18 relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pt-32">
              <h1 className="text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
                <span className="block uppercase text-white drop-shadow-md">
                  Slipstream F1
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl">
                Fantasy F1 Draft Picks
              </p>
              <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                {user ? (
                  <Link
                    to="/notes"
                    className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-black-700 shadow-sm hover:bg-white-50 sm:px-8"
                  >
                    View Notes for {user.email}
                  </Link>
                ) : (
                  <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                    <Link
                      to="/join"
                      className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-black-700 shadow-sm hover:bg-white-50 sm:px-8"
                    >
                      Register
                    </Link>
                    <Link
                      to="/login"
                      className="flex items-center justify-center rounded-md bg-white-500 px-4 py-3 font-medium text-black hover:bg-white-600  "
                    >
                      Log In
                    </Link>
                  </div>
                )}
              </div>
              <a href="https://slipstreamf1-production.up.railway.app/home">
                <img
                  src="https://cgfjpzrnyiqtomxrgprp.supabase.co/storage/v1/object/public/slipstream-images/images/customLogoWhite.png?t=2023-05-03T18%3A19%3A10.296Z"
                  alt="Slipstream Logo"
                  className="mx-auto mt-16 w-full max-w-[12rem] md:max-w-[16rem]"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl py-2 px-4 sm:px-6 lg:px-8">
          <div className="mt-6 flex flex-wrap justify-center gap-8">
          {[
              {
                src: "https://cgfjpzrnyiqtomxrgprp.supabase.co/storage/v1/object/public/slipstream-images/images/customLogoBlack.png?t=2023-05-03T18%3A59%3A29.564Z",
                alt: "Slipstream",
                href: "https://slipstreamf1-production.up.railway.app/home",
              },
              {
                src: "https://cgfjpzrnyiqtomxrgprp.supabase.co/storage/v1/object/public/slipstream-images/images/In-Blue-96.png?t=2023-05-03T18%3A46%3A41.175Z",
                alt: "LinkedIn",
                href: "https://www.linkedin.com/in/niall-j-murray/",
              },
            ].map((img) => (
              <a
                key={img.href}
                href={img.href}
                className="flex h-16 w-32 justify-center p-1 grayscale transition hover:grayscale-0 focus:grayscale-0"
              >
                <img alt={img.alt} src={img.src} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
