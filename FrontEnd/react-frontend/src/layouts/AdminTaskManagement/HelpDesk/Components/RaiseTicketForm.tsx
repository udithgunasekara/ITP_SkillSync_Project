import { useRef, useState } from "react";
import "./RaiseTicketFormstyle.css";
import { useHistory } from "react-router-dom";
export const RaiseTicketForm = () => {

    const userid = 2
    const history = useHistory();

    const [formData, setFormData] = useState({
        email: "",
        user: {
            userId: userid
        },
        relatedTo: "",
        status: "pending",
        subject: "",
        description: "",
        imageLink: ""
    });
    const formRef = useRef<HTMLFormElement>(null);

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
        console.log(e.target.value);
    };

    const handlesubmt = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8082/ticket/addticket", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                alert("Ticket Raised successfully");
                setFormData({
                    email: "",
                    user: {
                        userId: userid
                    },
                    relatedTo: "",
                    status: "pending",
                    subject: "",
                    description: "",
                    imageLink: ""
                });
                history.push("/tickets");
                formRef.current?.reset();

            } else {
                alert("Failed to Raise Ticket. Please try again");
            }
        } catch (err) {
            console.log(err);
        }
    }



    return (
        <div className="raiseticketform">
            <div className="container">
                <h1 className="d-flex justify-content-center text-dark pt-5">Raise New Ticket</h1>
                <form className="ticketform" onSubmit={handlesubmt}>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" name="email" id="form-control" placeholder="name@example.com" onChange={handleChange} />
                        <label htmlFor="form-control">Email address</label>
                        <p className="text-light fw-bold">Make sure you enter a valid email that we can contact you if needed</p>
                    </div>

                    <div className="form-floating mb-3">
                        <select className="form-select" id="relatedTo" name="relatedTo" aria-label="Related To" required aria-placeholder="select option" onChange={handleChange}>
                            <option /* defaultValue={"other"} */>Select what you have concerns with</option>
                            <option value="Freelancer related">Freelancer related</option>
                            <option value="client related">client related</option>
                            <option value="payment related">payment related</option>
                            <option value="other">other</option>
                        </select>
                        <label htmlFor="relatedTo" className="form-label">Related To</label>
                    </div>

                    <div className="form-floating mb-3 ">
                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Enter subject" onChange={handleChange} />
                        <label htmlFor="subject">Subject</label>
                    </div>

                    <div className="form-floating mb-3">
                        <textarea className="form-control" name="description" id="description" rows={3} placeholder="Enter description" style={{ height: "100px" }} onChange={handleChange}></textarea>
                        <label htmlFor="description" className="form-label">Description</label>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="formFileMultiple" className="form-label text-light fw-bold">Upload any related images</label>
                        <input className="form-control" name="imageLink" type="file" id="formFileMultiple" multiple />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type="reset" className="btn btn-primary">Reset</button>
                </form>
            </div>
        </div>
    );
}