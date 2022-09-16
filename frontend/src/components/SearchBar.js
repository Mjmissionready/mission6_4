import React from "react";
import { useState } from "react";
import Typography from '@mui/material/Typography';
import { FaSearch } from "react-icons/fa"
import "../pages/Home.css";

function Searchbar(props) {
    const {
        onSearch
    } = props;

    const [searchText, setSearchText] = useState('')

    const handleInput = (e) => {
        const text = e.target.value
        setSearchText(text)
    }

    const handleEnterKeyPressed = (e) => {
        if (e.key === 'Enter') {
            onSearch(searchText)
        }
    }

    
    return (
        <div className="searchContent">
            <form action="" method="get" className="searchBar">
                <input
                    className="input"
                    onChange={handleInput}
                    onKeyPress={handleEnterKeyPressed}
                    type="text"
                    value={searchText}
                    placeholder="FIND ICECREAM"
                />
                <button type="submit">
                    <FaSearch color="white" style={{ marginTop: "3px" }} /></button>
            </form>

            <Typography gutterBottom variant="h4" component="div"
                sx={{
                    fontFamily: "Quicksand",
                    color: "#663b0f",
                    paddingTop: "250px",
                    textAlign: "center",
                    fontSize: "20px",
                    fontWeight: "800",
                    paddingLeft: "15px",
                }}>
                Search your Ice Cream
            </Typography>
        </div>
    );
}

export default Searchbar;