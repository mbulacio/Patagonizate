import { Link } from 'react-router-dom';

function EnlacesProvincias(){
    return(
        <>
        <div id="provincias">
            <Link to={"/provincia/Neuquén"}>
                <p>Neuquén</p>
            </Link>
            <Link to={"/provincia/Río Negro"}>
                <p>Río Negro</p>
            </Link>
            <Link to={"/provincia/Chubut"}>
                <p>Chubut</p>
            </Link>
            <Link to={"/provincia/Santa Cruz"}>
                <p>Santa Cruz</p>
            </Link>
            <Link to={"/provincia/Tierra del Fuego"}>
                <p>Tierra del fuego</p>
            </Link>
        </div>
        <img src = "patagonizate-logo.png" alt = "Patagonizate logo"id = "logo" />
        </>
    )
}

export default EnlacesProvincias;