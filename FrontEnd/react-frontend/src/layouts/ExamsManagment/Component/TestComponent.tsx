import React from 'react'

const TestComponent: React.FC = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-lg-4" style={{ flexBasis: '5%' }}>
            {/* First Box: Question Number */}
                <div className="card">
                    <div className="card-body">
                    <h5 className="card-title">Question Number</h5>
                    {/* Add code to display question number */}
                    </div>
                </div>
            </div>
            <div className="col-lg-4" style={{ flexBasis: '55%' }}>
            {/* Second Box: Question and Options */}
                <div className="card">
                    <div className="card-body">
                    <h5 className="card-title">Question</h5>
                    {/* Add code to display question and options */}
                    </div>
                    <div className="card-footer">
                    {/* Add code for next and previous buttons */}
                    </div>
                </div>
            </div>
            <div className="col-lg-4" style={{ flexBasis: '30%' }}>
            {/* Third Box: Question Navigation Panel */}
                <div className="card">
                    <div className="card-body">
                    <h5 className="card-title">Question Navigation</h5>
                    {/* Add code for question navigation panel */}
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default TestComponent

