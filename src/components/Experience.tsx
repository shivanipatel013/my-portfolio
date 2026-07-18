import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, BookOpen, X } from 'lucide-react';

const education = [
  {
    degree: "Bachelor of Technology",
    major: "Computer Science Engineering",
    school: "Technocrats Institute of Technology",
    score: "CGPA: 8.16",
    year: "2023–2027",
  },
  {
    degree: "Higher Secondary",
    major: "Science (PCM)",
    school: "CBSE Board",
    score: "78.4%",
    year: "2022–2023",
  },
  {
    degree: "High School",
    major: "General Subjects",
    school: "CBSE Board",
    score: "92.40%",
    year: "2020–2021",
  }
];

const certifications = [
  {
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "March 23, 2026",
    image: "/assets/media__1784382994452.png" // Using one of the uploaded images
  },
  {
    title: "NPTEL Programming in Java",
    issuer: "NPTEL",
    date: "Elite, 80%",
    image: "/assets/media__1784382994515.png"
  },
  {
    title: "NPTEL Cloud Computing",
    issuer: "NPTEL",
    date: "Elite, 82%",
    image: "/assets/media__1784382994522.png"
  },
  {
    title: "TCS iON Career Edge – Young Professional",
    issuer: "TCS iON",
    date: "Completed",
    image: "/assets/media__1784382994446.png"
  },
  {
    title: "ServiceNow Certified Implementation Specialist",
    issuer: "ServiceNow",
    date: "Data Foundations",
    image: "assets/media__1784382994435.png"  
  }
];

const Experience = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education Timeline */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-primary/20 rounded-xl text-primary">
                <BookOpen size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Education Timeline</h3>
            </div>
            
            <div className="relative border-l-2 border-white/10 ml-6 space-y-12 pb-4">
              {education.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  className="relative pl-8"
                >
                  <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(59,130,246,0.8)] border-4 border-black"></div>
                  <div className="glass-card p-6 relative group">
                    <span className="absolute -top-4 right-6 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      {item.year}
                    </span>
                    <h4 className="text-xl font-bold text-white mb-1">{item.degree}</h4>
                    <h5 className="text-primary font-medium mb-2">{item.major}</h5>
                    <p className="text-gray-400 mb-2">{item.school}</p>
                    <p className="text-white font-semibold">{item.score}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Gallery */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-secondary/20 rounded-xl text-secondary">
                <Award size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Licenses & Certifications</h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onClick={() => setSelectedImg(cert.image)}
                  className="glass-card overflow-hidden cursor-pointer group flex flex-col"
                >
                  <div className="h-32 overflow-hidden relative">
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10" />
                    <img src={cert.image} alt={cert.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <h4 className="text-white font-semibold text-sm mb-2">{cert.title}</h4>
                    <div>
                      <p className="text-xs text-primary">{cert.issuer}</p>
                      <p className="text-xs text-gray-500">{cert.date}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[1000] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          >
            <button 
              onClick={() => setSelectedImg(null)}
              className="absolute top-6 right-6 text-white hover:text-primary transition-colors"
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImg}
              alt="Certificate"
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl border border-white/10 cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;
