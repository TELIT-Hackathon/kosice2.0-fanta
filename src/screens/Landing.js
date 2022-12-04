import { Link } from "react-router-dom";
import "./Home.scss"

function Landing() {
    return (
        <div className="landing">

            <div className="home-row">
                <div className="home-col">

                    <h3>Pridanie nehnuteľnosti do prenájmu</h3>
                    <Link to="customer-form">
                        <button className="btn btn-primary">
                            Ďalej
                        </button>
                    </Link>
                </div>
                <div className="home-col">

                    <h4>Pridanie nehnuteľnosti do prenájmu</h4>
                    <Link to="customer-form">
                        <button className="btn btn-primary">
                            Ďalej
                        </button>
                    </Link>
                </div>
                <div className="home-col">
                    <h4>Vyhladavanie nehnuteľnosti na prenájom</h4>
                    <Link to="results">
                        <button className="btn btn-primary">
                            Ďalej
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    );
}

export default Landing;
