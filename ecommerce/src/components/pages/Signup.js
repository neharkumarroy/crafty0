
import './Signup.css'; 
import Login from './Login';
import Navbar from '../common/Navbar';

function Signup() {
    return (
        <><Navbar/>
        <div className="account-page">
            <div className="container">
                <div className="row">

                    <div className="col-2">
                        <img src="images/bgimg.png" alt="Background" />
                    </div>

                    <div className="col-2">
                        <div className="form-container">
                            <div className="form-btn">
                                <span>Register</span>
                                <hr id="Indicator" />
                            </div>

                            <form id="RegForm">
                                <input type="text" placeholder="Username" />
                                <input type="email" placeholder="Email" />
                                <input type="password" placeholder="Password" />
                                <input type="password" placeholder="Confirm Password" />
                                <button type="submit" className="btn">Sign Up</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Signup;
