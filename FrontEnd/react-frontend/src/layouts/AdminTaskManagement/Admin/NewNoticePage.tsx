
import { useRef, useState } from "react";
import { storage } from "../../../utils/Firebase"
import { getDownloadURL,ref,uploadBytesResumable } from "firebase/storage";
import { AdminDashboard } from "./components/AdminDashboard/AdminDashboard";
import { AdminSideBar } from "./components/AdminSideBar";
import { AdminNavbar } from "./components/AdminNavbar";
import {v4} from "uuid"

export const NewNoticePage = () => {

    const [imageupload,setImageUpload] = useState<any>("");
    const [image,setImage] = useState("");
    const [uploadprogress, setUploadProgress] = useState(0);

    const [formData, setFormData] = useState({
        title: "",
        audience: "",
        description: "",
        moreDetailsLink: null,
        imagelink: null
    });

    const formRef = useRef<HTMLFormElement>(null);

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        let sanitizedInput: string = "";

        if (/[^a-zA-Z0-9\s]/.test(e.target.value)) {
            sanitizedInput = e.target.value.replace(/[^\w\s]/g, '');
        } else {
            sanitizedInput = "ok";
        }
        if (sanitizedInput !== "") {
            setFormData(prevState => ({ ...prevState, [name]: value }));
            console.log(e.target.value);
        }

    };

    const uploadImage = async (e:any) => {
        e.preventDefault();


        const imageRef = ref(storage, `notice/${imageupload.name + v4()}`);
        console.log(imageRef);
        const uploadTask = uploadBytesResumable(imageRef, imageupload);

        uploadTask.on('state_changed',
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setUploadProgress(progress);
            },
            (error) => {
                console.error(error);
            },
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    // Getting the URL of the uploaded image
                    console.log(url);
                    setImage(url);
                });
            }
        );

        // //upload the file to the firebase storage
        // await uploadBytes(imageRef, imageUpload).then((snapshot) => {
        //     getDownloadURL(snapshot.ref).then((url) => {
        //         //getting the url of the uloaded image
        //         console.log(url);
        //         setImage(url);
        //     })
        // })
    }

    // const handlefilechange = async (e:React.ChangeEvent<HTMLInputElement>) => {
    //     const file = e.target.files![0];        
    //     setFormData(prevState => ({ ...prevState, imageLink: file }));
    // }

    const handlesubmt = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formData.title !== "" || formData.audience !== "" || formData.description !== "") {
            try {
                const response = await fetch("http://localhost:8082/notices/addnotice", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                });
                if (response.ok) {
                    alert("Notice posted successfully");
                    setFormData({
                        title: "",
                        audience: "",
                        description: "",
                        moreDetailsLink: null,
                        imagelink: null
                    });
                    formRef.current?.reset();

                } else {
                    alert("Failed to post notice. Please try again");
                }
            } catch (err) {
                console.log(err);
            }
        } else {
            alert("Please fill all the fields");
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
                                <input type="text" name="title" className={`form-control ${formData?.title ? '' : 'is-invalid'}`} id="noticetitle" placeholder="title" value={formData?.title} onChange={handleChange} required />
                                <label htmlFor="noticetitle">Title</label>
                                <div className="invalid-feedback" >
                                    Please provide a Title.
                                </div>
                            </div>

                            <div className="form-floating mb-3">
                                <select className={`form-select ${formData?.audience ? '' : 'is-invalid'}`} name="audience" id="audience" aria-label="Related To" value={formData?.audience} required aria-placeholder="select option" onChange={handleChange}>
                                    <option selected disabled value="">select audience</option>
                                    <option value="Freelancer">Freelancer</option>
                                    <option value="client">client</option>
                                    <option value="payment">all</option>
                                </select>
                                <div className="invalid-feedback">
                                    select a audience
                                </div>
                                <label htmlFor="audience" className="form-label">Audience</label>
                            </div>

                            <div className="form-floating mb-3">
                                <textarea className={`form-control ${formData?.description ? '' : 'is-invalid'}`} name="description" id="description" rows={6} placeholder="Enter description" value={formData?.description} required style={{ height: "200px" }} onChange={handleChange} />
                                <label htmlFor="description" className="form-label">Description</label>
                                <div className="invalid-feedback">
                                    Please provide description.
                                </div>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="text" name="moreDetailsLink" className="form-control" id="moredetails" placeholder="more details link" onChange={handleChange} />
                                <label htmlFor="moredetails">Link for more details(optional)</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="text" name="imagelink" className="form-control" id="imagelink" placeholder="more details link" onChange={handleChange} />
                                <label htmlFor="imagelink">Image link (optional)</label>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="noticeimage" className="form-label text-light fw-bold">Upload any related images</label>
                                <input className="form-control" name="noticeimage" type="file" id="noticeimage"  onChange={(e) => {
                                    setImageUpload(e.target.files![0])
                                }}/>
                                <div>
                                    <button onClick={uploadImage} >Upload</button>
                                    <progress value ={uploadprogress} max={100} />
                                </div>
                            </div>



                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}