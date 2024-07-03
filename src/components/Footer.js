import { Link } from "react-router-dom";
function Footer()
 {
    return <div className="container text-center d-flex flex-column">
        <footer className="text-center bg-body-tertiary mt-auto">

            <div className="container pt-4">

                <section className="mb-4">

                    <Link
                        data-mdb-ripple-init
                        className="btn btn-link btn-floating btn-lg text-body m-1"
                        to="/"
                        role="button"
                        data-mdb-ripple-color="dark">
                    <i className="fab fa-facebook-f"></i></Link>


                    <Link
                        data-mdb-ripple-init
                        className="btn btn-link btn-floating btn-lg text-body m-1"
                        to="/"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i className="fab fa-twitter"></i
                    ></Link>


                    <Link
                        data-mdb-ripple-init
                        className="btn btn-link btn-floating btn-lg text-body m-1"
                        to="/"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i className="fab fa-google"></i
                    ></Link>


                    <Link
                        data-mdb-ripple-init
                        className="btn btn-link btn-floating btn-lg text-body m-1"
                        to="/"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i className="fab fa-instagram"></i
                    ></Link>


                    <Link
                        data-mdb-ripple-init
                        className="btn btn-link btn-floating btn-lg text-body m-1"
                        to="/"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i className="fab fa-linkedin"></i
                    ></Link>

                    <Link
                        data-mdb-ripple-init
                        className="btn btn-link btn-floating btn-lg text-body m-1"
                        to="/"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i className="fab fa-github"></i
                    ></Link>
                </section>

            </div>



            <div className="text-center p-3" style={{backgroundColor:'rgba(0, 0, 0, 0.05)'}}>
                © 2020 Copyright:
                <Link className="text-body" to="https://mdbootstrap.com/">MDBootstrap.com</Link>
            </div>

        </footer>
    </div>
}
export default Footer;