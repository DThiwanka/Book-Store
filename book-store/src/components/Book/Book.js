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
            <h2>Price: {price}</h2>
            <p>Availability: {available}</p>

            <Button variant="contained">Update</Button>&nbsp;
            <Button variant="contained">Delete</Button>
        </div>
    )
}

export default Book
