import PublicNoticesModel from "../../../../Model/publicNoticesModel";

export const SearchBook: React.FC<{ notice: PublicNoticesModel, key: number }> = (props) => {
    return (
        <div className='container d-flex justify-content-center '>
            <div className="card mt-5" style={{ width: "80%" }}>
                <div className="card-body">
                    <div className="text-left"> {/* Wrapper for text and button */}
                        <h4 className="card-title">{props.notice.title}</h4>
                        <p className="card-text">
                            {props.notice.description}
                        </p>
                        {props.notice.moreDetailsLink !== null ?
                            <p>
                                for more details visit: <a href={props.notice.moreDetailsLink}>{props.notice.moreDetailsLink}</a>
                            </p> :
                            ""
                        }
                    </div>
                    <h6></h6>
                </div>
                <div className="d-flex justify-content-center">
                    <img className="card-img-bottom"
                        src="https://images.pexels.com/photos/1656564/pexels-photo-1656564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Card image"
                        style={{ width: "80%", height: "90%" }} />
                </div>
            </div>

        </div>
    );
}