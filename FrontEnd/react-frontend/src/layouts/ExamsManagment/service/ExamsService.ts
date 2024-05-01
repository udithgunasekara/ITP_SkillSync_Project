import axios, { AxiosResponse } from "axios";

const REST_API_BASE_URL = "http://localhost:8082/api/exams";

interface Exam {
  id: string;
  examName: string;
  examDescription: string;
  noOfAttempts: string;
  questions: Question[];
  timeLimit: string;
}

interface Question {
  questionId: string;
  questionTxt: string;
  options: Option[];
  examId: string;
}

interface Option {
  optionId: string;
  optionTxt: string;
  questionId: string;
}

export const listExams = (): Promise<AxiosResponse<Exam[]>> => axios.get<Exam[]>(REST_API_BASE_URL);

export const createExam = (exam: Exam): Promise<AxiosResponse<Exam>> => axios.post<Exam>(REST_API_BASE_URL, exam);

export const getExam = (examid: string): Promise<AxiosResponse<Exam>> => axios.get<Exam>(`${REST_API_BASE_URL}/${examid}`);

export const updateExam = (examid: string, exam: Exam): Promise<AxiosResponse<Exam>> => axios.put<Exam>(`${REST_API_BASE_URL}/${examid}`, exam);

export const deleteExam = (examid: string): Promise<void> => axios.delete(`${REST_API_BASE_URL}/${examid}`);
