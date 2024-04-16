import { Link, Redirect, useHistory, useParams } from "react-router-dom";
import PublicNoticesModel from "../../../Model/publicNoticesModel";
import { AdminSideBar } from "./AdminSideBar";
import { useEffect, useRef, useState } from "react";
import { SpinnerLoading } from "../../../utils/SpinnerLoading";
import axios from "axios";

export const EditNoticeForm = () => {
    const { noticeId } = useParams<{ noticeId: string }>();
    const [data, setData] = useState<PublicNoticesModel | null>(null);
    const [error, setError] = useState(null);
    const [isloading, setIsloading] = useState(true);
    const [audience, setAudience] = useState<string>("");
    const history = useHistory();
    let response;

    const [formData, setFormData] = useState({
        id: noticeId,
        title: "",
        audience: "",
        description: "",
        moreDetailsLink: ""
    });

    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                response = await axios.get(`http://localhost:8082/notices/findnotice/${noticeId}`);
            } catch (error) {
                throw new Error("Error in fetching data");
            }

            const responsedata = response.data;
            console.log(responsedata);
            setAudience(responsedata.audience);
            setData(responsedata);
            setIsloading(false);
            setFormData({
                id: responsedata.id,
                title: responsedata.title,
                audience: responsedata.audience,
                description: responsedata.description,
                moreDetailsLink: responsedata.moreDetailsLink
            })
        };

        fetchData().catch(
            (error) => {
                setError(error.message)
            }
        )
    }, []);

    if (isloading) {
        return (
            <SpinnerLoading />
        );
    }
    if (error) {
        return (
            <div className="container m-5">
                <p>{error}</p>
            </div>
        );
    }

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setFormData(prevState => ({ ...prevState, [name]: value }));
        console.log(formData);
    };

    const handlesubmt = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8082/notices/updatenotice/${noticeId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                alert("Notice updated successfully");
                setFormData({
                    id: "",
                    title: "",
                    audience: "",
                    description: "",
                    moreDetailsLink: ""
                });

                formRef.current?.reset();
                history.push("/admin/editnotice");
                

            } else {
                alert("Failed to update notice. Please try again");
            }
        } catch (err) {
            console.log(err);
        }
    }




    return (
        <div className="d-flex flex-row" style={{ height: "100vh" }}>
            <AdminSideBar />
            <div className="d-flex flex-column align-items-center" style={{ width: "90%", marginLeft: "10%", marginTop: "45px" }}>
                <div className="d-flex flex-row" style={{ width: "100%" }}>
                    <Link to={"/admin/editnotice"}><button className="btn main-color text-white fw-bolder " style={{ height: "max-content", margin: "15px" }}>Back to All Notices</button></Link> 
                </div>

                <h1 >Edit Notice</h1>

                <form className="d-flex flex-column" style={{ width: "80%" }} ref={formRef} onSubmit={handlesubmt}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name="title" value={formData?.title} required onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="audience" className="form-label">Audience</label>
                        <select className="form-select" name="audience" id="audience" aria-label="Related To" value={formData?.audience} required onChange={handleChange}>

                            <option value="Freelancer">Freelancer</option>
                            <option value="client">client</option>
                            <option value="all">all</option>
                        </select>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea className="form-control" id="description" value={formData?.description} name="description" rows={12} onChange={handleChange} required></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="moreDetailsLink" className="form-label">More Details Link</label>
                        <input type="text" className="form-control" value={formData?.moreDetailsLink} id="moreDetailsLink" name="moreDetailsLink" onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}