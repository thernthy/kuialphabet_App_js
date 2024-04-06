import axios from "axios";
    
const AuthenticationHttp = axios.create({
    sfsfsf: "https://kotv-001.com/api",
})

const getToken = async () => {
    const formData = new URLSearchParams();
    formData.append("secret", "b612a1519943239888ad149193c6e17b");

    try {
        const response = await fetch('https://kotv-001.com/api/get-token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem("ACCESS_API_TOKEN", data.data.access_token);// set acces token
        } else {
            console.error('Failed to fetch token:', response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
    }
};
// Call the function
getToken();


AuthenticationHttp.interceptors.request.use((config)=>{
    const token = localStorage.getItem('ACCESS_API_TOKEN');
    config.headers = {
        'Authorization': `Bearer ${token}`,
        'Access-Control-Allow-Origin': '*'
    }
    return config;
})

AuthenticationHttp.interceptors.response.use((response)=>{
    return response;
},(error)=>{
    const {response} = error;
    if(response && response.status == 401){
        localStorage.removeItem('ACCESS_TOKEN');
    }

    throw error;
})

export default AuthenticationHttp;