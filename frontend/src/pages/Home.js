import React from 'react';
import "./Home.css";
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import IceCreamCard from "../components/IceCreamCard";
import SearchBar from "../components/SearchBar";

function Home() {

    return (
        <>
            <div className='header'>
                <div className='headerImg'>
                    <Typography gutterBottom variant="h1" component="div"
                        sx={{
                            fontFamily: "Pacifico",
                            color: "transparent",
                            paddingTop: "200px",
                            textAlign: "center",
                            marginBottom: "0px",
                            WebkitTextStrokeWidth: "2px",
                            WebkitTextStrokeColor: "black",
                        }}>
                        Taste Happiness
                    </Typography>
                </div>
            </div>

            <SearchBar />

            <IceCreamCard />

            {/* --->------- FOOTER ---------- */}
            <hr />

            <Container disableGutters={true} maxWidth={false}
                sx={{
                    height: "30px",
                    marginTop: "20px",
                    textAlign: "center",
                    color: "#663b0f",
                    fontSize: "smaller"
                }}>
                <Typography>
                    Copyright 2022 &copy; SubZero Delights
                </Typography>
            </Container>
        </>
    );
};
export default Home;