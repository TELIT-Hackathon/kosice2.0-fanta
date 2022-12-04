import { getAuth, onAuthStateChanged } from '../firebase'

const AuthorizationComponent = () => {


    function autorization(data) {
        // Create a new user with email and password using firebase
        onAuthStateChanged(auth, data) 
            if(data){
                const email = data.email;
            }else{
                console.log("ffdsfdsfdsf");
            }
        
        }


    return (autorization);
}

export default AuthorizationComponent;