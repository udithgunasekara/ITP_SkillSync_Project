import "./RaiseTicketFormstyle.css";
export const RaiseTicketForm = () => {

    
    return (
        <div className="raiseticketform">
            <div className="container">
                <h1 className="d-flex justify-content-center text-dark pt-5">Raise New Ticket</h1>
                <form className="ticketform">
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="form-control" placeholder="name@example.com" />
                        <label htmlFor="form-control">Email address</label>
                        <p className="text-light fw-bold">Make sure you enter a valid email that we can contact you if needed</p>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">User Name</label>
                    </div>

                    <div className="form-floating mb-3">
                        <select className="form-select" id="relatedTo" aria-label="Related To" required aria-placeholder="select option">
                            <option /* defaultValue={"other"} */>Select what you have concerns with</option>
                            <option value="Freelancer related">Freelancer related</option>
                            <option value="client related">client related</option>
                            <option value="payment related">payment related</option>
                            <option value="other">other</option>
                        </select>
                        <label htmlFor="relatedTo" className="form-label">Related To</label>
                    </div>

                    <div className="form-floating mb-3 ">
                        <input type="text" className="form-control" id="subject" placeholder="Enter subject" />
                        <label htmlFor="subject">Subject</label>
                    </div>

                    <div className="form-floating mb-3">
                        <textarea className="form-control" id="description" rows={3} placeholder="Enter description" style={{ height: "100px" }}></textarea>
                        <label htmlFor="description" className="form-label">Description</label>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="formFileMultiple" className="form-label text-light fw-bold">Upload any related images</label>
                        <input className="form-control" type="file" id="formFileMultiple" multiple />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}