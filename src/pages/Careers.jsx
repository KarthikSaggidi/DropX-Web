import React, { useEffect, useState, useRef } from 'react';
import {
  Send,
  BriefcaseBusiness,
  MapPin,
  Clock3,
  ArrowRight,
  Laptop,
  TrendingUp,
  Rocket,
  Users,
  X,
  ArrowLeft,
  Upload,
  AlertCircle,
  Flame,
  CheckCircle2,
  FileText,
  Wallet,
  Code2,
  HeartHandshake,
  Loader2,
  Sparkles,
  Building,
  Inbox
} from 'lucide-react';

import CTA from '../components/CTA.jsx';
import '../pages/careers.css';

// ==========================================
// 🛠️ CONTROL PANEL: Change this single line to 
// true (to open all jobs) or false (to close all jobs)
// ==========================================
const ALL_JOBS_OPEN = false;


// 6 distinct startup job roles (₹4L - ₹6L salary range)
const rawJobsData = [
  {
    id: 1,
    role: 'Frontend Developer (React)',
    type: 'Full-Time',
    text: 'Build snappy, responsive, and intuitive user interfaces for our core SaaS applications.',
    spots: 1,
    location: 'Hyderabad / Remote',
    salary: '₹4L - ₹6L',
    team: 'Engineering',
    techStack: ['React', 'TailwindCSS', 'JavaScript', 'REST APIs'],
    about: 'As a Frontend Developer at DropXcorp, you would craft seamless web experiences and high-performance client applications.',
    responsibilities: [
      'Translate UI/UX wireframes into clean, production-ready React components.',
      'Optimize web applications for maximum speed and scalability.',
      'Collaborate with backend teams to integrate seamless data flows.'
    ],
    requirements: [
      'Proven experience building modern web apps with React.js.',
      'Strong grasp of CSS architecture, responsive design, and state management.',
      'Degree in Computer Science or equivalent practical experience.'
    ],
    whoYouAre: [
      'Detail-oriented builder with an eye for clean code and fluid interfaces.',
      'Excited to work in a fast-paced, lean startup environment.'
    ],
    perks: [
      'Flexible Work Culture',
      'Learning & Upskilling Stipend',
      'Health Insurance Support'
    ]
  },
  {
    id: 2,
    role: 'Backend Developer (Node.js)',
    type: 'Full-Time',
    text: 'Design robust server-side architecture, secure APIs, and efficient database models.',
    spots: 1,
    location: 'Hyderabad / Remote',
    salary: '₹4L - ₹6L',
    team: 'Engineering',
    techStack: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
    about: 'In this role, you would own backend services, data pipelines, and server reliability across our digital products.',
    responsibilities: [
      'Develop scalable RESTful APIs and microservices.',
      'Manage database schemas, queries, and server-side performance optimization.',
      'Ensure high standards of code quality and security protocols.'
    ],
    requirements: [
      'Solid foundational knowledge of Node.js and backend frameworks.',
      'Experience with SQL/NoSQL databases and cloud deployments.',
      'Strong problem-solving and algorithmic thinking abilities.'
    ],
    whoYouAre: [
      'Passionate about backend performance, clean architecture, and API design.',
      'Proactive learner who takes full accountability of systems.'
    ],
    perks: [
      'Remote-friendly options',
      'Flexible working hours',
      'Direct mentorship from senior engineers'
    ]
  },
  {
    id: 3,
    role: 'UI/UX Designer',
    type: 'Full-Time',
    text: 'Craft user journeys, wireframes, and design systems for web and mobile products.',
    spots: 1,
    location: 'Hyderabad / Hybrid',
    salary: '₹4L - ₹6L',
    team: 'Design',
    techStack: ['Figma', 'Prototyping', 'Design Systems', 'User Research'],
    about: 'You would shape the look and feel of DropXcorp digital solutions, bridging user needs with clean visual design.',
    responsibilities: [
      'Create wireframes, mockups, and high-fidelity prototypes in Figma.',
      'Build and maintain scalable design systems.',
      'Conduct user testing sessions to continuously improve usability.'
    ],
    requirements: [
      'Strong portfolio demonstrating UI/UX fundamentals and problem-solving.',
      'Proficiency in Figma and modern collaborative design tools.',
      'Strong communication skills to explain design rationale.'
    ],
    whoYouAre: [
      'Empathetic designer obsessed with user experience and visual harmony.',
      'Open to feedback and collaborative iteration.'
    ],
    perks: [
      'Design tool subscriptions covered',
      'Flexible lifestyle schedule',
      'Creative freedom'
    ]
  },
  {
    id: 4,
    role: 'QA & Automation Engineer',
    type: 'Full-Time',
    text: 'Ensure rigorous product quality through automated test scripts and systematic bug tracking.',
    spots: 1,
    location: 'Hyderabad / Remote',
    salary: '₹4L - ₹6L',
    team: 'Engineering',
    techStack: ['Selenium', 'Cypress', 'Jest', 'Postman'],
    about: 'You would be the gatekeeper of product quality, building automated testing frameworks to safeguard releases.',
    responsibilities: [
      'Design and execute comprehensive test cases and automation scripts.',
      'Identify, document, and track software defects thoroughly.',
      'Work closely with developers to resolve issues before production deployment.'
    ],
    requirements: [
      'Practical experience in manual and automated software testing.',
      'Familiarity with JavaScript testing frameworks or API testing tools.',
      'Strong analytical mindset and eye for edge cases.'
    ],
    whoYouAre: [
      'Meticulous and methodical about application reliability and bug prevention.',
      'Driven to improve engineering workflows.'
    ],
    perks: [
      'Comprehensive health coverage',
      'Skill development budget',
      'Supportive team environment'
    ]
  },
  {
    id: 5,
    role: 'Digital Marketing & Growth Specialist',
    type: 'Full-Time',
    text: 'Drive acquisition campaigns, SEO strategies, and performance marketing initiatives.',
    spots: 1,
    location: 'Hyderabad / Hybrid',
    salary: '₹4L - ₹6L',
    team: 'Operations',
    techStack: ['Google Ads', 'SEO', 'Analytics', 'Content Strategy'],
    about: 'You would spearhead digital outreach, scaling our brand visibility and user acquisition channels.',
    responsibilities: [
      'Plan and execute digital campaigns across search, social, and email channels.',
      'Analyze traffic metrics and conversion funnels to optimize ROI.',
      'Collaborate on content marketing and brand positioning.'
    ],
    requirements: [
      'Hands-on experience with digital marketing campaigns and growth tools.',
      'Strong analytical skills to interpret data and KPIs.',
      'Excellent written and verbal communication skills.'
    ],
    whoYouAre: [
      'Creative, data-driven, and experimental growth enthusiast.',
      'Comfortable adapting quickly to market trends.'
    ],
    perks: [
      'Performance-based incentives',
      'Flexible hybrid schedule',
      'Continuous learning culture'
    ]
  },
  {
    id: 6,
    role: 'Technical Operations Associate',
    type: 'Full-Time',
    text: 'Streamline internal processes, client documentation, and technical project tracking.',
    spots: 1,
    location: 'Hyderabad / Remote',
    salary: '₹4L - ₹6L',
    team: 'Operations',
    techStack: ['Jira', 'Notion', 'Documentation', 'Client Comms'],
    about: 'You would keep our projects running smoothly by coordinating workflows, schedules, and technical documentation.',
    responsibilities: [
      'Manage project timelines, sprint backlogs, and task distribution in Jira.',
      'Maintain clear technical documentation and internal knowledge bases.',
      'Facilitate smooth communication between clients and development teams.'
    ],
    requirements: [
      'Strong organizational skills and familiarity with agile project tools.',
      'Exceptional written and verbal communication abilities.',
      'Basic technical literacy to understand software delivery pipelines.'
    ],
    whoYouAre: [
      'Extremely organized, dependable, and proactive problem solver.',
      'Thrives in structured coordination roles.'
    ],
    perks: [
      'Remote flexibility',
      'Health benefits package',
      'Direct exposure to startup operations'
    ]
  }
];

