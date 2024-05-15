import React, { useState } from 'react';

type Qualification = {
  title: string;
  startDate: string;
  endDate: string;
  certificates: File[];
};

const QualificationComponent = () => {
  const [qualification, setQualification] = useState<Qualification>({ title: '', startDate: '', endDate: '', certificates: [] });

  const handleChange = (
    field: keyof Qualification,
    value: string | File[]
  ) => {
    if (field === 'certificates') {
      setQualification({ ...qualification, [field]: value as File[] });
    } else {
      setQualification({ ...qualification, [field]: value as string });
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Process or upload qualification here
    console.log(qualification);
  };

  return (
    
            <form onSubmit={handleSubmit} className="qualification-form container"> 
        <h2 className="text-center mb-4">Add Your Qualification</h2> 
        <p className="text-center mb-3">Please provide the following information about your qualification:</p>
        <div className="row"> 
      <div className="col-md-6 mb-3"> 
        <label htmlFor="qualTitle" className="form-label">Qualification Title</label> 
        <input
          type="text"
          className="form-control"
          id="qualTitle"
          placeholder="Qualification Title"
          value={qualification.title}
          onChange={(e) => handleChange('title', e.target.value)}
        /> 
      </div>
      
      <div className="col-md-3 mb-3">
        <label htmlFor="startDate" className="form-label">Start Date</label> 
        <input
          type="date"
          className="form-control"
          id="startDate"
          value={qualification.startDate}
          onChange={(e) => handleChange('startDate', e.target.value)}
        />
      </div>
      <div className="col-md-3 mb-3"> 
        <label htmlFor="endDate" className="form-label">End Date</label> 
        <input
          type="date"
          className="form-control"
          id="endDate"
          value={qualification.endDate}
          onChange={(e) => handleChange('endDate', e.target.value)}
        /> 
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 mb-3">
        <label htmlFor="certificates" className="form-label">Certificates</label> 
        <input
          type="file"
          className="form-control-file"
          id="certificates"
          multiple
          onChange={(e) => handleChange('certificates', Array.from(e.target.files || []))}
        />
      </div>
    </div>
    <div className="text-center"> 
      <button type="submit" className="btn btn-primary">Submit</button> 
    </div> 
  </form>
  
  );
};

export default QualificationComponent;
