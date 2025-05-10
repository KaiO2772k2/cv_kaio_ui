import React, { useState, useEffect } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State để quản lý trạng thái menu
    const [activeMenu, setActiveMenu] = useState('home'); // State để lưu mục đang được chọn

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Đảo ngược trạng thái menu
    };

    const closeMenu = () => {
        setIsMenuOpen(false); // Đóng menu khi nhấn vào một liên kết
    };

    const handleMenuClick = (menu) => {
        setActiveMenu(menu); // Cập nhật mục đang được chọn
        closeMenu(); // Đóng menu (trong chế độ mobile)
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('div[id]'); // Lấy tất cả các div có id
            let currentSection = 'home'; // Mặc định là 'home'

            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 120; // Trừ đi một khoảng để bù cho header
                const sectionHeight = section.offsetHeight;
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    currentSection = section.getAttribute('id'); // Lấy id của div hiện tại
                }
            });

            setActiveMenu(currentSection); // Cập nhật menu đang được chọn
        };

        window.addEventListener('scroll', handleScroll); // Lắng nghe sự kiện cuộn

        return () => {
            window.removeEventListener('scroll', handleScroll); // Dọn dẹp sự kiện khi component bị hủy
        };
    }, []);

    return (
        <>
            <nav className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 flex items-center">
                                <img 
                                    src="/logo.png" // Đường dẫn đến ảnh logo trong thư mục public
                                    alt="Logo" 
                                    className="h-8 w-auto mr-2" // Thêm các lớp CSS để căn chỉnh kích thước và khoảng cách
                                />
                                <span className="text-xl font-bold text-gray-900">KaiO-Dev</span>
                            </div>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
                            <a
                                href="#home"
                                className={`px-3 py-2 text-sm font-medium ${
                                    activeMenu === 'home' ? 'text-primary border-b-2 border-primary' : 'text-gray-900 hover:text-primary'
                                }`}
                                onClick={() => handleMenuClick('home')}
                            >
                                Home
                            </a>
                            <a
                                href="#about"
                                className={`px-3 py-2 text-sm font-medium ${
                                    activeMenu === 'about' ? 'text-primary border-b-2 border-primary' : 'text-gray-900 hover:text-primary'
                                }`}
                                onClick={() => handleMenuClick('about')}
                            >
                                About
                            </a>
                            <a
                                href="#experience"
                                className={`px-3 py-2 text-sm font-medium ${
                                    activeMenu === 'experience' ? 'text-primary border-b-2 border-primary' : 'text-gray-900 hover:text-primary'
                                }`}
                                onClick={() => handleMenuClick('experience')}
                            >
                                Experience
                            </a>
                            <a
                                href="#projects"
                                className={`px-3 py-2 text-sm font-medium ${
                                    activeMenu === 'projects' ? 'text-primary border-b-2 border-primary' : 'text-gray-900 hover:text-primary'
                                }`}
                                onClick={() => handleMenuClick('projects')}
                            >
                                Projects
                            </a>
                            <a
                                href="#contact"
                                className={`px-3 py-2 text-sm font-medium ${
                                    activeMenu === 'contact' ? 'text-primary border-b-2 border-primary' : 'text-gray-900 hover:text-primary'
                                }`}
                                onClick={() => handleMenuClick('contact')}
                            >
                                Contact
                            </a>
                        </div>
                        <div className="flex items-center sm:hidden">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                                aria-controls="mobile-menu"
                                aria-expanded={isMenuOpen}
                                onClick={toggleMenu}
                            >
                                <span className="sr-only">Open main menu</span>
                                <i className={`${isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}`}></i>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Menu mobile */}
                <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
                    <div className="pt-2 pb-3 space-y-1">
                        <a
                            href="#home"
                            className={`block px-3 py-2 text-base font-medium ${
                                activeMenu === 'home' ? 'text-primary border-b-2 border-primary' : 'text-gray-900 hover:text-primary'
                            }`}
                            onClick={() => handleMenuClick('home')}
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            className={`block px-3 py-2 text-base font-medium ${
                                activeMenu === 'about' ? 'text-primary border-b-2 border-primary' : 'text-gray-900 hover:text-primary'
                            }`}
                            onClick={() => handleMenuClick('about')}
                        >
                            About
                        </a>
                        <a
                            href="#experience"
                            className={`block px-3 py-2 text-base font-medium ${
                                activeMenu === 'experience' ? 'text-primary border-b-2 border-primary' : 'text-gray-900 hover:text-primary'
                            }`}
                            onClick={() => handleMenuClick('experience')}
                        >
                            Experience
                        </a>
                        <a
                            href="#projects"
                            className={`block px-3 py-2 text-base font-medium ${
                                activeMenu === 'projects' ? 'text-primary border-b-2 border-primary' : 'text-gray-900 hover:text-primary'
                            }`}
                            onClick={() => handleMenuClick('projects')}
                        >
                            Projects
                        </a>
                        <a
                            href="#contact"
                            className={`block px-3 py-2 text-base font-medium ${
                                activeMenu === 'contact' ? 'text-primary border-b-2 border-primary' : 'text-gray-900 hover:text-primary'
                            }`}
                            onClick={() => handleMenuClick('contact')}
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;