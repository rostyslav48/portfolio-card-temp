import Link from 'next/link';
import { Fragment, memo, useMemo, useState, useContext } from 'react';
import cn from 'classnames';
import useWindowSize from '../useWindowSize';
import SectionContainer from './SectionContainer';
import { Context } from '../context/context';

const Experience = () => (
  <Fragment>
    <div className="resume-card-header">
      <div className="resume-card-name">
        <i className="fa fa-briefcase" /> Experience
      </div>
    </div>
    {/* Experience Header Title Ends */}
    {/* Experience Content Starts */}
    <div className="resume-card-body experience">
      <div className="resume-card-body-container second-font">
        {/* Single Experience Starts */}
        <div className="resume-content">
          <h6>
            <span className="uppercase">Business Development Director</span> -
            Banuba
          </h6>
          <span className="date">
            <i className="fa fa-calendar-o" /> 01/2023 - 07/2023
          </span>
          <h6 className="list-header">Industry: IT-StartUp, SaaS</h6>

          <ul className="browser-default">
            <li>Team leadership, motivation, and development</li>
            <li>Building the sales funnel and tracking team performance</li>
            <li>Business management, including profitability planning</li>
            <li>
              International project and process management, including
              representation at events and trade fairs in DEU, ITA, USA
            </li>
            <li>
              Overseeing sales representatives abroad and providing IT
              consulting, customization, pricing, and sales completion
            </li>
            <li>Conducting training programs for employees and customers</li>
          </ul>

          <p></p>
        </div>
        {/* Single Experience Ends */}
        <span className="separator" />
        {/* Single Experience Starts */}
        <div className="resume-content">
          <h6>
            <span className="uppercase">Business Development Manager - </span>
            Quixant Deutschland GmbH
          </h6>
          <span className="date">
            <i className="fa fa-calendar-o" /> 09/2019 - 05/2022
          </span>

          <h6 className="list-header">Industry: IT-Hardware and Components</h6>

          <ul className="browser-default">
            <li>
              Strategic international business development and sales leadership.
            </li>
            <li>
              Full sales cycle management: from lead generation to closing and
              follow-up.
            </li>
            <li>Progress reporting on forecasted trading reviews.</li>
            <li>
              Collaboration with key accounts to enhance customer satisfaction.
            </li>
          </ul>
        </div>
        {/* Single Experience Ends */}
        <span className="separator" />
        {/* Single Experience Starts */}
        <div className="resume-content">
          <h6>
            <span className="uppercase">Area Sales Manager -</span>Trigas FI
            GmbH
          </h6>
          <span className="date">
            <i className="fa fa-calendar-o" /> 02/2018 - 08/2019
          </span>

          <h6 className="list-header">Industry: Automotive, Medical</h6>

          <ul className="browser-default">
            <li>
              Identifying target markets and forging international partnerships
            </li>
            <li>
              Developing and implementing marketing and sales strategies,
              adjusting as needed
            </li>
            <li>
              Leading international projects and representing the company in
              global markets
            </li>
            <li>
              Acquiring new customers in the automotive sector and supporting
              legal aspects in B2B
            </li>
            <li>
              Providing technical advice to the sales team and maintaining
              customer master data
            </li>
          </ul>
        </div>
        {/* Single Experience Ends */}

        <span className="separator" />
        {/* Single Experience Starts */}
        <div className="resume-content">
          <h6>
            <span className="uppercase">Sales Engineer -</span>ENGINEERING
            Nosswitz GmbH
          </h6>
          <span className="date">
            <i className="fa fa-calendar-o" /> 09/2017 - 01/2018
          </span>

          <h6 className="list-header">Industry: Electrical facilities</h6>

          <ul className="browser-default">
            <li>
              {' '}
              Acquire new clients and recover former ones while generating new
              leads.
            </li>
            <li>
              {' '}
              Develop international sales partnerships and representatives.
            </li>
            <li>
              {' '}
              Expand the customer base in Europe and Russian-speaking/CIS
              countries.
            </li>
            <li>
              {' '}
              Present service portfolio, create tailored offers, and negotiate
              contracts.
            </li>
            <li>
              {' '}
              Devise sales strategies, forecast, report, and lead projects based
              on market analysis.
            </li>
            <li> Provide consulting, training, and support to clients.</li>
            <li>
              {' '}
              Conduct workshops on products/services in German, English, and
              Russian for employees and customers.
            </li>
          </ul>
        </div>
        {/* Single Experience Ends */}
        {/* Single Experience Starts */}
        <div className="resume-content">
          <h6>
            <span className="uppercase">Technical Support Engineer -</span>
            Honeywell Analytics
          </h6>
          <span className="date">
            <i className="fa fa-calendar-o" /> 04/2012 - 08/2017
          </span>

          <h6 className="list-header">
            Industry: Gas and Radioactivity Measurement
          </h6>

          <ul className="browser-default">
            <li>
              Lead workshops in German, English, and Russian for employees and
              customers.
            </li>
            <li>
              Provide on/off-site technical and electronic support for
              customers.
            </li>
            <li>
              Calculate cost estimates and create repair guidelines in German,
              English, and Russian.
            </li>
            <li>
              Perform calibration, adjustment, and repair of both portable and
              stationary gas detection devices.
            </li>
            <li>Contribute to the analysis and development of new devices.</li>
          </ul>
        </div>
        {/* Single Experience Ends */}
        {/* Single Experience Starts */}
        <div className="resume-content">
          <h6>
            <span className="uppercase">Founder / CEO / Sales Manager </span>
          </h6>
          <span className="date">
            <i className="fa fa-calendar-o" /> 03/2008 - present
          </span>

          <h6 className="list-header">Industry: IT</h6>

          <ul className="browser-default">
            <li>Develop and maintain customer relationships.</li>
            <li>Negotiate with suppliers, service providers, and customers.</li>
            <li>Support sales by training and motivating employees.</li>
            <li>
              Manage HR tasks including interviewing, hiring, and overseeing
              staff.
            </li>
            <li>Lead all marketing activities.</li>
            <li>
              Provide technical support including maintenance, repair,
              adaptation, and renewal.
            </li>
            <li>Create and manage an online e-shop.</li>
          </ul>
        </div>
        {/* Single Experience Ends */}
      </div>
    </div>
  </Fragment>
);
const Education = () => (
  <Fragment>
    <div className="resume-card-header">
      <div className="resume-card-name">
        <i className="fa fa-graduation-cap" /> Education
      </div>
    </div>
    {/* Education Header Title Starts */}
    <div className="resume-card-body education">
      <div className="resume-card-body-container second-font">
        {/* Single Education Starts */}
        <div className="resume-content">
          <h6 className="uppercase">
            <span>
              Technical University for Nuclear Power Engineering (Status H){' '}
            </span>
            Obninsk, Russia
          </h6>
          <span className="date">
            <i className="fa fa-calendar-o" /> 2002 - 2008
          </span>
          <p>
            Engineering degree in Physic – the diploma is accepted also in
            Germany and is comparable with a Grad.Eng.
          </p>
        </div>
        {/* Single Education Ends */}
        <span className="separator" />
        {/* Single Education Starts */}
        <div className="resume-content">
          <h6 className="uppercase">
            <span>Goethe Institute</span>
          </h6>
          <span className="date">
            <i className="fa fa-calendar-o" /> 10/2012 - 12/2012
          </span>
          <p>B2 Certificate in German</p>
        </div>
        {/* Single Education Ends */}
      </div>
    </div>
  </Fragment>
);
const Skills = () => (
  <Fragment>
    {/* Skills Header Title Starts */}
    <div className="resume-card-header">
      <div className="resume-card-name">
        <i className="fa fa-star" /> Skills
      </div>
    </div>
    {/* Skills Header Title Starts */}
    <div className="resume-card-body skills">
      <div className="resume-card-body-container second-font">
        <div className="row">
          {/* Skills Row Starts */}
          <div className="col s6">
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">Sales & Cold Calling</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{' '}
                <i className="fa fa-star" /> <i className="fa fa-star" />{' '}
                <i className="fa fa-star-half-empty" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">Lead generation</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{' '}
                <i className="fa fa-star" /> <i className="fa fa-star" />{' '}
                <i className="fa fa-star-o" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">Communication & Negotiation</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{' '}
                <i className="fa fa-star" /> <i className="fa fa-star" />{' '}
                <i className="fa fa-star-half-empty" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">Engineering</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{' '}
                <i className="fa fa-star" /> <i className="fa fa-star" />{' '}
                <i className="fa fa-star-o" />
              </p>
            </div>
            {/* Single Skills Ends */}
          </div>
          {/* Skills Row Ends */}
          {/* Skills Row Starts */}
          <div className="col s6">
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">Leadership & Management</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{' '}
                <i className="fa fa-star" /> <i className="fa fa-star" />{' '}
                <i className="fa fa-star-o" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">Analytic & Forecasting</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{' '}
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star-o" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">Marketing</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />
                <i className="fa fa-star" />{' '}
                <i className="fa fa-star-half-empty" />
                <i className="fa fa-star-o" />
              </p>
            </div>
            {/* Single Skills Ends */}
          </div>
          {/* Skills Row Ends */}
        </div>
      </div>
    </div>
  </Fragment>
);
const Languages = () => (
  <Fragment>
    {/* Skills Header Title Starts */}
    <div className="resume-card-header">
      <div className="resume-card-name">
        <i className="fa fa-language" /> Languages
      </div>
    </div>
    {/* Skills Header Title Starts */}
    <div className="resume-card-body skills">
      <div className="resume-card-body-container second-font">
        <div className="row">
          {/* Skills Row Starts */}
          <div className="col s6">
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">Lithuanian</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{' '}
                <i className="fa fa-star" /> <i className="fa fa-star" />{' '}
                <i className="fa fa-star-o" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">English</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{' '}
                <i className="fa fa-star" /> <i className="fa fa-star" />{' '}
                <i className="fa fa-star-o" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">German</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{' '}
                <i className="fa fa-star" /> <i className="fa fa-star" />{' '}
                <i className="fa fa-star-half-empty" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">Russian</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{' '}
                <i className="fa fa-star" /> <i className="fa fa-star" />{' '}
                <i className="fa fa-star" />{' '}
              </p>
            </div>
            {/* Single Skills Ends */}
          </div>
          {/* Skills Row Ends */}
          {/* Skills Row Starts */}
          <div className="col s6">
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">Belarussian</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{' '}
                <i className="fa fa-star" /> <i className="fa fa-star-o" />
                <i className="fa fa-star-o" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">Ukrainian</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{' '}
                <i className="fa fa-star-o" />
                <i className="fa fa-star-o" />
                <i className="fa fa-star-o" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">Polish</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star-o" />
                <i className="fa fa-star-o" />
                <i className="fa fa-star-o" />
                <i className="fa fa-star-o" />
              </p>
            </div>
            {/* Single Skills Ends */}
          </div>
          {/* Skills Row Ends */}
        </div>
      </div>
    </div>
  </Fragment>
);

