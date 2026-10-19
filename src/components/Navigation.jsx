import React from 'react'

const Navigation = () => {
    return (
        <div className='bg-primary p-6 flex justify-between'>
            <h1 className='text-white text-3xl'>NOTEPAD--</h1>
            <button className='text-xl text-white bg-red-600 p-2 rounded-sm'>LOGOUT</button>
        </div>
    )
}

export default Navigation