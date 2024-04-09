import React from "react"

export const SearchSection = () => {
    return (
        <section className="container my-4">
            <div className="row">
                <div className="col-md-6">
                    <form>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Search services..." />
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="button">Search</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}