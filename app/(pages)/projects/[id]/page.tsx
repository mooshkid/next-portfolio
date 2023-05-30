import { notFound } from "next/navigation";
import projectData from "@/app/data/data";

const projects = projectData.projects.projects;

// Return a list of `params` to populate the [id] dynamic segment
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.slug,
  }));
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  const project = projects.find((project) => project.slug === id);

  if (!project) {
    notFound();
  }

  const { title, desc } = project;

  return (
    <>
      <main>
        <div>
          <p>{id}</p>
          <p>{title}</p>
          <p>{desc}</p>
        </div>
      </main>
    </>
  );
}
