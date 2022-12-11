import React from 'react'

const Book = (props) => {
    const { _id, name, author, description, price, available, image } = props.book;
    return (
        <div>
            <img src={image} alt={name} />
            <article>
                By {author}
            </article>

            <h3>{name}</h3>
            <p>Description: {description}</p>
            <h2>Price: {price}</h2>

            <button>Update</button>
            <button>Delete</button>
        </div>
    )
}

export default Book