// Automatically inject the global open/closed status into every job item
const jobsData = rawJobsData.map(job => ({
  ...job,
  isOpen: ALL_JOBS_OPEN
}));

export default function Careers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedJob, setSelectedJob] = useState(null);
  const [isApplying, setIsApplying] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const modalRef = useRef(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    isWorking: 'No',
    currentPosition: '',
    currentCTC: '',
    expectedCTC: '',
    experience: '',
    resume: null
  });
  const [phoneError, setPhoneError] = useState('');

  const openJobDetails = (job, directToForm = false) => {
    if (!job.isOpen) return;
    setSelectedJob(job);
    setIsApplying(directToForm); 
    setSubmitSuccess(false);
    setFormData({
      firstName: '', lastName: '', email: '', phone: '',
      isWorking: 'No', currentPosition: '', currentCTC: '',
      expectedCTC: '', experience: '', resume: null
    });
    setPhoneError('');
    document.body.style.overflow = 'hidden'; 
    
    setTimeout(() => {
      if (modalRef.current) modalRef.current.scrollTop = 0;
    }, 10);
  };

  const handleApplyClick = () => {
    setIsApplying(true);
    setTimeout(() => {
      if (modalRef.current) modalRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }, 10);
  };

  const closeModal = () => {
    setSelectedJob(null);
    setTimeout(() => {
      setIsApplying(false);
      setSubmitSuccess(false);
      document.body.style.overflow = 'auto';
    }, 300); 
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'phone') setPhoneError('');
  };

  const setWorkingStatus = (status) => {
    setFormData((prev) => ({ ...prev, isWorking: status }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 5 * 1024 * 1024) {
      alert("File size exceeds 5MB limit. Please upload a smaller resume.");
      return;
    }
    setFormData((prev) => ({ ...prev, resume: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const phoneRegex = /^\+?[1-9]\d{9,14}$/;
    if (!phoneRegex.test(formData.phone)) {
      setPhoneError('Please enter a valid phone number (10+ digits).');
      return;
    }

    setIsSubmitting(true);

    try {
      const formPayload = new FormData();
      formPayload.append("role", selectedJob.role);
      formPayload.append("firstName", formData.firstName);
      formPayload.append("lastName", formData.lastName);
      formPayload.append("email", formData.email);
      formPayload.append("phone", formData.phone);
      formPayload.append("experience", formData.experience);
      formPayload.append("isWorking", formData.isWorking);
      
      if (formData.isWorking === 'Yes') {
        formPayload.append("currentPosition", formData.currentPosition);
        formPayload.append("currentCTC", formData.currentCTC);
      }
      
      formPayload.append("expectedCTC", formData.expectedCTC);

      if (formData.resume) {
        formPayload.append("resume", formData.resume);
      }

      const response = await fetch("http://localhost:5005/api/apply", {
        method: "POST",
        body: formPayload 
      });

      const data = await response.json();

      if (data.success) {
        setSubmitSuccess(true);
        if (modalRef.current) modalRef.current.scrollTop = 0;
      } else {
        alert("Something went wrong: " + data.message);
      }
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Network error. Please make sure your backend server is running.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const openJobsCount = jobsData.filter(job => job.isOpen).length;

  return (
    <div className="careers-page-wrapper">
      
      {/* ================= HERO SECTION ================= */}
      <section className="c-hero-section relative">
        <div className="c-hero-bg-glow"></div>
        <div className="container relative z-10">
          
          <div className="section-title-centered flex flex-col items-center text-center pt-12 pb-4">
            <div className="soft-header mb-0">
              <div className="section-badge-animated-border mb-4">
                CAREERS AT DROPXCORP
              </div>
              <h1 className="hero-title-large mb-4">
                Build the Future of <br />
                <span className="text-primary-gradient">Digital Products.</span>
              </h1>
              <div className="max-w-700 mx-auto text-muted mt-6">
                <p className="text-lg">
                  Join an agile collective of ambitious builders. We’re crafting modern SaaS platforms and intelligent digital experiences.
                </p>
              </div>
              <div className="c-hero-actions mt-8">
                <a href="#open-roles" className="btn btn-primary btn-lg shadow-glow">
                  View Open Roles <ArrowRight size={18} />
                </a>
                <a href="#culture" className="btn btn-outline btn-lg">
                  Discover Our Culture
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= OPEN ROLES SECTION ================= */}
      <section id="open-roles" className="c-page-section c-bg-off-white">
        <div className="container">
          
          <div className="section-title-centered flex flex-col items-center text-center">
            <div className="soft-header mb-0">
              <div className="section-badge-animated-border mb-4">
                OPEN ROLES
              </div>
              <h2 className="enhanced-section-title">
                Grow with <span className="text-primary-gradient">DropXcorp.</span>
              </h2>
              <div className="max-w-700 mx-auto text-muted mt-4">
                <p className="mb-3">
                  We currently have <strong>{openJobsCount}</strong> active {openJobsCount === 1 ? 'position' : 'positions'} open. Explore our listings below.
                </p>
              </div>
            </div>
          </div>

          <div className="c-jobs-container mt-12">
            {openJobsCount === 0 ? (
              <div className="c-empty-state text-center py-16">
                <div className="c-empty-icon-box mx-auto mb-4">
                  <Inbox size={40} className="text-muted" />
                </div>
                <h3 className="text-xl font-bold mb-2">No Open Roles Right Now</h3>
                <p className="text-muted max-w-md mx-auto mb-6">
                  All current positions are filled, but we are always excited to hear from talented individuals. Feel free to check back later or drop your resume at <strong>careers@dropxcorp.com</strong>.
                </p>
              </div>
            ) : null}

            <div className="c-jobs-grid">
              {jobsData.map((job) => (
                <div 
                  className={`c-job-card ${job.isOpen ? 'hover-lift cursor-pointer' : 'c-job-closed'}`} 
                  key={job.id} 
                  onClick={() => job.isOpen && openJobDetails(job)} 
                >
                  <div className="c-job-card-header">
                    <div className="c-job-icon">
                      <BriefcaseBusiness size={24} />
                    </div>
                    <div className="c-job-tags-top">
                      {job.isOpen ? (
                        <>
                          {job.spots <= 2 && (
                            <span className="c-spots-badge">
                              <Flame size={14} /> {job.spots} {job.spots === 1 ? 'spot' : 'spots'} left
                            </span>
                          )}
                          <span className="c-job-type">{job.type}</span>
                        </>
                      ) : (
                        <span className="c-closed-badge">Applications Closed</span>
                      )}
                    </div>
                  </div>

                  <div className="c-job-content">
                    <h3 className="c-job-title">{job.role}</h3>
                    <p className="c-job-desc">{job.text}</p>
                  </div>

                  <div className="c-job-footer">
                    <div className="c-job-meta">
                      <div className="c-meta-item">
                        <MapPin size={15} className="text-primary" />
                        <span>{job.location}</span>
                      </div>
                      <div className="c-meta-item">
                        <Clock3 size={15} className="text-primary" />
                        <span>{job.type}</span>
                      </div>
                    </div>

                    {job.isOpen ? (
                      <button 
                        className="c-btn-apply"
                        onClick={(e) => {
                          e.stopPropagation(); 
                          openJobDetails(job, true); 
                        }}
                      >
                        Apply Now <ArrowRight size={16} />
                      </button>
                    ) : (
                      <span className="c-text-closed text-muted font-medium text-sm">Filled</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ================= BENEFITS SECTION ================= */}
      <section id="culture" className="c-page-section">
        <div className="container">
          
          <div className="section-title-centered flex flex-col items-center text-center">
            <div className="soft-header mb-0">
              <div className="section-badge-animated-border mb-4">
                WHY JOIN US
              </div>
              <h2 className="enhanced-section-title">
                Perks of working at <span className="text-primary-gradient">DropXcorp.</span>
              </h2>
              <div className="max-w-700 mx-auto text-muted mt-4">
                <p className="mb-3">
                  We focus on high impact, rapid personal growth, and creating a supportive workplace where top talent flourishes.
                </p>
              </div>
            </div>
          </div>

          <div className="c-benefits-grid mt-12">
            <div className="c-benefit-card hover-lift">
              <div className="c-benefit-icon"><Laptop size={28} /></div>
              <h3>Flexible Work</h3>
              <p>Hybrid and remote-friendly work culture with flexible schedules tailored to your lifestyle.</p>
            </div>
            <div className="c-benefit-card hover-lift">
              <div className="c-benefit-icon"><TrendingUp size={28} /></div>
              <h3>Early Growth</h3>
              <p>Direct impact on product direction with competitive compensation and learning pathways.</p>
            </div>
            <div className="c-benefit-card hover-lift">
              <div className="c-benefit-icon"><Rocket size={28} /></div>
              <h3>Innovative Projects</h3>
              <p>Build modern SaaS platforms, automation tools, and highly scalable digital systems.</p>
            </div>
            <div className="c-benefit-card hover-lift">
              <div className="c-benefit-icon"><Users size={28} /></div>
              <h3>Lean Team</h3>
              <p>Work directly with founders and senior leaders with zero bureaucracy and fast execution.</p>
            </div>
          </div>
        </div>
      </section>

      <CTA />

      {/* ================= MODAL OVERLAY ================= */}
      {selectedJob && (
        <div className="c-modal-overlay fade-in-overlay" onClick={closeModal}>
          
          <div className="c-modal-wrapper slide-up-modal" ref={modalRef} onClick={(e) => e.stopPropagation()}>
            
            <button className="c-modal-close" onClick={closeModal} title="Close">
              <X size={22} />
            </button>

            {/* ================= VIEW 1: PREMIUM JOB DETAILS ================= */}
            {!isApplying && !submitSuccess && (
              <div className="c-modal-view fade-in-fast">
                
                <div className="c-modal-hero-header">
                  <div className="header-blob blob-1"></div>
                  <div className="header-blob blob-2"></div>
                  
                  <div className="c-modal-hero-inner">
                    <div className="c-job-tags-hero mb-4">
                      <span className="c-job-type c-job-type-light">
                        <Sparkles size={14} className="tag-icon" /> {selectedJob.type}
                      </span>
                      {selectedJob.spots <= 2 && (
                        <span className="c-spots-badge c-spots-badge-hero">
                          <Flame size={14} /> {selectedJob.spots} spots remaining
                        </span>
                      )}
                    </div>
                    <h1 className="c-modal-hero-title">{selectedJob.role}</h1>
                    <p className="c-modal-hero-subtitle">{selectedJob.text}</p>
                  </div>
                </div>

                <div className="c-modal-body-container">
                  <div className="c-modal-split-layout">
                    
                    {/* Left Main Content */}
                    <div className="c-modal-main-content">
                      <div className="c-content-card">
                        <div className="c-card-header">
                          <div className="c-card-icon bg-indigo-light"><Building size={20} className="text-indigo" /></div>
                          <h3>About the Role</h3>
                        </div>
                        <p>{selectedJob.about}</p>
                      </div>
                      
                      <div className="c-content-card">
                        <div className="c-card-header">
                          <div className="c-card-icon bg-emerald-light"><Rocket size={20} className="text-emerald" /></div>
                          <h3>What You'll Do</h3>
                        </div>
                        <ul className="c-modal-list">
                          {selectedJob.responsibilities.map((req, i) => (
                            <li key={i}><CheckCircle2 size={20} className="c-list-icon text-emerald" /><span>{req}</span></li>
                          ))}
                        </ul>
                      </div>

                      <div className="c-content-card">
                        <div className="c-card-header">
                          <div className="c-card-icon bg-amber-light"><BriefcaseBusiness size={20} className="text-amber" /></div>
                          <h3>Requirements</h3>
                        </div>
                        <ul className="c-modal-list">
                          {selectedJob.requirements.map((req, i) => (
                            <li key={i}><CheckCircle2 size={20} className="c-list-icon text-amber" /><span>{req}</span></li>
                          ))}
                        </ul>
                      </div>

                      <div className="c-content-card">
                        <div className="c-card-header">
                          <div className="c-card-icon bg-rose-light"><Users size={20} className="text-rose" /></div>
                          <h3>Who You Are</h3>
                        </div>
                        <ul className="c-modal-list">
                          {selectedJob.whoYouAre.map((req, i) => (
                            <li key={i}><CheckCircle2 size={20} className="c-list-icon text-rose" /><span>{req}</span></li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right Sidebar Details */}
                    <div className="c-modal-sidebar">
                      <div className="c-sidebar-card shadow-premium">
                        
                        <div className="c-sidebar-section">
                          <h4>Role Overview</h4>
                          <div className="c-sidebar-fact">
                            <div className="fact-icon bg-indigo-light"><MapPin size={18} className="text-indigo"/></div>
                            <div className="fact-text"><small>Location</small><strong>{selectedJob.location}</strong></div>
                          </div>
                          <div className="c-sidebar-fact">
                            <div className="fact-icon bg-emerald-light"><Wallet size={18} className="text-emerald"/></div>
                            <div className="fact-text"><small>Compensation</small><strong>{selectedJob.salary}</strong></div>
                          </div>
                          <div className="c-sidebar-fact">
                            <div className="fact-icon bg-amber-light"><Users size={18} className="text-amber"/></div>
                            <div className="fact-text"><small>Department</small><strong>{selectedJob.team} Team</strong></div>
                          </div>
                          <div className="c-sidebar-fact">
                            <div className="fact-icon bg-rose-light"><Clock3 size={18} className="text-rose"/></div>
                            <div className="fact-text"><small>Employment</small><strong>{selectedJob.type}</strong></div>
                          </div>
                        </div>

                        <div className="c-sidebar-divider"></div>

                        <div className="c-sidebar-section">
                          <h4>Tech Stack</h4>
                          <div className="c-tech-pills">
                            {selectedJob.techStack.map((tech, i) => (
                              <span key={i} className="c-tech-pill">
                                <Code2 size={12} className="text-indigo"/> {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="c-sidebar-divider"></div>

                        <div className="c-sidebar-section">
                          <h4>Perks & Benefits</h4>
                          <ul className="c-perks-list">
                            {selectedJob.perks.map((perk, i) => (
                              <li key={i}><HeartHandshake size={15} className="text-emerald"/> {perk}</li>
                            ))}
                          </ul>
                        </div>

                        <button className="btn btn-primary w-full justify-center mt-6 shadow-glow" onClick={handleApplyClick}>
                          Apply Now <ArrowRight size={18} />
                        </button>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ================= VIEW 2: LOGICAL APPLICATION FORM ================= */}
            {isApplying && !submitSuccess && (
              <div className="c-modal-view c-modal-form-view fade-in-fast">
                
                <div className="c-modal-hero-header form-header-variant">
                  <div className="header-blob blob-1"></div>
                  <div className="header-blob blob-2"></div>
                  <div className="c-modal-hero-inner">
                    <button className="c-btn-back-light" onClick={() => setIsApplying(false)} disabled={isSubmitting}>
                      <ArrowLeft size={16} /> Back to details
                    </button>
                    <h2 className="c-modal-hero-title mt-4">Apply for {selectedJob.role}</h2>
                    <p className="c-modal-hero-subtitle">Complete the form below. Your application will go directly to our hiring team.</p>
                  </div>
                </div>

                <div className="c-modal-body-container c-form-layout-padding">
                  <form onSubmit={handleSubmit} className="c-application-form w-full">
                    
                    {/* Step 1 */}
                    <div className="c-content-card border-card">
                      <div className="c-form-section-title">
                        <div className="step-indicator">1</div>
                        <div>
                          <h3>Personal Information</h3>
                          <p>Tell us how to reach you.</p>
                        </div>
                      </div>

                      <div className="c-form-grid">
                        <div className="c-form-group">
                          <label>First Name <span className="text-red-500">*</span></label>
                          <input type="text" name="firstName" required value={formData.firstName} onChange={handleInputChange} placeholder="John" className="c-input" disabled={isSubmitting} />
                        </div>
                        <div className="c-form-group">
                          <label>Last Name <span className="text-red-500">*</span></label>
                          <input type="text" name="lastName" required value={formData.lastName} onChange={handleInputChange} placeholder="Doe" className="c-input" disabled={isSubmitting} />
                        </div>
                        <div className="c-form-group col-span-full">
                          <label>Email Address <span className="text-red-500">*</span></label>
                          <input type="email" name="email" required value={formData.email} onChange={handleInputChange} placeholder="john.doe@example.com" className="c-input" disabled={isSubmitting} />
                        </div>
                        <div className="c-form-group col-span-full">
                          <label>Contact Number <span className="text-red-500">*</span></label>
                          <input type="tel" name="phone" required value={formData.phone} onChange={handleInputChange} placeholder="+91 9876543210" className={`c-input ${phoneError ? 'c-input-error' : ''}`} disabled={isSubmitting} />
                          {phoneError && <span className="c-error-text text-red-500"><AlertCircle size={12}/> {phoneError}</span>}
                        </div>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="c-content-card border-card mt-6">
                      <div className="c-form-section-title">
                        <div className="step-indicator">2</div>
                        <div>
                          <h3>Professional Details</h3>
                          <p>Let us know about your background and expectations.</p>
                        </div>
                      </div>

                      <div className="c-form-grid">
                        <div className="c-form-group">
                          <label>Total Experience <span className="text-red-500">*</span></label>
                          <div className="c-select-wrapper">
                            <select name="experience" required value={formData.experience} onChange={handleInputChange} className="c-input c-select" disabled={isSubmitting}>
                              <option value="" disabled hidden>Select your experience</option>
                              <option value="Fresher">Fresher (0 years)</option>
                              <option value="1-3 Years">1 - 3 Years</option>
                              <option value="3-5 Years">3 - 5 Years</option>
                              <option value="5+ Years">5+ Years</option>
                            </select>
                          </div>
                        </div>

                        <div className="c-form-group">
                          <label>Expected Compensation <span className="text-red-500">*</span></label>
                          <input type="text" name="expectedCTC" required value={formData.expectedCTC} onChange={handleInputChange} placeholder="E.g. 5 LPA" className="c-input" disabled={isSubmitting} />
                        </div>

                        <div className="c-form-group col-span-full">
                          <label>Are you currently working? <span className="text-red-500">*</span></label>
                          <div className="c-segmented-control">
                            <button type="button" className={`c-segment-btn ${formData.isWorking === 'Yes' ? 'active' : ''}`} onClick={() => setWorkingStatus('Yes')} disabled={isSubmitting}>
                              Yes, I am working
                            </button>
                            <button type="button" className={`c-segment-btn ${formData.isWorking === 'No' ? 'active' : ''}`} onClick={() => setWorkingStatus('No')} disabled={isSubmitting}>
                              No, I am not
                            </button>
                          </div>
                        </div>

                        {formData.isWorking === 'Yes' && (
                          <>
                            <div className="c-form-group fade-in-fast">
                              <label>Current Position <span className="text-red-500">*</span></label>
                              <input type="text" name="currentPosition" required value={formData.currentPosition} onChange={handleInputChange} placeholder="E.g. Junior Developer" className="c-input" disabled={isSubmitting} />
                            </div>
                            <div className="c-form-group fade-in-fast">
                              <label>Current Compensation <span className="text-red-500">*</span></label>
                              <input type="text" name="currentCTC" required value={formData.currentCTC} onChange={handleInputChange} placeholder="E.g. 4 LPA" className="c-input" disabled={isSubmitting} />
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="c-content-card border-card mt-6">
                      <div className="c-form-section-title">
                        <div className="step-indicator">3</div>
                        <div>
                          <h3>Resume / CV</h3>
                          <p>Please upload your most recent resume.</p>
                        </div>
                      </div>

                      <div className="c-form-group mt-4">
                        <div className={`c-dropzone ${formData.resume ? 'has-file' : ''} ${isSubmitting ? 'disabled-dropzone' : ''}`}>
                          <input type="file" id="resume-upload" name="resume" accept=".pdf,.doc,.docx" required onChange={handleFileChange} className="c-file-input-hidden" disabled={isSubmitting} />
                          <label htmlFor="resume-upload" className="c-dropzone-label">
                            {formData.resume ? (
                              <>
                                <div className="c-file-icon-box success"><FileText size={28} /></div>
                                <div className="c-file-info">
                                  <span className="c-file-name">{formData.resume.name}</span>
                                  <span className="c-file-action text-primary">Click to change file</span>
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="c-file-icon-box"><Upload size={28} /></div>
                                <div className="c-file-info">
                                  <span className="c-file-prompt"><strong>Click to upload</strong> or drag and drop</span>
                                  <span className="c-file-sub text-muted">PDF, DOC, or DOCX (Max 5MB)</span>
                                </div>
                              </>
                            )}
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="c-form-footer pt-6 mt-6">
                      <button type="submit" className="btn btn-primary btn-lg w-full justify-center shadow-glow" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>Submitting Application... <Loader2 size={18} className="spin-animation" /></>
                        ) : (
                          <>Submit Application <Send size={18} /></>
                        )}
                      </button>
                      <p className="c-form-disclaimer text-center mt-4 text-muted">By submitting, you agree to our Privacy Policy and Terms of Service.</p>
                    </div>

                  </form>
                </div>
              </div>
            )}

            {/* ================= VIEW 3: SUCCESS STATE ================= */}
            {submitSuccess && (
              <div className="c-modal-success fade-in-fast text-center">
                <div className="c-success-icon-wrapper mx-auto">
                  <div className="c-success-icon"><CheckCircle2 size={60} /></div>
                </div>
                <h2 className="c-success-title mt-6 text-3xl font-bold">Application Submitted!</h2>
                <p className="c-success-desc mt-4 text-muted max-w-lg mx-auto">
                  Thank you for applying to the <strong>{selectedJob.role}</strong> position. Our team will review your profile and contact you shortly.
                </p>
                <button className="btn btn-primary btn-lg mt-8 shadow-glow" onClick={closeModal}>
                  Return to Careers
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}