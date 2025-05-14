import React from 'react';
import ContentProject from '../ContentProject'
import ProjectLinks from '../ProjectLinks'
import ProjectStats from '../ProjectStats'

const ProjectDetail = () => {
    return (
        <>
        <main className="max-w-6xl mx-auto px-4 py-12" data-id="srrct82u" data-line="27-150">
            <div className="flex flex-col md:flex-row gap-8" data-id="g0jrx6fy" data-line="28-149">
                {/* content main */}
                <ContentProject />
                <div className="md:w-1/3 space-y-6" data-id="71gvx8xp" data-line="83-148">
                    {/* Project Links */}
                    <ProjectLinks/>
                    {/* Project Stats */}
                    <ProjectStats/>
                </div>
            </div>
        </main>

        </>
    );
}

export default ProjectDetail;