const AboutUs = ({ dark }) => {
  const { openSection } = useContext(Context);
  const [active, setActive] = useState(0);
  const { width } = useWindowSize();

  const activeState = useMemo(() => ({ active, setActive }), [active]);

  return (
    <SectionContainer
      sectionName="About"
      title={{ first: 'About', last: 'ME' }}
    >
      <div className="bl-content">
        {/* Main Heading Starts */}
        <div className="container page-title custom-page-title">
          <h2 className="center-align">
            <span>About</span> <span>Me</span>
          </h2>
        </div>
        {/* Main Heading Ends */}
        <div className="container infos">
          {/* Divider Starts */}
          <div className="divider center-align">
            <span className="outer-line" />
            <span className="fa fa-vcard" aria-hidden="true" />
            <span className="outer-line" />
          </div>
          {/* Divider Ends */}
          {/* Personal Informations Starts */}
          <div className="row">
            {/* Picture Starts */}
            <div className="col s12 m4 profile-picture show-on-medium-and-down section-padding">
              <img
                src="images/jurij-tkaciov-main.webp"
                className="responsive-img my-picture"
                alt="My Photo"
              />
            </div>
            {/* Picture Ends */}
            <div className="col s12 m8 l12 xl12 personal-info section-padding">
              <h6 className="uppercase">
                <i className="fa fa-user" /> Personal Info
              </h6>
              <div className="col m12 l12 xl9 p-none">
                <p className="second-font">
                  My name is Jurij, and I am 40 years old. I am happily married
                  and blessed with three wonderful children. I have dedicated
                  nearly two decades of my career to the field of sales,
                  accumulating around 15 years of experience in various
                  leadership roles.
                </p>

                <p className="second-font">
                  Fluency in English, German, and Russian is among my linguistic
                  skills.
                </p>

                <p className="second-font">
                  Throughout my professional journey, I've held director and
                  co-founder positions in several companies across England,
                  Lithuania, Germany, and Austria. Notably, some of these
                  companies (like{' '}
                  <a href="https://jtcompany.lt" target="blank">
                    jtcompany.lt
                  </a>{' '}
                  or{' '}
                  <a href="https://facear.io" target="blank">
                    facear.io
                  </a>
                  ) continue to thrive and generate profits to this day.
                </p>

                <p className="second-font">
                  Over the past decade, I've made substantial investments in
                  real estate, amounting to more than 3 million euros.
                </p>

                <p className="second-font">
                  My passion lies in interacting with people, tackling
                  intellectually stimulating challenges, and, above all,
                  cherishing precious moments with my family.
                </p>
              </div>
              <div className="col s12 m12 l6 p-none">
                <ul className="second-font list-1">
                  <li>
                    <span className="font-weight-700">First Name: </span>
                    Jurij
                  </li>
                  <li>
                    <span className="font-weight-700">Last Name: </span>
                    Tkaciov
                  </li>
                  {/* <li>
                    <span className="font-weight-700">Date of birth: </span>
                    21 june 1985{' '}
                  </li> */}
                  <li>
                    <span className="font-weight-700">Nationality: </span>
                    Lithuanian
                  </li>
                  <li>
                    <span className="font-weight-700">Based: </span>
                    Austria / Germany
                  </li>
                  {/* <li>
                    <span className="font-weight-700">Freelance: </span>
                    Available
                  </li> */}
                </ul>
              </div>
              <div className="col s12 m12 l6 p-none">
                <ul className="second-font list-2">
                  <li>
                    <span className="font-weight-700">Phone: </span>
                    +49 176 8483 5073
                  </li>
                  <li>
                    <span className="font-weight-700">Address: </span>
                    Kufstein, Austria
                  </li>
                  <li>
                    <span className="font-weight-700">Email: </span>
                    web@tkaciov.com
                  </li>
                  <li>
                    <span className="font-weight-700">Spoken Langages: </span>
                    Lithuanian - English - German - Russian
                  </li>
                  <li>
                    <span className="font-weight-700">LinkedIn: </span>
                    <a href="https://www.linkedin.com/in/jurij-tkaciov/">
                      https://www.linkedin.com/in/jurij-tkaciov/
                    </a>
                  </li>
                </ul>
              </div>

              {/* PROBLEM */}
              <a
                onClick={() => {
                  openSection('Contact');
                }}
                className="btn font-weight-700"
              >
                Ask for availability
                {/* <i className="fa fa-file-pdf-o" /> */}
              </a>

              {/* <Link href={`/blog-${dark ? 'dark' : 'light'}`}>
                <a className="btn btn-blog font-weight-700">
                  My Blog <i className="fa fa-edit" />
                </a>
              </Link> */}
            </div>
          </div>
          {/* Personal Informations Ends */}
        </div>
        {/* Resume Starts */}
        <div className="resume-container">
          <div className="container">
            <p style={{ display: 'none' }}>{width}</p>
            <div className="valign-wrapper row">
              {/* Resume Menu Starts */}
              <div className="resume-list col l4 section-padding">
                <div
                  className={`resume-list-item ${
                    activeState.active === 0 ? 'is-active' : ''
                  }`}
                  data-index={0}
                  id="resume-list-item-0"
                >
                  <div
                    className="resume-list-item-inner"
                    onClick={() => activeState.setActive(0)}
                  >
                    <h6 className="resume-list-item-title uppercase">
                      <i className="fa fa-briefcase" /> Experience
                    </h6>
                  </div>
                </div>
                <div
                  className={`resume-list-item ${
                    activeState.active === 1 ? 'is-active' : ''
                  }`}
                  data-index={1}
                  id="resume-list-item-1"
                >
                  <div
                    className="resume-list-item-inner"
                    onClick={() => activeState.setActive(1)}
                  >
                    <h6 className="resume-list-item-title uppercase">
                      <i className="fa fa-graduation-cap" /> Education
                    </h6>
                  </div>
                </div>
                <div
                  className={`resume-list-item ${
                    activeState.active === 2 ? 'is-active' : ''
                  }`}
                  data-index={2}
                  id="resume-list-item-2"
                >
                  <div
                    className="resume-list-item-inner"
                    onClick={() => activeState.setActive(2)}
                  >
                    <h6 className="resume-list-item-title uppercase">
                      <i className="fa fa-star" /> Skills
                    </h6>
                  </div>
                </div>

                <div
                  className={`resume-list-item ${
                    activeState.active === 3 ? 'is-active' : ''
                  }`}
                  data-index={3}
                  id="resume-list-item-3"
                >
                  <div
                    className="resume-list-item-inner"
                    onClick={() => activeState.setActive(3)}
                  >
                    <h6 className="resume-list-item-title uppercase">
                      <i class="fa fa-language"></i> Languages
                    </h6>
                  </div>
                </div>
              </div>
              {/* Resume Menu Ends */}
              {/* Resume Content Starts */}
              {width < 800 ? (
                <div className="col s12 m12 l8 resume-cards-container section-padding">
                  <div className="resume-cards">
                    <div className="resume-card resume-card-0">
                      <Experience />
                    </div>
                    <div className="resume-card resume-card-1">
                      <Education />
                    </div>
                    <div className="resume-card resume-card-2">
                      <Skills />
                    </div>
                    <div className="resume-card resume-card-3">
                      <Languages />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="col s12 m12 l8 resume-cards-container section-padding">
                  <div className="resume-cards">
                    {/* Experience Starts */}
                    <div
                      className={cn('resume-card', 'resume-card-0', {
                        front: activeState.active === 0,
                        back: activeState.active === 3,
                        'back-back': activeState.active === 2,
                        'back-back-back': activeState.active === 1,
                      })}
                      onClick={() => activeState.setActive(0)}
                      data-index={0}
                    >
                      <Experience />
                    </div>
                    {/* Experience Ends */}
                    {/* Education Starts */}
                    <div
                      className={cn('resume-card', 'resume-card-1', {
                        front: activeState.active === 1,
                        back: activeState.active === 0,
                        'back-back': activeState.active === 3,
                        'back-back-back': activeState.active === 2,
                      })}
                      data-index={1}
                      onClick={() => activeState.setActive(1)}
                    >
                      <Education />
                    </div>
                    {/* Education Ends */}
                    {/* Skills Starts */}
                    <div
                      className={cn('resume-card', 'resume-card-2', {
                        front: activeState.active === 2,
                        back: activeState.active === 1,
                        'back-back': activeState.active === 0,
                        'back-back-back': activeState.active === 3,
                      })}
                      data-index={2}
                      onClick={() => activeState.setActive(2)}
                    >
                      <Skills />
                    </div>
                    {/* Skills Ends */}
                    <div
                      className={cn('resume-card', 'resume-card-3', {
                        front: activeState.active === 3,
                        back: activeState.active === 2,
                        'back-back': activeState.active === 1,
                        'back-back-back': activeState.active === 0,
                      })}
                      data-index={3}
                      onClick={() => activeState.setActive(3)}
                    >
                      <Languages />
                    </div>
                  </div>
                </div>
              )}

              {/* Resume Content Ends */}
            </div>
          </div>
        </div>
        {/* Resume Ends */}
        {/* Fun Facts Starts */}
        <div className="container badges">
          <div className="row">
            {/* Fact Badge Item Starts */}
            <div className="col s12 m4 l4 center-align">
              <h3>
                <i className="fa fa-briefcase" />
                <span className="font-weight-900">20+</span>
              </h3>
              <h6 className="uppercase font-weight-700">Years in sales</h6>
            </div>
            {/* Fact Badge Item Ends */}
            {/* Fact Badge Item Starts */}
            <div className="col s12 m4 l4 center-align">
              <h3>
                <i className="fa fa-handshake-o" />
                <span className="font-weight-900">15+</span>
              </h3>
              <h6 className="uppercase font-weight-700">
                Years leadership role
              </h6>
            </div>
            {/* Fact Badge Item Ends */}
            {/* Fact Badge Item Starts */}
            <div className="col s12 m4 l4 center-align">
              <h3>
                <i className="fa fa-heart-o" />
                <span className="font-weight-900">11</span>
              </h3>
              <h6 className="uppercase font-weight-700">Projects</h6>
            </div>
            {/* Fact Badge Item Ends */}
          </div>
        </div>
        {/* Fun Facts Ends */}
      </div>
    </SectionContainer>
  );
};
export default memo(AboutUs);
