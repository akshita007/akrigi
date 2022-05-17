import axios from "axios";

const url = 'http://localhost:5000/api';

export const createPost = async (data)=>{
    try{
        return await axios.post(`${url}/products`,data,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        })
    }
    catch(err){
        console.log('error while posting ',err);
    }
};

export const createDonationPost = async (data)=>{
    try{
        return await axios.post(`${url}/donate`,data,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        });
    }
    catch(err){
        console.log('error while posting ',err);
    }
};

export const loginUser = async (email,password)=>{
    try{
        const response=await axios.post(`${url}/auth/login`,{email,password});
        if(response.data.token){
                localStorage.setItem('token',response.data.token);
                localStorage.setItem('user',response.data.user);
            }else{
                alert("Error in fetching token!");
            }
            return response.data;
    }catch(err){
        console.log('error while login ',err);
    }
};

export const registerUser = async ({username,email,password,firstName,lastName})=>{
    try{
        return await axios.post(`${url}/auth/register`,{firstName,lastName,username,email,password})
    }catch(err){
        console.log('error while registering user ',err);
    }
};
export const logoutUser =  ()=>{
    try{
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            return alert("Successfully logged out");
    }catch(err){
        console.log("error while logging out ",err);
    }
}

export const verifyToken = async () =>{
    try{
        const response = await axios.get(`${url}/auth/checkJwt`,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data;
    }catch(err){
        console.log("error while checking ",err);
    }
};

export const registerNgo = async ({username,email,password,site,mob})=>{
    try{
        return await axios.post(`${url}/ngos/register`,{username,email,site,mob,password});
    }catch(err){
        console.log('error while registering ngo ',err);
    }
};
export const ngoList =async ()=>{
    try{
        const response = await axios.get(`${url}/ngos`);
        return response.data;

    }catch(err){
        console.log("error while fetching ngo list ",err);
    }
};
export const productList=async(category)=>{
    try{
        const response=await axios.get(`${url}/products?category=${category}`);
        return response.data;
    }catch(err){
        console.log('error while displaying products '+err);
    }
}
export const productListPrice=async(price)=>{
    try{
        const response=await axios.get(`${url}/products?price=${price}`);
        return response.data;
    }catch(err){
        console.log('error while displaying products '+err);
    }
}
export const productItem=async(id)=>{
    try{
        const response=await axios.get(`${url}/products/find/${id}`);
        return response.data;
    }catch(err){
        console.log('error while displaying products '+err);
    }
}

export const createOrder=async(data)=>{
    try{
        return await axios.post(`${url}/order`,data,{
        headers: {
            Authorization:`Bearer ${localStorage.getItem('token')}`
    }})
    }catch(err){
        console.log('error while creating '+err);
    }
}
export const getOrder=async()=>{
    try{
        const res= await axios.get(`${url}/order/find/${localStorage.getItem("user")}`,{
        headers: {
            Authorization:`Bearer ${localStorage.getItem('token')}`
    }})
    return res.data;
    }catch(err){
        console.log('error while fetching '+err);
    }
}
export const getPayment=async(data)=>{
    try{
        const response=await axios.post(`${url}/checkout/payment`,data,{
            headers: {
                Authorization:`Bearer ${localStorage.getItem('token')}`
        }});
        return response.data;
    }catch(err){
        console.log('error while payment '+err);
    }
}
