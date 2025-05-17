import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // 👈 Thêm dòng này

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const BASE_IMAGE_URL = "https://res.cloudinary.com/dzdpbg0wg/";

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://api-cv-tranvannghia.up.railway.app/api/get_projects_by_language/');
        setProjects(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div className="text-center py-16">Loading projects...</div>;
  }

  if (!projects.length) {
    return <div className="text-center py-16 text-red-500">No projects available.</div>;
  }

  return (
    <div id="projects" className="bg-gray-50 py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
              <img
                className="w-full h-48 object-cover"
                src={
                  project.image?.startsWith("http")
                    ? project.image
                    : `${BASE_IMAGE_URL}${project.image}`
                }
                alt={project.name || 'Project Image'}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.languages?.map((language, langIndex) => (
                    <span key={langIndex} className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                      {language.name}
                    </span>
                  ))}
                </div>
                    <Link
                      to={`/projects/${project.id}`}
                      className="text-primary font-medium inline-flex items-center"
                    >
                      View Project <i className="fas fa-arrow-right ml-2"></i>
                    </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
