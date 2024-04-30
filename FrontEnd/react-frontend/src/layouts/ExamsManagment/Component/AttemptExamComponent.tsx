import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getUserResultById } from '../service/UserResultService';
import { getExam } from '../service/ExamsService';
import { getUserAttemptsById, saveUserAttempts, updateUserAttempts } from '../service/UserAttemptsService';

const AttemptExamComponent: React.FC = () => {
    const {examIdPk = ''} = useParams<{ examIdPk: string }>();
    const userNamePk = sessionStorage.getItem('userName') || '';
    const [result, setResult] = useState('');
    const enrolledExam = sessionStorage.getItem('examIdPk') || null;
    const [examName, setExamName] = useState('');
    const [examDescription, setExamDescription] = useState('');
    const [noOfExamAttempts, setNoOfExamAttempts] = useState('');
    const [timeLimt, setTimeLimit] = useState('');
    const [noOfUserAttempts, setNoOfUserAttempts] = useState('');
    const [canAttempt, setCanAttempt] = useState<boolean>();

    getExam(examIdPk)
    .then((response) => {
      setExamName(response.data.examName);
      setExamDescription(response.data.examDescription);
      setNoOfExamAttempts(response.data.noOfAttempts);
      setTimeLimit(response.data.timeLimit);
    })
    .catch((error) => {
      console.error(error);
    });

    getUserResultById(userNamePk, examIdPk)
      .then((response) => {
        if(response.data.result){
          setResult(response.data.result); 
        }
      })
      .catch((error) => {
        console.error(error);
      });

    getUserAttemptsById(userNamePk, examIdPk)
    .then((response) => {
      setNoOfUserAttempts(response.data.noOfAttempts);
      if(noOfUserAttempts){
        if(parseInt(noOfExamAttempts) <= parseInt(noOfUserAttempts)){
          setCanAttempt(false);
        }else{
          setCanAttempt(true);
        }
      }else{
        setCanAttempt(true);
      }
      console.log(canAttempt)
    })
    .catch((error) => {
      console.error(error);
    });

    useEffect(() => {
      if(noOfUserAttempts){
          if(parseInt(noOfExamAttempts) <= parseInt(noOfUserAttempts)){
              setCanAttempt(false);
          } else {
              setCanAttempt(true);
          }
      } else {
          setCanAttempt(true);
      }
  }, [noOfUserAttempts, noOfExamAttempts]);

    function saveOrUpdateUserAttemptsById(){
      let noOfAttempts = noOfUserAttempts;
      const userAttempts = {userNamePk, examIdPk, noOfAttempts};
      if(noOfUserAttempts){
        noOfAttempts = (parseInt(noOfAttempts) + 1).toString();
        updateUserAttempts(userNamePk, examIdPk, userAttempts)
        .then((response) => {
          console.log(response.data)
        })
        .catch((error) => {
          console.error(error);
        });
      }else{
        noOfAttempts = '1';
        saveUserAttempts(userAttempts)
        .then((response) => {
          console.log(response.data)
        })
        .catch((error) => {
          console.error(error);
        });
      }
    }
  return (
    <><br></br><br></br><br></br>
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body text-center">
              <h1>{examName}</h1>
              <h5>{examDescription}</h5>
              {noOfUserAttempts? 
              <p>No Attempts Left : {parseInt(noOfExamAttempts) - parseInt(noOfUserAttempts)}</p>
              :<p>No Attempts Left : {parseInt(noOfExamAttempts) - 0}</p>}
              
              <p>Time Limit : {timeLimt}</p>
              {enrolledExam ? (
                <div>
                  {enrolledExam !== examIdPk ? (
                    <div>
                      <Link to={`/attempt-exam/${enrolledExam}`}>
                      <button className="btn btn-danger">
                        Go To Enrolled Exam
                      </button>
                      </Link>
                      <h3>Your already Doing Exam</h3>
                    </div>
                  ) : (
                    <div>
                      <h2>Answers not submitted! Re-attempt to continue the exam</h2>
                      <h3>summry of your previous attempts</h3>
                      <table className='table table-striped table-bordered'>
                        <thead>
                        <tr>
                          <th>attempts</th>
                          <th>state</th>
                          <th>result</th>
                        </tr>
                        </thead>
                        <tbody>
                          <tr>
                          <td>{noOfUserAttempts? noOfUserAttempts: '0'}</td>
                          <td>In progress</td>
                          <td>{result? result:'not permitted'}</td>
                          </tr>
                        </tbody>
                      </table>
                      <Link to={`/take-exam/${examIdPk}`}>
                      <button className="btn btn-danger">
                        Re-Attempt
                      </button>
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  {canAttempt ? (
                    <div>
                      <h3>summry of your previous attempts</h3>
                      <table className='table table-striped table-bordered'>
                        <thead>
                        <tr>
                          <th>attempts</th>
                          <th>state</th>
                          <th>result</th>
                        </tr>
                        </thead>
                        <tbody>
                          <tr>
                          <td>{noOfUserAttempts? noOfUserAttempts: '0'}</td>
                          <td>not Attempted</td>
                          <td>{result? result:'not permitted'}</td>
                          </tr>
                        </tbody>
                      </table>
                      <Link to={`/take-exam/${examIdPk}`}>
                      <button className="btn btn-danger" onClick={() => saveOrUpdateUserAttemptsById()}>
                        Attempt
                      </button>
                      </Link>
                    </div>
                  ) : (
                    <div>
                      <h3>summry of your previous attempts</h3>
                      <table className='table table-striped table-bordered'>
                        <thead>
                        <tr>
                          <th>attempts</th>
                          <th>state</th>
                          <th>result</th>
                        </tr>
                        </thead>
                        <tbody>
                          <tr>
                          <td>{noOfUserAttempts? noOfUserAttempts: '0'}</td>
                          <td>Finished</td>
                          <td>{result? result:'not permitted'}</td>
                          </tr>
                        </tbody>
                      </table>
                      <Link to={'/exams'}>
                      <button className="btn btn-danger">
                        Back To exam
                      </button>
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default AttemptExamComponent