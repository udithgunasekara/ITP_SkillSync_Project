import axios from "axios";


const REST_API_FREELANCER_REG = "http://localhost:8082/Freelancer/Registration";
const REST_API_CLIENT_REG = "http://localhost:8082/Client/Registration";
const REST_API_SOCIAL_LINK = "http://localhost:8082/qualification/addSocialLinks";
const REST_API_QUALIFICATION = "http://localhost:8082/qualification/upload";
const REST_API_REJECTED_QUALIFICATIONS = "http://localhost:8082/qualification/Rejected/";
const REST_API_QUALIFICATION_UPLOAD = "http://localhost:8082/qualification/update";

// this we are getting that informations from the backend server
export const createFreelancer = (freelancer:any) => axios.post(REST_API_FREELANCER_REG, freelancer);
export const createClient = (client:any) => axios.post(REST_API_CLIENT_REG, client);
export const createSocialLink = (socialLinks:any) => axios.post(REST_API_SOCIAL_LINK, socialLinks);
export const createQualification = (Qualifications:any) => axios.post(REST_API_QUALIFICATION, Qualifications);

export const getRejectedQualifications = (username: string) => axios.get<string[]>(`${REST_API_REJECTED_QUALIFICATIONS}${username}`);
export const reUploadQualification = (username: string, title: string, formData: FormData) =>
    axios.put(`${REST_API_QUALIFICATION_UPLOAD}`, formData, {params: { username, title },headers: { 'Content-Type': 'multipart/form-data' }, });
  