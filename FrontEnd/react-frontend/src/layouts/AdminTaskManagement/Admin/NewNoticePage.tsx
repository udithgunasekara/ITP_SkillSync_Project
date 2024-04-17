
import { useRef, useState } from "react";
import { AdminDashboard } from "./components/AdminDashboard";
import { AdminSideBar } from "./components/AdminSideBar";
import { AdminNavbar } from "./components/AdminNavbar";

export const NewNoticePage = () => {

    const [formData, setFormData] = useState({
        title: "",
        audience: "",
        description: "",
        moreDetailsLink: ""
        // imageLink: "",
    });

    const formRef = useRef<HTMLFormElement>(null);

    const handleChange = async (e:React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement> ) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
        console.log(e.target.value);
    };

    // const handlefilechange = async (e:React.ChangeEvent<HTMLInputElement>) => {
    //     const file = e.target.files![0];        
    //     setFormData(prevState => ({ ...prevState, imageLink: file }));
    // }

    const handlesubmt = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            const response = await fetch("http://localhost:8082/notices/addnotice", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            if(response.ok){
                alert("Notice posted successfully");
                setFormData({
                    title: "",
                    audience: "",
                    description: "",
                    moreDetailsLink: ""
                    // imageLink: "",
                });
                formRef.current?.reset();
                
            }else{
                alert("Failed to post notice. Please try again");
            }
        }catch(err){
            console.log(err);
        }
    }


    console.log(formData);

    return (
        <div style={{ height: "100vh" }}>
            <AdminNavbar />
            <div className=" align-items-center below-navbar-admin">
                <div className="raiseticketform">
                    <div className="container">
                        <h1 className="d-flex justify-content-center text-dark pt-3">Post new Notice</h1>               

                        <form className="ticketform" ref={formRef} onSubmit={handlesubmt}>

                            <div className="form-floating mb-3">
                                <input type="text" name="title" className="form-control" id="noticetitle" placeholder="title" onChange={handleChange}/>
                                <label htmlFor="noticetitle">Title</label>
                            </div>

                            <div className="form-floating mb-3">
                                <select className="form-select" name="audience" id="audience" aria-label="Related To" required aria-placeholder="select option" onChange={handleChange}>
                                    <option>Select the audience</option>
                                    <option value="Freelancer">Freelancer</option>
                                    <option value="client">client</option>
                                    <option value="payment">all</option>
                                </select>
                                <label htmlFor="audience" className="form-label">Audience</label>
                            </div>

                            <div className="form-floating mb-3">
                                <textarea className="form-control" name="description" id="description" rows={6} placeholder="Enter description" style={{ height: "200px" }} onChange={handleChange}/>
                                <label htmlFor="description" className="form-label">Description</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="text" name="moreDetailsLink" className="form-control" id="moredetails" placeholder="more details link" onChange={handleChange} />
                                <label htmlFor="moredetails">Link for more details</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="text" name="imageLink" className="form-control" id="imagelink" placeholder="more details link" />
                                <label htmlFor="imagelink">Image link</label>
                            </div>



                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}