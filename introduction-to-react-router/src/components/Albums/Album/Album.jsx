import { Link } from "react-router-dom";

const Album = ({album}) => {
    const {id, title} = album;
    
    const albumStyle = {
        border: '2px solid yellow',
        padding: '5px',
        borderRadius: '20px'
    }

    return (
        <div style={albumStyle}>
            <h4>Albums: {id}</h4>
            <h2>{title}</h2>
            <Link to={`/album/${id}`}>Album Details</Link>
        </div>
    );
};

export default Album;