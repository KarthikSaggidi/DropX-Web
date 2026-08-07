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
  Building
} from 'lucide-react';

import { jobs } from '../data/siteData.js';
import CTA from '../components/CTA.jsx';

import '../pages/careers.css';

// Expand jobs for demo purposes
const extendedJobs = [...jobs, ...jobs, ...jobs];

const enrichedJobs = extendedJobs.map((job, index) => ({
  ...job,
  id: index + 1,
  spots: [2, 1, 3, 5, 2, 1][index % 6], 
  location: 'Hyderabad / Remote',
  salary: ['₹12L - ₹18L', '₹8L - ₹14L', '₹15L - ₹24L'][index % 3],
  team: ['Engineering', 'Design', 'Operations'][index % 3],
  techStack: [
    ['React', 'Node.js', 'AWS', 'MongoDB'],
    ['Figma', 'UI/UX', 'Prototyping', 'Webflow'],
    ['Jira', 'Agile', 'Client Comms', 'Documentation']
  ][index % 3],
  about: `As a ${job.role} at DropXcorp, you will play a pivotal role in shaping our core digital products. You will work alongside a team of exceptionally talented individuals to build solutions that impact thousands of users globally. We are looking for someone who is passionate, driven, and ready to take ownership of complex challenges.`,
  responsibilities: [
    'Design, develop, and maintain high-performance, scalable digital solutions.',
    'Collaborate closely with cross-functional teams to define and launch new features.',
    'Identify and correct bottlenecks, fix bugs, and continuously optimize application performance.',
    'Maintain code quality, architectural organization, and automated testing pipelines.'
  ],
  requirements: [
    'Proven professional experience in the relevant technology stack.',
    'Strong analytical, problem-solving skills, and a high attention to detail.',
    'Excellent communication and teamwork abilities; you thrive in a collaborative environment.',
    'Degree in Computer Science, Design, Engineering, or equivalent practical experience.'
  ],
  whoYouAre: [
    'You thrive in a fast-paced, agile, and dynamic startup environment.',
    'You have a strong bias for action and take immense pride in your ownership of a project.',
    'You are a continuous learner who loves exploring new technologies and industry trends.'
  ],
  perks: [
    'Comprehensive Health & Dental Coverage',
    'Flexible & Remote-First Work Options',
    'Generous Annual Learning Budget',
    'Latest MacBook Pro & Home Office Stipend'
  ]
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
                  Join a collective of ambitious engineers, designers, and strategists. We’re building modern SaaS platforms, enterprise systems, and intelligent digital experiences.
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
                  We currently have <strong>{enrichedJobs.length}</strong> open positions. Explore exciting opportunities and work on innovative digital products.
                </p>
              </div>
            </div>
          </div>

          <div className="c-jobs-container mt-12">
            <div className="c-jobs-grid">
              {enrichedJobs.map((job) => (
                <div 
                  className="c-job-card hover-lift cursor-pointer" 
                  key={job.id} 
                  onClick={() => openJobDetails(job)} 
                >
                  <div className="c-job-card-header">
                    <div className="c-job-icon">
                      <BriefcaseBusiness size={24} />
                    </div>
                    <div className="c-job-tags-top">
                      {job.spots <= 2 && (
                        <span className="c-spots-badge">
                          <Flame size={14} /> {job.spots} spots left
                        </span>
                      )}
                      <span className="c-job-type">{job.type}</span>
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
                        <span>Full Time</span>
                      </div>
                    </div>

                    <button 
                      className="c-btn-apply"
                      onClick={(e) => {
                        e.stopPropagation(); 
                        openJobDetails(job, true); 
                      }}
                    >
                      Apply Now <ArrowRight size={16} />
                    </button>
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
                  We focus on innovation, personal growth, and creating an inspiring workplace where top talent can thrive.
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
              <h3>Learning & Growth</h3>
              <p>Access to continuous mentorship, training budgets, and exposure to cutting-edge technologies.</p>
            </div>
            <div className="c-benefit-card hover-lift">
              <div className="c-benefit-icon"><Rocket size={28} /></div>
              <h3>Innovative Projects</h3>
              <p>Work on complex SaaS platforms, AI tools, enterprise ERP systems, and highly scalable products.</p>
            </div>
            <div className="c-benefit-card hover-lift">
              <div className="c-benefit-icon"><Users size={28} /></div>
              <h3>Team Culture</h3>
              <p>Collaborate with a passionate, highly creative, and supportive development team every single day.</p>
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
                            <div className="fact-text"><small>Salary Range</small><strong>{selectedJob.salary}</strong></div>
                          </div>
                          <div className="c-sidebar-fact">
                            <div className="fact-icon bg-amber-light"><Users size={18} className="text-amber"/></div>
                            <div className="fact-text"><small>Department</small><strong>{selectedJob.team} Team</strong></div>
                          </div>
                          <div className="c-sidebar-fact">
                            <div className="fact-icon bg-rose-light"><Clock3 size={18} className="text-rose"/></div>
                            <div className="fact-text"><small>Employment</small><strong>Full-Time</strong></div>
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
                    <p className="c-modal-hero-subtitle">Complete the form below. Your application will be sent directly to our hiring managers.</p>
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
                          <label>Expected CTC <span className="text-red-500">*</span></label>
                          <input type="text" name="expectedCTC" required value={formData.expectedCTC} onChange={handleInputChange} placeholder="E.g. 15 LPA" className="c-input" disabled={isSubmitting} />
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
                              <input type="text" name="currentPosition" required value={formData.currentPosition} onChange={handleInputChange} placeholder="E.g. Senior Frontend Dev" className="c-input" disabled={isSubmitting} />
                            </div>
                            <div className="c-form-group fade-in-fast">
                              <label>Current CTC <span className="text-red-500">*</span></label>
                              <input type="text" name="currentCTC" required value={formData.currentCTC} onChange={handleInputChange} placeholder="E.g. 10 LPA" className="c-input" disabled={isSubmitting} />
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
                  Thank you for applying to the <strong>{selectedJob.role}</strong> position. Our talent acquisition team will review your profile and contact you shortly.
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