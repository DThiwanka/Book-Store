import {Button} from "@mui/material";
import React from 'react';
import "./Book.css";


const Book = (props) => {
    const { _id, name, author, description, price, available, image } = props.book;
    return (
        <div className="card">
            <img src={image} alt={name} />
            <article>
                By {author}
            </article>

            <h3>{name}</h3>
            <p>Description: {description}</p>
            <h3>Price: {price}</h3>
            {/* <p>Availability: {available}</p> */}

            <Button variant="contained" sx={{mt:'auto'}}>Update</Button>&nbsp;
            <Button variant="contained" sx={{mt:'auto'}}>Delete</Button>
        </div>
    )
}

export default Book
