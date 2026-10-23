import { useEffect, useState } from "react";
import credentials from '../data/credentials.json'
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {

    const Navigate = useNavigate();

    const [form, setForm] = useState({
        userName: "",
        password: "",
    });

    const [users, setUsers] = useState([])

    const [error, setError ]= useState('')

    useEffect(() =>{
        const getData = async () =>{
                try {
                    const data = await axios.get('https://dummyjson.com/users')
                    setUsers(data.data.users);
                } catch (error) {
                    console.log(error)
                    setError("Failed to fetch users")
                }
            }
            getData()
    },[])

    console.log(users)

    const handleSubmit = (e) => {
        e.preventDefault();

        if(form.userName === credentials.username && form.password === credentials.password){
            Navigate('/Home')
        }
        else{
            alert("Credentials is not correct. Please try again")
        }
    }


    return (
        <div className="min-h-screen bg-slate-100 flex justify-center items-center px-4">
            <div className="bg-white w-full max-w-md rounded-2xl shadow-custom overflow-hidden">

                <div className="bg-primary p-8">
                    <h1 className="text-4xl font-bold text-white font-main">NOTEPAD--</h1>
                    <p className="text-slate-300 mt-2">Task Management System</p>
                </div>

                <form onSubmit={(e) => {handleSubmit(e)}} className="p-8 flex flex-col gap-5">

                    <div>
                        <label className="font-semibold text-primary">Username</label>

                        <input
                            type="text"
                            name="userName"
                            placeholder="Enter Username"
                            value={form.userName}
                            onChange={(e)=>{ setForm({...form, userName: e.target.value})}}
                            className={`border p-3 rounded-md w-full focus:outline-none transition duration-75`}
                        />
                    </div>

                    <div>
                        <label className="font-semibold text-primary">
                            Password
                        </label>

                        <input
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            value={form.password}
                            onChange={(e)=>{ setForm({...form, password: e.target.value})}}
                            className={`border p-3 rounded-md w-full focus:outline-none transition duration-75`}
                        />
                    </div>

                    <button className="bg-primary text-white p-3 rounded-md font-semibold hover:bg-primary/90 transition-all duration-300">
                        Login
                    </button>
                </form>
                {
                    error && <h1 className="text-center">{error}</h1> 
                }
            </div>
        </div>
    );
};

export default LoginPage;