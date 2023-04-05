import CustomNavbar from "./CustomNavbar.jsx";


const Base = ({ title = "Welcome To Our website", children }) => {

    return (

        <div className="container-fluid p-0 m-0">
            <CustomNavbar/>

            {children}

        </div>

        )

}

export default Base;