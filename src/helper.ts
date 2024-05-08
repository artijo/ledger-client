import axios from "axios";



export const LoginWithGoogle = async (email:string)  => {
    try {
        const res = await axios.post("http://localhost:4000/loginwithgoogle", {
            email,
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
