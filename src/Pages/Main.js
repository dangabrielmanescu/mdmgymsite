
import Navbar from "../Components/Navbar/Navbar";

const Main = ({children}) => {
    return (
        <>
            <Navbar />
            <div className="container bg-hero">
                <div className="row align-items-center justify-content-center">
                    {children}
                </div>
            </div>
        </>
    )
};

export default Main