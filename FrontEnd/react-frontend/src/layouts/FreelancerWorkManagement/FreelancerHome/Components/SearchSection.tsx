import React, { useState, ChangeEvent } from "react";

export const SearchSection: React.FC = () => {
    const [searchInput, setSearchInput] = useState<string>("");

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        const alphabetOnly = inputValue.replace(/[^a-zA-Z]/g, ''); // Remove any non-alphabetical characters
        setSearchInput(alphabetOnly);
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
