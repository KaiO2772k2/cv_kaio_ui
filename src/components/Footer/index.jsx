import React from 'react';

const Footer = () => {
    return (
        <>
            <footer class="bg-dark text-white py-12 px-4 sm:px-6 lg:px-8" data-id="f7jhwduz" data-line="388-417">
                <div class="max-w-7xl mx-auto" data-id="y99dvvm0" data-line="389-416">
                    <div class="flex flex-col md:flex-row justify-between items-center" data-id="0cmidlxd" data-line="390-412">
                        <div class="mb-6 md:mb-0" data-id="jb3xjzhq" data-line="391-397">
                            <div class="flex items-center" data-id="jkx2edp3" data-line="392-395">
                                <img 
                                    src="/logo.png" // Đường dẫn đến ảnh logo trong thư mục public
                                    alt="Logo" 
                                    className="h-8 w-auto mr-2" // Thêm các lớp CSS để căn chỉnh kích thước và khoảng cách
                                />
                                <span class="text-xl font-bold" data-id="wi9pysbx" data-line="394-394">KaiO-Dev</span>
                            </div>
                            <p class="mt-2 text-gray-400" data-id="82ngnx3x" data-line="396-396">Building digital solutions with passion.</p>
                        </div>
                        <div class="flex space-x-6" data-id="yre7fj56" data-line="398-411">
                            <a
                                href="https://github.com/KaiO277" // Thay "your-github-username" bằng tên GitHub của bạn
                                className="text-gray-400 hover:text-white"
                                target="_blank" // Mở liên kết trong tab mới
                                rel="noopener noreferrer" // Bảo mật khi mở liên kết bên ngoài
                            >
                                <i className="fab fa-github text-xl"></i>
                            </a>
                            <a
                                href="https://www.facebook.com/imKaiO7" // Thay "your-linkedin-username" bằng tên LinkedIn của bạn
                                className="text-gray-400 hover:text-white"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-facebook-f text-xl"></i>
                            </a>
                            <a
                                href="https://twitter.com/your-twitter-username" // Thay "your-twitter-username" bằng tên Twitter của bạn
                                className="text-gray-400 hover:text-white"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-twitter text-xl"></i>
                            </a>
                            <a
                                href="https://stackoverflow.com/users/your-stackoverflow-id" // Thay "your-stackoverflow-id" bằng ID Stack Overflow của bạn
                                className="text-gray-400 hover:text-white"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-stack-overflow text-xl"></i>
                            </a>
                        </div>
                    </div>
                    <div class="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm" data-id="qyggf1et" data-line="413-415">
                        <p data-id="ub18qcls" data-line="414-414">© 2025 Trần Văn Nghĩa - KaiO. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
export default Footer;