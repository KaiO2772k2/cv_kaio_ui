import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios

const ProjectsSection = () => {
    const [projects, setProjects] = useState([]); // State để lưu danh sách dự án
    const [loading, setLoading] = useState(true); // State để theo dõi trạng thái tải dữ liệu

    // Base URL cho hình ảnh
    const BASE_IMAGE_URL = "https://res.cloudinary.com/dzdpbg0wg/";

    useEffect(() => {
        // Gọi API để lấy dữ liệu dự án
        const fetchProjects = async () => {
            try {
                const response = await axios.get('https://api-cv-tranvannghia.up.railway.app/api/get_projects_by_language/');
                console.log('API Response:', response.data); // Kiểm tra dữ liệu trả về từ API
                setProjects(Array.isArray(response.data) ? response.data : []); // Đảm bảo dữ liệu là một mảng
            } catch (error) {
                console.error('Error fetching projects:', error);
            } finally {
                setLoading(false); // Tắt trạng thái loading
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
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Featured Projects</h2>
                    <div className="w-20 h-1 bg-primary mx-auto"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
                        >
                            <img
                                className="w-full h-48 object-cover"
                                src={
                                    project.image.startsWith("http")
                                        ? project.image // Nếu đã là URL đầy đủ
                                        : `${BASE_IMAGE_URL}${project.image}` // Thêm tiền tố nếu không phải URL đầy đủ
                                }
                                alt={project.name || 'Project Image'}
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.name}</h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.languages?.map((language, langIndex) => (
                                        <span
                                            key={langIndex}
                                            className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800"
                                        >
                                            {language.name}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={project.link || '#'}
                                    className="text-primary font-medium inline-flex items-center"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Project <i className="fas fa-arrow-right ml-2"></i>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectsSection;