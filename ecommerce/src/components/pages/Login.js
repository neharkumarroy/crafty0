
 import './Signup.css';
 import Navbar from '../common/Navbar';
 import Signup from './Signup';

 function Login(){ 
     return(
        <div>
        <Navbar/>
            <div class="account-page">
              <div class="container">
                    <div class="row">
        
                        <div class="col-2">
                            <img src="qwe.jpeg"/>
                        </div>
                        
                        <div class="col-2">
                            <div class="form-container">
                                <div class="form-btn">
                                   <span onclick="login()">Login</span>
                                    <span onclick="register()">Register</span>
                                    <hr id="Indicator"/>
                                </div>
        
                                <form id="LoginForm">
                                    <input type="text" placeholder="Username"/>
                                    <input type="password" placeholder="Password"/>
                                    <button type="Submit" class="btn">Login</button>
                                    <a href="">Forgot Password?</a>
                                </form>
        
                                <form id="RegForm">
                                    <input type="text" placeholder="Username"/>
                                    <input type="email" placeholder="Email"/>
                                    <input type="password" placeholder="Password"/>
                                    <button type="Submit" class="btn">Register</button>
                                </form>
        
        
                            </div>
                        </div>
                        </div>
        
                    </div>
                    
                    </div>
               
            
           
        

                    </div>

     );
     };
     export default Login;
  
  