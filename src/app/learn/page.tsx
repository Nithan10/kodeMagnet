"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle2, 
  Briefcase, 
  GraduationCap, 
  Terminal, 
  Code2, 
  Cpu, 
  ArrowRight,
  Star,
  X,
  Loader2
} from "lucide-react";
import { NavbarDemo } from "../components-main/Navbar";
// 1. Import Footer
import Footer from "../components-main/Footer";

// Updated Accent Color
const accentColor = "#FF5F38";

export default function LearnPage() {
  // State for Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState("Internship Program");

  const openModal = (interest: string) => {
    setSelectedInterest(interest);
    setIsModalOpen(true);
  };

  return (
    // Updated Selection Color
    <main className="min-h-screen bg-neutral-950 text-white selection:bg-[#FF5F38] selection:text-white font-sans overflow-x-hidden">
      
      <div className="relative z-50">
        <NavbarDemo />
      </div>

      {/* ======================= HERO SECTION ======================= */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Gradients - Updated to Orange */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#FF5F38]/10 blur-[120px] rounded-full -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full -z-10"></div>
        
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-[#FF5F38] mb-6"
          >
            <span className="mr-2">🚀</span> Launch your career in 10 months
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
          >
            Don't just learn to code. <br />
            {/* Gradient Text Updated */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FF5F38] to-white">
              Get paid to build products.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-neutral-400 max-w-3xl mx-auto mb-12"
          >
            Join our industry-standard training program. Train with senior developers, work on live products, and earn a guaranteed stipend.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* TRIGGER MODAL - Orange Button */}
              <button 
                onClick={() => openModal("Internship Program")}
                className="px-8 py-4 rounded-full bg-[#FF5F38] text-white font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,95,56,0.3)]"
              >
                Apply for Internship
              </button>
              <button className="px-8 py-4 rounded-full border border-white/20 font-bold text-lg hover:bg-white/5 transition-colors">
                View Syllabus
              </button>
          </div>
        </div>
      </section>

      {/* ======================= PROGRAM 1: THE FLAGSHIP (HTD) ======================= */}
      <section className="py-20 px-6">
         <div className="max-w-7xl mx-auto">
            <div className="mb-12 flex items-end justify-between">
               <div>
                  <h2 className="text-4xl font-bold mb-2">The Career Accelerator</h2>
                  <p className="text-neutral-400">Hire - Train - Deploy Model</p>
                  
               </div>
               <div className="hidden md:block text-right">
                  <div className="text-3xl font-bold text-[#FF5F38]">₹72,000</div>
                  <div className="text-sm text-neutral-500">Assured Stipend Earnings</div>
               </div>
            </div>

            {/* THE TIMELINE CARD */}
            <div className="bg-neutral-900 border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
               {/* Badge Updated */}
               <div className="absolute top-0 right-0 p-4 bg-[#FF5F38] text-white font-bold rounded-bl-2xl z-10">
                  EMI Available
               </div>

               <div className="grid lg:grid-cols-3 gap-12 relative z-10">
                  
                  {/* Phase 1 */}
                  <div className="relative pl-8 border-l-2 border-dashed border-white/20">
                     {/* Dot Border Updated */}
                     <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-neutral-800 border-4 border-[#FF5F38]"></div>
                     <h3 className="text-2xl font-bold text-white mb-2">Phase 1: Training</h3>
                     <div className="inline-block px-3 py-1 rounded bg-white/10 text-xs font-bold mb-4">4 Months</div>
                     <p className="text-neutral-400 mb-4">Full-day, full-fledged training with experienced developers. No "Hello World" tutorials—just deep dives into architecture and logic.</p>
                     <ul className="space-y-2 text-sm text-neutral-300">
                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5F38]"/> Industry Standard Curriculum</li>
                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5F38]"/> Daily Code Reviews</li>
                     </ul>
                  </div>

                  {/* Phase 2 */}
                  <div className="relative pl-8 border-l-2 border-dashed border-white/20">
                     <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-neutral-800 border-4 border-yellow-500"></div>
                     <h3 className="text-2xl font-bold text-white mb-2">Phase 2: Internship</h3>
                     <div className="inline-block px-3 py-1 rounded bg-yellow-500/20 text-yellow-500 text-xs font-bold mb-4">6 Months</div>
                     <p className="text-neutral-400 mb-4">You are inducted as an intern working on our own SaaS products (CodeLeads, Kodegraphy).</p>
                     <div className="bg-neutral-800 p-4 rounded-xl border border-white/5 mb-4">
                        <div className="flex justify-between items-center mb-1">
                           <span className="text-sm text-neutral-400">Monthly Stipend</span>
                           <span className="font-bold text-green-400">₹12,000</span>
                        </div>
                        <div className="flex justify-between items-center border-t border-white/10 pt-1 mt-1">
                           <span className="text-sm text-neutral-400">Total Value</span>
                           <span className="font-bold text-white">₹72,000</span>
                        </div>
                     </div>
                  </div>

                  {/* Phase 3 */}
                  <div className="relative pl-8 border-l-2 border-dashed border-white/20">
                     <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-neutral-800 border-4 border-green-500"></div>
                     <h3 className="text-2xl font-bold text-white mb-2">Phase 3: Employment</h3>
                     <div className="inline-block px-3 py-1 rounded bg-green-500/20 text-green-500 text-xs font-bold mb-4">Full Time</div>
                     <p className="text-neutral-400 mb-4">Based on your performance, we absorb you as a full-time employee.</p>
                     <div className="text-center bg-gradient-to-br from-green-500/20 to-transparent p-6 rounded-xl border border-green-500/30">
                        <div className="text-sm text-neutral-300 uppercase tracking-wide mb-1">Salary Package</div>
                        <div className="text-3xl font-bold text-white">3 - 5 LPA</div>
                     </div>
                  </div>

               </div>
            </div>

            {/* STACKS AVAILABLE */}
            <div className="grid md:grid-cols-4 gap-4 mt-8">
               
               <StackCard title="Java Full Stack" icon={<Briefcase />} />
               <StackCard title="Python Full Stack" icon={<Terminal />} />
               <StackCard title="MERN Stack" icon={<Code2 />} />
               <StackCard title="MEAN Stack" icon={<Cpu />} />
            </div>
         </div>
      </section>

      {/* ======================= PROGRAM 2: SKILL MASTERY ======================= */}
      <section className="py-20 px-6 bg-neutral-900/30 border-y border-white/5">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-4xl font-bold mb-4">Skill Upgrade Courses</h2>
               <p className="text-neutral-400">Master a specific technology with placement support.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
               
               {/* Pricing Card */}
               <div className="bg-neutral-950 border border-white/10 rounded-3xl p-8 lg:p-12 relative shadow-2xl hover:border-[#FF5F38]/50 transition-colors">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-[#FF5F38] shadow-[0_0_20px_#FF5F38]"></div>
                  <div className="text-center mb-8">
                     <h3 className="text-xl font-medium text-neutral-400 mb-2">Single Course Package</h3>
                     <div className="text-6xl font-bold text-white mb-2">₹10,000</div>
                     <p className="text-sm text-[#FF5F38]">One Time Payment</p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                     <BenefitItem text="Course Completion Certificate" />
                     <BenefitItem text="Internship Certificate" />
                     <BenefitItem text="Placement Support" />
                  </div>

                  {/* TRIGGER MODAL - Orange Hover */}
                  <button 
                    onClick={() => openModal("Single Skill Course")}
                    className="w-full py-4 rounded-xl bg-white text-black font-bold hover:bg-[#FF5F38] hover:text-white transition-colors"
                  >
                     Enroll Now
                  </button>
               </div>
               
               {/* Course List */}
               <div className="grid sm:grid-cols-2 gap-4">
                  <div className="col-span-2 mb-4">
                     <h3 className="text-2xl font-bold mb-2">Available Technologies</h3>
                     <p className="text-neutral-400">Choose any one language/framework:</p>
                  </div>
                  <CourseBadge name="Java Core & Adv" />
                  <CourseBadge name="Python" />
                  <CourseBadge name="C Programming" />
                  <CourseBadge name="C++" />
                  <CourseBadge name="JavaScript" />
                  <CourseBadge name="React JS" />
               </div>

            </div>
         </div>
      </section>

      {/* ======================= CTA ======================= */}
      <section className="py-20 bg-[#FF5F38] text-white text-center px-6">
         <h2 className="text-4xl font-bold mb-6">Seats are limited for the Stipend Program.</h2>
         <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            We only onboard 20 interns per batch to ensure quality mentorship and product development standards.
         </p>
         {/* TRIGGER MODAL - Black Button for Contrast */}
         <button 
            onClick={() => openModal("Internship Program")}
            className="inline-flex items-center gap-2 bg-black text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform"
         >
            Secure Your Spot <ArrowRight className="w-5 h-5"/>
         </button>
      </section>

      {/* ======================= FOOTER ======================= */}
      <div className="relative z-30">
        <Footer />
      </div>

      {/* ======================= THE MODAL ======================= */}
      <EnrollmentModal 
         isOpen={isModalOpen} 
         onClose={() => setIsModalOpen(false)} 
         initialInterest={selectedInterest} 
      />

    </main>
  );
}

// ================= COMPONENT: ENROLLMENT MODAL =================

const EnrollmentModal = ({ isOpen, onClose, initialInterest }: { isOpen: boolean, onClose: () => void, initialInterest: string }) => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", interest: initialInterest });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update interest if prop changes
  React.useEffect(() => {
      setFormData(prev => ({ ...prev, interest: initialInterest }));
  }, [initialInterest]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Application Submitted Successfully! We will contact you shortly.");
      onClose();
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm"
          />
          
          {/* Modal Container */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.95, y: 20 }}
             animate={{ opacity: 1, scale: 1, y: 0 }}
             exit={{ opacity: 0, scale: 0.95, y: 20 }}
             className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none"
          >
             {/* The Actual Modal Content */}
             <div className="bg-neutral-900 border border-white/10 w-full max-w-lg rounded-3xl p-8 relative pointer-events-auto shadow-2xl shadow-[#FF5F38]/10 overflow-hidden">
                
                {/* Close Button */}
                <button 
                  onClick={onClose} 
                  className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5 text-neutral-400" />
                </button>

                {/* Decorative Glow */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF5F38] to-transparent"></div>

                <div className="mb-8">
                   <h2 className="text-2xl font-bold text-white mb-2">Apply Now</h2>
                   <p className="text-neutral-400 text-sm">Fill in your details to secure your spot in the batch.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                   <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-neutral-500">Full Name</label>
                      <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-neutral-950 border border-white/10 rounded-xl p-3 text-white focus:border-[#FF5F38] focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                   </div>

                   <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-wider text-neutral-500">Email</label>
                          <input 
                            required
                            type="email" 
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full bg-neutral-950 border border-white/10 rounded-xl p-3 text-white focus:border-[#FF5F38] focus:outline-none transition-colors"
                            placeholder="john@example.com"
                          />
                      </div>
                      <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-wider text-neutral-500">Phone</label>
                          <input 
                            required
                            type="tel" 
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            className="w-full bg-neutral-950 border border-white/10 rounded-xl p-3 text-white focus:border-[#FF5F38] focus:outline-none transition-colors"
                            placeholder="+91 98765 43210"
                          />
                      </div>
                   </div>

                   <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-neutral-500">Selected Program</label>
                      <select 
                         value={formData.interest}
                         onChange={(e) => setFormData({...formData, interest: e.target.value})}
                         className="w-full bg-neutral-950 border border-white/10 rounded-xl p-3 text-white focus:border-[#FF5F38] focus:outline-none transition-colors appearance-none"
                      >
                         <option value="Internship Program">Internship Program (₹72k Stipend)</option>
                         <option value="Single Skill Course">Single Skill Course (₹10k)</option>
                         <option value="Java Full Stack">Java Full Stack</option>
                         <option value="Python Full Stack">Python Full Stack</option>
                         <option value="MERN Stack">MERN Stack</option>
                      </select>
                   </div>

                   <button 
                      disabled={isSubmitting}
                      type="submit" 
                      className="w-full py-4 mt-4 rounded-xl bg-[#FF5F38] text-white font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                   >
                      {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin"/> : "Submit Application"}
                   </button>
                </form>

             </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// --- Helper Components ---

const StackCard = ({ title, icon }: { title: string, icon: React.ReactNode }) => (
   <div className="bg-neutral-800/50 border border-white/5 p-6 rounded-xl flex items-center gap-4 hover:bg-neutral-800 transition-colors group">
      <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-[#FF5F38] group-hover:scale-110 transition-transform">
         {icon}
      </div>
      <span className="font-bold text-white">{title}</span>
   </div>
);

const BenefitItem = ({ text }: { text: string }) => (
   <div className="flex items-center gap-3">
      <div className="w-6 h-6 rounded-full bg-[#FF5F38]/20 flex items-center justify-center">
         <CheckCircle2 className="w-4 h-4 text-[#FF5F38]" />
      </div>
      <span className="text-neutral-300">{text}</span>
   </div>
);

const CourseBadge = ({ name }: { name: string }) => (
   <div className="p-4 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-between hover:border-[#FF5F38] transition-colors cursor-default">
      <span className="font-medium text-white">{name}</span>
      <ArrowRight className="w-4 h-4 text-neutral-600" />
   </div>
);