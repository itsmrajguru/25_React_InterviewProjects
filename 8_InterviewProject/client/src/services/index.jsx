import axios from "axios";


/* 'So axios is used to activate the RESTAPi that we create
in the backend and send the data coming from the frontend to
the RESTAPI ,
where as the RESTAPI is sending/storing the data in the mongoDb
as well as returns a JSON response to the axios , and Axios 
returns the Response to the frontend and Frontend displays the
response to the user on UI */



const API_URL = "http://localhost:5000/api";

//activating the RESTAPI-URL
export const callRegisterUserApi = async (formData) => {
  try {

    /*this is sending the data to the RestApi and taking
     response back from the RestApi*/
    const response = await axios.post(`${API_URL}/auth/register`, formData, {
      withCredentials: true,
    /* withCredentials helps to build cross-device connection */
    });
    //this resonse is given by the RestApi to the axios
    return response.data;
  } catch (error) {
    console.log(error);
    /*and this response is given by the axios to the frontend
    and Frontend shows the response to the user via UI */
    return error?.response?.data ||
    { success: false, message: "Error occured" };
  }
};

export const callLoginUserApi = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/user/login`, formData, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return error?.response?.data || { success: false, message: "Error occured" };
  }
};


