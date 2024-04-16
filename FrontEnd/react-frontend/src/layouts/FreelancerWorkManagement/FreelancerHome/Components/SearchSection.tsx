import React, { useState } from "react";

export const SearchSection = () => {
    const [searchInput, setSearchInput] = useState("");

    const handleInputChange = (event: { target: { value: any; }; }) => {
        const inputValue = event.target.value;
        // Check if the input contains only alphabetical letters using a regular expression
        if (/^[a-zA-Z]*$/.test(inputValue)) {
            setSearchInput(inputValue);
        }
    };

    const handleSearch = () => {
        // Handle search functionality here
        console.log("Search input:", searchInput);
    };

    return (
        <section className="container my-4">
            <div className="row">
                <div className="col-md-6">
                    <form>
                        <div className="input-group mb-3">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Search services..." 
                                value={searchInput} 
                                onChange={handleInputChange} 
                            />
                            <div className="input-group-append">
                                <button 
                                    className="btn btn-primary" 
                                    style={{ backgroundColor: '#480B78' }} 
                                    type="button" 
                                    onClick={handleSearch} // Call handleSearch function when button is clicked
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};
