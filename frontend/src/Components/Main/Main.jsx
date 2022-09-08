import { useEffect, useState, useRef } from "react";
import TileForm from "../TileForm/TileForm";
import TileCard from "../TileCard/TileCard";
import "./Main.scss";

const Main = () => {
    const titleRef = useRef(null);
    const ratingRef = useRef(null);
    const creatorRef = useRef(null);
    const [tiles, setTiles] = useState([]);

    const fetchTiles = async() => {
        try {
            const res = await fetch("http://localhost:8080/tiles");
            if (res.ok) {
                setTiles(await res.json());
            }
        } catch (error) {
            console.log(error);
        }   
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await fetch("http://localhost:8080/add-tile", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({   
                "title": titleRef.current.value,
                "createdBy": creatorRef.current.value,
                "rating": ratingRef.current.value})
            })
            if (res.ok) {
                fetchTiles();
            }

        } catch (error) {
            console.log(error);
        }
    }    

    const handleUpdate = async(id) => {
        try {
            const res = await fetch(`http://localhost:8080/tiles/${id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({   
                "title": titleRef.current.value,
                "createdBy": creatorRef.current.value,
                "rating": ratingRef.current.value})
            })
            if (res.ok) {
                fetchTiles();
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleDelete = async(id) => {
        try {
            const res = await fetch(`http://localhost:8080/tiles/${id}`, {
                method: "DELETE",
            })
            if (res.ok) {
                fetchTiles();
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchTiles();
    }, [])


    return(
        <div className="container">
            <TileForm 
                titleRef={titleRef}
                ratingRef={ratingRef}
                creatorRef={creatorRef}
                handleSubmit={handleSubmit}
            />

            <h2 className="title">List of Tracks</h2>

            <table className="table-container">

                <thead>
                    <tr className="table-container__headers">
                        <th>Track</th>
                        <th>Rating</th>
                        <th>Logged By</th>
                    </tr>
                </thead>

                {tiles.map(tile => {
                    return (
                    <TileCard 
                        key={tile.id} 
                        tile={tile}  
                        titleRef={titleRef}
                        ratingRef={ratingRef}
                        creatorRef={creatorRef}
                        handleUpdate={handleUpdate} 
                        handleDelete={handleDelete}
                    />
                    )
                })}
            </table>
        </div>
    );
}

export default Main;