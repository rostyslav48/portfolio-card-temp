import { memo, useContext, useEffect, useState } from 'react';
import { Context } from '../context/context';
import { LocalVideo } from './ItemDetailsContent';
import { projectsDetails } from '../constants';

import dynamic from 'next/dynamic';

const ProjectSlider = dynamic(() => import('./ItemDetailsContent'), {
  ssr: false,
});

const ProjectDetails = () => {
  const {
    activeProject,
    showProject,
    showProjectFunction,
    activeProjectFunction,
  } = useContext(Context);
  const [length, setLength] = useState(null);
  useEffect(() => {
    setLength(document.querySelectorAll('#bl-panel-work-items>div').length);
  }, []);

  return (
    <div
      className={`bl-panel-items ${showProject ? 'bl-panel-items-show' : ''}`}
      id="bl-panel-work-items"
    >
      {projectsDetails.map((project, index) => (
        <div
          key={project.name + project.start}
          data-panel={`panel-${index + 1}`}
          className={activeProject == index + 1 ? 'bl-show-work' : ''}
        >
          <div className="row">
            {/* Project Main Content Starts */}
            <div className="col s12 l6 xl6 section-padding section-padding-right-none">
              <img
                className="responsive-img"
                src={`images/projects/project-${index + 1}.webp`}
                alt="project"
              />
            </div>
            {/* Project Main Content Ends */}
            {/* Project Details Starts */}
            <div className="col s12 l6 xl6 section-padding">
              <h3 className="font-weight-700">{project.name}</h3>
              <ul className="project-details second-font">
                <li>
                  <i className="fa fa-user" />
                  <span className="font-weight-700"> Type </span>:{' '}
                  <span className="font-weight-400">{project.type}</span>
                </li>
                <li>
                  <i className="fa fa-calendar-o" />
                  <span className="font-weight-700"> Start Date </span>:{' '}
                  <span className="font-weight-400 uppercase">
                    {project.start}
                  </span>
                </li>
                {project.finish && (
                  <li>
                    <i className="fa fa-calendar-check-o" />
                    <span className="font-weight-700"> End Date </span>:{' '}
                    <span className="font-weight-400 uppercase">
                      {project.finish}
                    </span>
                  </li>
                )}
              </ul>
              <hr />

              {project.link && (
                <a
                  target="blank"
                  href={project.link}
                  className="waves-effect waves-light btn font-weight-700"
                >
                  Preview <i className="fa fa-external-link" />
                </a>
              )}
            </div>
            {/* Project Details Ends */}
          </div>
        </div>
      ))}
      {/* Portfolio Navigation Starts */}
      <nav>
        {/* Previous Work Icon Starts */}
        <span
          className="control-button bl-previous-work"
          onClick={() =>
            activeProjectFunction(activeProject == 1 ? 1 : activeProject - 1)
          }
        >
          <i className="fa fa-angle-left" />
        </span>
        {/* Previous Work Icon Ends */}
        {/* Close Work Icon Starts */}
        <img
          alt="close"
          src="images/close-button.svg"
          className="control-button bl-icon-close"
          onClick={() => {
            showProjectFunction();
            activeProjectFunction(null);
          }}
        />
        {/* Close Work Icon Ends */}
        {/* Next Work Icon Starts */}
        <span
          className="control-button bl-next-work"
          onClick={() =>
            activeProjectFunction(
              activeProject == length ? 1 : activeProject + 1,
            )
          }
        >
          <i className="fa fa-angle-right" />
        </span>
        {/* Previous Work Icon Ends */}
      </nav>
      {/* Portfolio Navigation Ends */}
    </div>
  );
};
export default memo(ProjectDetails);
