import React, { useEffect, useRef, useState } from 'react';
import { deleteExam, listExams } from '../service/ExamsService';
import skillexam from '../Image/skillExam.jpg'
import jsPDF from 'jspdf';
import { listUserResult } from '../service/UserResultService';
import { Link } from 'react-router-dom';


interface Exam {
  id: string;
  examName: string;
  examDescription: string;
  noOfAttempts: string;
}

interface UserResult {
  userNamePk: string;
  examIdPk: string;
  result: string;
}

const ListExamComponents: React.FC = () => {
  const [exams, setExams] = useState<Exam[]>([]);
  const [userResults, setUserResult] = useState<UserResult[]>([]);
  let role = 'moderaor';
  sessionStorage.setItem('role', role);
  const [showServices, setShowServices] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    if (showServices && servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showServices]);

  const backgroundRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    setShowServices(true);
    setIsClicked(true);

    if (backgroundRef.current) {
      const backgroundHeight = backgroundRef.current.offsetHeight;
      // Scroll to the bottom of the page
      setTimeout(() => {
        window.scrollTo({ top: backgroundHeight, behavior: 'smooth' });
      }, 300); // Wait for the transition to complete before scrolling
      }
  };

  const backgroundStyle: React.CSSProperties = {
    backgroundImage: `url(${skillexam})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
  };

  const contentStyle: React.CSSProperties = {
    marginTop: '90px',
    textAlign: 'center',
    color: 'white',
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: isHovered ? '#221733' : isClicked ? '#000000' : '#000000',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '20px', 
    marginTop: '350px',
    transition: 'background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease', 
    boxShadow: isHovered ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none', 
    transform: isHovered ? 'scale(1.05)' : 'scale(1)', 
  };

  useEffect(() => {
    getAllExam();
    getUserResults();
  }, []);

  function getAllExam() {
    listExams()
      .then((response) => {
        setExams(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function getUserResults() {
    listUserResult()
      .then((response) => {
        setUserResult(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // Function to handle search input change
  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Function to filter exams based on search query
  const filteredExams = exams.filter((exam) =>
    exam.examName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  function removeExam(id: string) {
    console.log(id);

    deleteExam(id)
      .then(() => {
        getAllExam();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const generatePDFReport = (exams: Exam[], userResults: UserResult[]) => {
    const pdf = new jsPDF();
  
    const startY = 10;
    const margin = 10;
    const pageWidth = pdf.internal.pageSize.getWidth() - margin * 2;
    const fontSize = 12;
    const lineHeight = fontSize * 1.2;
    const tableColumnWidths = [pageWidth * 0.3, pageWidth * 0.4, pageWidth * 0.3];
  
    pdf.setFontSize(fontSize);
  
    // Add table headers
    pdf.text('Exam Name', margin, startY);
    pdf.text('Total Attempts', margin + tableColumnWidths[0], startY);
    pdf.text('Pass Rate', margin + tableColumnWidths[0] + tableColumnWidths[1], startY);
  
    // Add table rows
    let currentY = startY + lineHeight;
    exams.forEach((exam) => {
      const attempts = userResults.filter((result) => result.examIdPk === exam.id).length;
      const passCount = userResults.filter((result) => result.examIdPk === exam.id && result.result === 'pass').length;
      const passRate = attempts > 0 ? ((passCount / attempts) * 100).toFixed(2) + '%' : 'N/A';
  
      // Check if there is enough space for the next row
      if (currentY + lineHeight > pdf.internal.pageSize.getHeight()) {
        pdf.addPage();
        currentY = startY;
      }
  
      pdf.text(exam.examName, margin, currentY);
      pdf.text(attempts.toString(), margin + tableColumnWidths[0], currentY);
      pdf.text(passRate, margin + tableColumnWidths[0] + tableColumnWidths[1], currentY);
  
      currentY += lineHeight;
    });
  
    pdf.save('exam_report.pdf');
  };

  return (
    <>
    <div ref={backgroundRef} style={backgroundStyle}>
      <div style={contentStyle}>
        <h1 style={{ fontSize: '64px' }}>Welcome to Exams</h1>
        <p style={{ fontSize: '24px' }}>Attempt exams and earn badges</p>
        <button
          style={buttonStyle}
          onClick={handleButtonClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Get started {'>>'}
        </button>
      </div>
    </div>
    {showServices && <>
    <div className="row justify-content-center mb-3">
    <div className="col-10"> {/* Reduce width to 80% */}
      <div className="input-group" style={{ marginTop: '80px' }}>
        <input
          type="text"
          className="form-control"
          placeholder="Search exams by name"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
    </div>
  </div>
    {role === 'moderator' && <>
    <Link to={'/add-exam'}>
      <button 
      className='btn btn-primary mb-2' 
      style={{ marginLeft: '100px' }}>
        Add Exam
      </button>
    </Link>
    <button 
    className='btn btn-success mb-2' 
    onClick={() => generatePDFReport(exams, userResults)}
    style={{ marginLeft: '10px' }}>
      generate report
    </button></>}
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {filteredExams.map((exam) => (
          <div className="col" key={exam.id}>
              <div className="card">
                  <div className="card-body">
                      <h5 className="card-title">{exam.examName}</h5>
                      <p className="card-text">{exam.examDescription}</p>
                      {role === 'moderator' ?<>
                      <Link to={`/edit-exam/${exam.id}`}>
                      <button className='btn btn-info'>
                      Manage
                      </button>
                      </Link>
                      <button
                        className='btn btn-danger'
                        onClick={() => removeExam(exam.id)}
                        style={{ marginLeft: '10px' }}
                      >
                        delete
                      </button></>
                      :<Link to={`/attempt-exam/${exam.id}`}>
                        <button className='btn btn-danger'>
                            view
                        </button>
                      </Link>}
                  </div>
              </div>
          </div>
          ))}
      </div>
    </div>
    </>}</>
  );
};

export default ListExamComponents;