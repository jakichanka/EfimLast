import React, {useEffect, useState} from "react";
import axios from "axios";

import Layout from "../Layout";


const MainPage = () => {
    const [film, setFilm] = useState("");

    useEffect(() => {
            axios.get("http://localhost:8080/getFilms")
            .then((data) => {
                console.log(data)
            })
        })

    return (
    <Layout>
        {film}
    </Layout>
    )
};

export default MainPage;
