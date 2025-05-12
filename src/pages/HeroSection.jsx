import React from 'react';

const HeroSection = () => {
  return (
    <>
        <div id="home" className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8" data-id="sfaiwb6k" data-line="62-98">
            <div className="relative max-w-7xl mx-auto" data-id="nvxv3kn8" data-line="63-97">
                <div className="flex flex-col md:flex-row items-center" data-id="009wha9n" data-line="64-96">
                    <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10" data-id="nbar8ia8" data-line="65-83">
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4" data-id="gollvnw7" data-line="66-68">
                            Hi, I'm <span className="text-primary" data-id="uvywlrc0" data-line="67-67">Trần Văn Nghĩa</span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 mb-6" data-id="62up7hts" data-line="69-71">
                            Full Stack Developer 
                        </h2>
                        <p className="text-lg text-gray-500 mb-8" data-id="ludvysr5" data-line="72-74">
                            I build exceptional digital experiences with modern technologies and clean code. Specialized in web applications, cloud solutions, and cybersecurity.
                        </p>
                        <div className="flex space-x-4" data-id="sirnjvi8" data-line="75-82">
                            <a href="#" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary" data-id="03dm794z" data-line="76-78">
                                View My Work
                            </a>
                            <a
                                href="/CV_TranVanNghia.pdf" // Đường dẫn đến tệp PDF
                                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                                download // Thuộc tính này sẽ tải tệp xuống thay vì mở trong trình duyệt
                                data-id="r2jtjbpu"
                                data-line="79-81"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center" data-id="z6qthd9t" data-line="84-95">
                        <div className="relative" data-id="8x4x0oo2" data-line="85-94">
                            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-primary to-secondary p-1" data-id="ey17e8op" data-line="86-88">
                                <img 
                                    className="w-full h-full rounded-full object-cover border-4 border-white" 
                                    src="/avatar1.jpg" // Đường dẫn đến ảnh trong thư mục public
                                    alt="Profile Photo of Trần Văn Nghĩa" 
                                    onError={(e) => { e.target.src = '/path-to-default-image.jpg'; }} // Thêm fallback nếu ảnh không tải được
                                    data-id="1g3e0sjf" 
                                    data-line="87-87"
                                />
                            </div>
                            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-full shadow-lg" data-id="tqe05oyu" data-line="89-93">
                                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-accent text-white" data-id="fp83jq5o" data-line="90-92">
                                    <i className="fas fa-code text-2xl" data-id="k1xt4993" data-line="91-91"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
export default HeroSection;