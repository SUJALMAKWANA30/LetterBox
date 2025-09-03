import React, { useRef, useState } from 'react';
import Header from '../../components/User/Header';
import { BsThreeDotsVertical } from 'react-icons/bs';

const templates = [
  { title: 'Leave Application', content: `Respected Sir/Madam,\n\nI am writing to request leave from [Start Date] to [End Date] due to [Reason].\n\nSincerely,\n[Your Name]` },
  { title: 'Bonafide Certificate', content: `Respected Sir/Madam,\n\nI am a student of [Department]. Please issue a Bonafide Certificate for [Purpose].\n\nSincerely,\n[Your Name]` },
  { title: 'Extension Request', content: `Respected Sir/Madam,\n\nI request an extension for my project due to [Reason]. Kindly allow [New Date].\n\nSincerely,\n[Your Name]` },
  { title: 'Late Submission', content: `Respected Sir/Madam,\n\nDue to unforeseen circumstances, I could not submit on time. Kindly allow a late submission.\n\nSincerely,\n[Your Name]` },
  { title: 'Hostel Leave Request', content: `Respected Warden,\n\nI request permission to leave the hostel from [Date] to [Date] for [Reason].\n\nSincerely,\n[Your Name]` },
  { title: 'Hostel Leave Request', content: `Respected Warden,\n\nI request permission to leave the hostel from [Date] to [Date] for [Reason].\n\nSincerely,\n[Your Name]` },
  { title: 'Hostel Leave Request', content: `Respected Warden,\n\nI request permission to leave the hostel from [Date] to [Date] for [Reason].\n\nSincerely,\n[Your Name]` },
  { title: 'Hostel Leave Request', content: `Respected Warden,\n\nI request permission to leave the hostel from [Date] to [Date] for [Reason].\n\nSincerely,\n[Your Name]` },
];

const recentApplications = [
  { title: 'Leave for Family Function', preview: 'I am writing to request leave from 1st to 3rd August due to a family event...', time: 'Opened 26 Jul 2025' },
  { title: 'Certificate for Internship', preview: 'Please issue a Bonafide Certificate as it’s required by the internship firm...', time: 'Opened 25 Jul 2025' }
];

function Application() {
  const [searchTerm, setSearchTerm] = useState('');
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const templatesPerPage = 8;

  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const toggleMenu = (index, e) => {
    e.stopPropagation();
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  const handleAction = (action, title) => {
    alert(`${action} clicked for: ${title}`);
    setOpenMenuIndex(null);
  };

  const handleTemplateClick = (title) => {
    alert(`You selected: ${title}`);
  };

  const filteredTemplates = templates.filter(t =>
    t.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredRecent = recentApplications.filter(r =>
    r.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <section className="w-full max-w-6xl py-10 font-sans">

          {/* Search Bar */}
          <div className="w-full max-w-md mb-10">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search applications or templates..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Start a new Document */}
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-left">Start a new Document</h2>
          <div className="flex flex-wrap gap-8 mb-16">
            <div onClick={() => handleTemplateClick('Blank Document')} className="cursor-pointer">
              <div className="w-[200px] h-[250px] bg-white border border-gray-300 hover:shadow-md transition-shadow flex items-center justify-center">
                <span className="text-purple-600 text-6xl font-bold">+</span>
              </div>
              <div className="mt-2 w-full">
                <h4 className="text-sm font-medium text-gray-900 truncate text-left">Blank Document</h4>
                <p className="text-xs text-gray-500 text-left">Untitled</p>
              </div>
            </div>
          </div>

          {/* Templates Section */}
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-left">Templates</h2>
          <div className="relative">
            <div
              ref={scrollRef}
              className="flex overflow-x-auto space-x-6 px-1 pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent cursor-grab active:cursor-grabbing"
              style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              {filteredTemplates.map((template, index) => (
                <div
                  key={index}
                  onClick={() => handleTemplateClick(template.title)}
                  className="flex-shrink-0 cursor-pointer w-[200px] snap-start"
                >
                  <div className="h-[250px] bg-gradient-to-br from-purple-100 to-orange-100 border border-gray-300 hover:shadow-md transition-shadow" />
                  <div className="mt-2">
                    <h4 className="text-sm font-medium text-gray-900 truncate text-left">{template.title}</h4>
                    <p className="text-xs text-gray-500 text-left">Template</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Applications */}
          <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-16 text-left">Recent Applications</h2>
          <div className="flex flex-wrap gap-8 pb-20">
            {filteredRecent.map((app, index) => (
              <div key={index} className="cursor-pointer relative">
                <div
                  onClick={() => handleTemplateClick(app.title)}
                  className="relative w-[300px] h-[360px] bg-gray-100 border border-gray-300 hover:shadow-md transition-shadow"
                >
                  <div className="absolute bottom-0 left-0 w-full bg-white/90 px-3 py-2 border-t border-gray-200">
                    <div className="flex justify-between items-start relative">
                      <div>
                        <h4 className="text-sm font-medium text-gray-800 truncate">{app.title}</h4>
                        <p className="text-xs text-gray-500 text-left mt-1">{app.time}</p>
                      </div>
                      <button
                        onClick={(e) => toggleMenu(index, e)}
                        className="text-gray-500 hover:text-gray-700 mt-1"
                      >
                        <BsThreeDotsVertical size={20} className='cursor-pointer'/>
                      </button>
                      {openMenuIndex === index && (
                        <div className="absolute right-0 top-8 bg-white border border-gray-300 shadow-md rounded-md z-10 w-32">
                          <button
                            onClick={() => handleAction('Rename', app.title)}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Rename
                          </button>
                          <button
                            onClick={() => handleAction('Delete', app.title)}
                            className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                          >
                            Delete
                          </button>
                          <button
                            onClick={() => handleAction('View', app.title)}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            View
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Application;
