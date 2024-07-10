import {projects} from "../../assets/utils/constants";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {ProjectCategories} from "../../assets/utils/constants";

export default function ProjectsList() {
    const [selectedFilter, setFilter] = useState<string>('All');
    const [filteredProjects, setProjects] = useState(projects);

    useEffect(() => {
        setProjects(selectedFilter === 'All' ? projects : projects.filter((project) => project.category === selectedFilter));
    }, [selectedFilter]);

    return (
        <div className="mt-10 md:mt-20">
            <div className="container">
                <div className="flex max-md:flex-col md:justify-between max-md:gap-10 md:items-end max-md:mb-20">
                    <div className="flex flex-col">
                        <h2 className="section-header-subtitle">
                            Our Work
                        </h2>
                        <h3 className="section-header-main-heading">
                            Projects
                        </h3>
                    </div>

                    <div className="flex md:mb-3">
                        <div className={`relative light mr-3 ${selectedFilter === 'All' ? 'text-primary' : ''}`} onClick={() => setFilter('All')}>
                            <span>All</span>
                            <span className="project-filters-amount">{projects.length}</span>
                        </div>
                        {Object.values(ProjectCategories).map((category, index) => {
                            const projectCount = projects.filter((project) => project.category === category).length;
                            return (
                                <div className="flex items-center" key={index} onClick={() => setFilter(category)}>
                                    <div className="w-1 h-1 bg-light mx-6"></div>
                                    <div className={`relative font-light ${selectedFilter === category ? 'text-primary' : ''}`}>
                                        <span>{category}</span>
                                        <span className="project-filters-amount">{projectCount}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 md:mt-20 items-stretch">
                    {filteredProjects.map((project, index) => {
                        return <ProjectCard project={project} key={index} />
                    })}
                </div>
            </div>
        </div>
    )
}

interface ProjectCardProps {
    project: any;
}

function ProjectCard({ project } : ProjectCardProps) {
    return (
        <Link to="">
            <div className="flex flex-col h-full">
                <div className="relative h-full bg-dark-gray p-5 transition duration-500 ease-in-out">
                    <div className="overflow-hidden h-[300px]" style={{ background: project.color }}>
                        <img src={project.images[0]} alt={project.title}/>
                    </div>
                    <div className="project-overlay font-medium">
                        <h4 className="text-gray-text mt-5 mb-2 transition duration-500 ease-in-out">
                            {project.subtitle}
                        </h4>
                        <p className="text-xl md:text-2xl text-[#f9f6f1]">
                            {project.title}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

