import { useLoaderData } from "react-router-dom";

const AlbumDetails = () => {
    const album = useLoaderData();
    const {id, title} = album;
    return (
        <div>
            <h2>Album details: {id}</h2>
            <p>{title}</p>
        </div>
    );
};

export default AlbumDetails;