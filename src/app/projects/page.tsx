import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data";

const Project = () => {
  return (
    <div className="mt-10 w-[1300px] max-w-[90%] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mx-auto">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            thumbnail={project.thumbnail}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;


