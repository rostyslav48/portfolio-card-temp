import { memo, useCallback, useContext, useEffect } from 'react';
import { Context } from '../context/context';
import { directionHover } from '../utils';
import SectionContainer from './SectionContainer';
import { projectsDetails } from '../constants';

const Portfolio = () => {
  const { showProjectFunction, activeProjectFunction } = useContext(Context);
  useEffect(() => {
    directionHover();
  }, []);

  const activeShowProject = useCallback((value) => {
    showProjectFunction();
    activeProjectFunction(value);
  }, []);

  return (
    <SectionContainer
      sectionName="work"
      title={{ first: 'my ', last: 'portfolio' }}
    >
      <div className="bl-content">
        {/* Main Heading Starts */}
        <div className="container page-title center-align">
          <h2 className="center-align">
            <span data-hover="my">my </span>{' '}
            <span data-hover="portfolio"> projects</span>
          </h2>
        </div>
        {/* Main Heading Ends */}
        <div className="container">
          {/* Divider Starts */}
          <div className="divider center-align">
            <span className="outer-line" />
            <span className="fa fa-suitcase" aria-hidden="true" />
            <span className="outer-line" />
          </div>
          <div className="row center-align da-thumbs" id="bl-work-items">
            {/* Project Starts */}

            {projectsDetails.map((project) => (
              <div
                key={project.id}
                className="col s12 m6 l6 xl4"
                data-panel={`panel-${project.id}`}
              >
                <a href="#" onClick={() => activeShowProject(project.id)}>
                  <img
                    className="responsive-img"
                    src={`images/projects/project-${project.id}.webp`}
                    alt="Project"
                  />
                  <div className="valign-wrapper">
                    <span className="font-weight-700 uppercase">
                      {project.name}
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default memo(Portfolio);
