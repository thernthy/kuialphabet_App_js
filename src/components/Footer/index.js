import { Buttonbg } from "../../template/button"

const Footer = () => {
    return (
        <div className="container-fluid" style={{backgroundColor:Buttonbg.bg_lime_400}}>
            <footer className="py-3">
                <p className="text-center text-light">© 2023</p>
            </footer>
        </div>
    )
}

export default Footer