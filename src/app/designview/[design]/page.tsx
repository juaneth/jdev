import Link from "next/link";
import Image from "next/image";

export default function DesignView({ params }: { params: { design: string } }) {
  let designs = [
    {
      name: "Trimego",
      description:
        "Frontend design and develoment for the unreleased sandbox game",
      subdescription:
        "Designs for the unreleased sandbox game Trimego, I'm now working with them as a frontend developer building out the cover site and main app",
      lastUpdate: "Aug 2024",
      screenshots: [
        {
          display: "First design revision",
          image: "/screenshots/trimego/1.png",
        },
        {
          display: "Second design revision",
          image: "/screenshots/trimego/2.png",
        },
        {
          display: "Cover site design",
          image: "/screenshots/trimego/3.png",
        },
        {
          display: "Logos/Branding",
          image: "/screenshots/trimego/4.png",
        },
      ],
    },
  ];

  let designItem = designs.find((data) => data.name === params.design);

  return (
    <>
      <div className="m-5 rounded-lg bg-white px-6 py-5 text-black">
        <div className="text-2xl font-semibold tracking-tight">
          {designItem?.name}
        </div>
        <p className="text-lg">{designItem?.description}</p>
        <p className="mt-3 text-sm text-black/70">
          {designItem?.subdescription}
        </p>
      </div>
      <div className="flex flex-col gap-3 p-4">
        {designItem?.screenshots.map((item) => (
          <Link
            className="relative flex h-min w-full flex-col gap-1"
            key={designItem.name}
            href={item.image}
          >
            <div className="absolute right-5 top-5 rounded-lg border border-black/30 bg-white/70 px-4 py-3 text-lg font-semibold tracking-tighter text-black backdrop-blur-sm">
              {item.display}
            </div>
            <Image
              alt={item.display}
              src={item.image}
              className="h-full w-full rounded-lg"
              width={1920}
              height={1080}
            ></Image>
          </Link>
        ))}
      </div>
    </>
  );
}
