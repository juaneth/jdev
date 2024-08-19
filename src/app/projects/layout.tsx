import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function ProjectsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  let projects = {};

  return (
    <>
      <div className="m-4 flex h-full w-full flex-col items-center">
        <div className="flex w-full max-w-[100rem] flex-row justify-between rounded-xl border border-white/10 bg-white/5 px-6 py-4 shadow shadow-[0px_5px_24px_0px_rgba(248,248,248,0.03)_inset] shadow-xl">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/projects/">Projects</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </BreadcrumbList>
          </Breadcrumb>

          <div className="font-semibold tracking-tight">Select a project</div>

          <div className="flex flex-row items-center gap-3">
            <div className="">GitHub</div>
            <div className="h-1 w-1 rounded-full bg-white"></div>
            <div className="">Article</div>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}
