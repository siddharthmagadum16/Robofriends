import React from 'react';
const Card = ({ name, email, id }) => {
    // const { name, email, id }=props;
    return (
        <div className="bg-green dib tc pa3 ma3  br3 shadow-3 grow">
            <img alt="robots" src={`https://robohash.org/${id}?3000*2000`}/>
            <div>
                <h1> {name} </h1>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default Card ;