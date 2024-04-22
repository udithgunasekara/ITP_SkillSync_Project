import { Gig } from "./FreelanceServices";
import jsPDF from 'jspdf';
import 'jspdf-autotable';

// Extend jsPDF with the autoTable plugin
interface jsPDFWithAutoTable extends jsPDF {
    autoTable: (options: any) => jsPDF;
}

// Initialize the autoTable plugin
const doc = new jsPDF() as jsPDFWithAutoTable;

export const generateGigReport = (gigData: Gig[]) => {
    // Set font styles
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);

    // Add title
    doc.setTextColor(33, 150, 243); // Set title color to blue
    doc.text("Freelancer gigs report", 105, 20, { align: 'center' });

    // Set font styles for table content
    doc.setFont("helvetica");
    doc.setFontSize(12);

    // Table data
    const data = gigData.map(gig => [
        gig.freelancerUsername,
        gig.gigTitle,
        gig.gigDescription,
        gig.gigCategory,
        gig.gigDateCreated
    ]);

    // Add table using autoTable plugin
    doc.autoTable({
        head: [['Freelancer Name', 'Gig Title', 'Gig Description', 'Gig Category', 'Gig Date Created']],
        body: data,
        startY: 30,
        theme: 'grid',
        styles: { cellPadding: 3, fontSize: 10, valign: 'middle', halign: 'center' },
        columnStyles: { 0: { fontStyle: 'bold' } } // Make the first column bold
    });

    // Save PDF
    doc.save("gig_report.pdf");
};
