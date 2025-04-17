










// src/ApprovalForm.js
import React, { useState } from 'react';
import jsPDF from 'jspdf';

const ApprovalForm = () => {
  const [experienceInput, setExperienceInput] = useState('');
  const [clearedInput, setClearedInput] = useState('');

  const handleExperienceChange = (e) => {
    setExperienceInput(e.target.value);
  };

  const handleClearedChange = (e) => {
    setClearedInput(e.target.value);
  };

  const generateExperiencePDF = () => {
    const doc = new jsPDF();

    // Add header and document details
    doc.setFontSize(12);
    doc.text('ADDIS ABABA SCIENCE & TECHNOLOGY UNIVERSITY', 20, 20);
    doc.text('Document No: PQ/001/01', 20, 30);
    doc.text('Issue No: 1', 20, 35);
    doc.text('Page No: 1 of 1', 20, 40);
    doc.text('INTER-OFFICE MEMO', 20, 45);
    doc.text('TO:', 20, 50);
    doc.text('_____________________', 20, 55);
    doc.text('FROM:', 20, 65);
    doc.text('_____________________', 20, 70);
    doc.text('DATE:', 20, 80);
    doc.text('_____________________', 20, 85);
    doc.text('SUBJECT:', 20, 95);
    doc.text('_____________________', 20, 100);
    doc.text('MESSAGE:', 20, 110);
    
    // Add dynamic experience input
    doc.text(experienceInput, 20, 120);

    // Save the document
    doc.save('experience-paper.pdf');
  };

  const generateClearedPDF = () => {
    const doc = new jsPDF();
    doc.text(`Cleared Status Paper:\n\n${clearedInput}`, 10, 10);
    doc.save('cleared-status-paper.pdf');
  };

  return (
    <div>
      <h2>Experience Paper</h2>
      <textarea
        value={experienceInput}
        onChange={handleExperienceChange}
        placeholder="Enter experience details"
      />
      <button onClick={generateExperiencePDF}>Download Experience Paper</button>

      <h2>Cleared Status Paper</h2>
      <textarea
        value={clearedInput}
        onChange={handleClearedChange}
        placeholder="Enter cleared status details"
      />
      <button onClick={generateClearedPDF}>Download Cleared Status Paper</button>
    </div>
  );
};

export default ApprovalForm;