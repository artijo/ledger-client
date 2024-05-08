import axios from "axios";

export const LoginWithGoogle = async (email:string)  => {
    try {
        const res = await axios.post("http://localhost:4000/loginwithgoogle", {
            email,
        });
        console.log(res);
        if (res.status === 200) {
            return res.data;
        }else {
            throw new Error("Login failed");
        }
    } catch (error) {
        console.log(error);
    }
};
