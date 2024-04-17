import { Gig } from "./FreelanceServices";

export const generateGigReport = (gigData: Gig[]) => {
    // Create CSV content
    const csvContent = "Freelancer Name,Gig Title,Gig Description,Gig Category,Gig Date Created\n";
    const formattedData = gigData.map(gig => (
        `${gig.freelancerUsername},${gig.gigTitle},"${gig.gigDescription}",${gig.gigCategory},${gig.gigDateCreated}`
    )).join("\n");

    // Generate CSV file
    const encodedUri = encodeURI('data:text/csv;charset=utf-8,' + csvContent + formattedData);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "gig_report.csv");
    document.body.appendChild(link);
    link.click();

};
