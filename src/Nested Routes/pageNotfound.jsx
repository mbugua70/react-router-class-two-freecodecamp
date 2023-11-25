import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <>
        <div className="pagenotfound">
            <h2>Sorry, the page you were looking for was not found</h2>

                <Link className="pagenotfount_link" to=".">Back to home</Link>

        </div>
        </>
     );
}

export default PageNotFound;