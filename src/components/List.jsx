import React from 'react'

const List = ({data, setData}) => {

    const markAsDone = (task) =>{
        setData(data.map(item => item.id === task.id ? {...item, remarks:"Done"}: item))
    }
    return (
        <div className='px-4 flex flex-col gap-2 '>
            <h1 className='text-primary text-2xl'>Not Done: </h1>
            <div className='flex gap-2 flex-col w-full'>
                {
                    data.filter((item) => item.remarks !== "Done" )
                    .map((task) =>
                        <div className='flex gap-2'  key={task.id}>
                            <p className='border-2 text-lg p-1 w-full'>{task.task} </p>
                            <button className='text-lg text-white bg-green-500 p-1 px-3 rounded-sm' onClick={() => markAsDone(task)}> ✓ </button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default List