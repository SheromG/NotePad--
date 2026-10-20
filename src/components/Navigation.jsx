import { useNavigate } from "react-router-dom"

const Navigation = () => {

    const Navigate = useNavigate();

    return (
        <div className='bg-primary p-6 flex justify-between'>
            <h1 className='text-white text-3xl font-semibold'>NOTEPAD--</h1>
            <button 
                className='text-xl text-white bg-red-600 p-2 rounded-sm'
                onClick={() => { Navigate('/')}}
            >
                LOGOUT
                </button>
        </div>
    )
}

export default Navigation