import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [users, setUsers] = useState([]);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Submitting:", loginData);
    // console.log(users)

    const foundUser = users.find((user)=> 
      user.email === loginData.email && user.password === loginData.password
    )
    if(foundUser){
      alert("Login Successfull")
      if(foundUser.role === 'hr'){
        navigate("/hr-dashboard")
      }
      else if(foundUser.role === 'emploee'){
        navigate("emp-dashboard")
      }
      else{
        alert("Unknown roll")
      }
    }
    else{
      alert("Invalid Credentials")
    }

    console.log("Im finder function",foundUser)
  };

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://68970434250b078c2040bd02.mockapi.io/hrms/users"
      );
      setUsers(res.data);
      console.log(res.data)
    } catch (error) {
      console.log("Failed to Fetch Data.", error.message);
    }
  };
  console.log(users);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div>
        <div className="bg-[url(/assets/bg-login.png)] h-screen w-full bg-cover bg-no-repeat bg-bottom relative">
          <div className=" bg-gradient-to-r sm:bg-gradient-to-r from-black/30 to-transparent sm:max-w-[500px] max-w-[300px] text-gray-50 w-full border border-gray-50 rounded-2xl h-auto absolute sm:right-[10%] right-[12%] sm:top-[22%] top-[18%] p-[30px]">
            <h1 className="text-gray-50 font-bold sm:text-[50px] text-[30px]">
              <span className="border-b-3 font-bold">Login</span>
            </h1>
            <p className="text-[20px] sm:text-[25px] text-gray-50 mt-1.5 font-extralight">
              Welcome onboard with us!
            </p>
            <form action="" onSubmit={handleSubmit}>
              <div className="flex flex-col font-light gap-1  sm:mt-[30px] mt-[20px]">
                <label htmlFor="">Username</label>
                <input
                  type="text"
                  placeholder="Enter your email"
                  name="email"
                  value={loginData.email}
                  onChange={handleChange}
                  className="border border-gray-50 p-[10px_20px] rounded-lg outline-none"
                  required
                  autoComplete="username"
                />
              </div>
              <div className="flex flex-col font-light gap-1  sm:mt-[30px] mt-[20px]">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  value={loginData.password}
                  onChange={handleChange}
                  className="border border-gray-50 p-[10px_20px] rounded-lg outline-none"
                  required
                  autoComplete="current-password"
                />
              </div>
              <p className="text-end font-light">Forgot password ?</p>

              <button
                type="submit"
                className="bg-[#4aa293] hover:bg-[#067260] hover:text-white duration-200 ease-linear text-black font-bold w-full p-[10px] mt-[30px] rounded-lg"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
