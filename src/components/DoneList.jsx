const DoneList = ({data}) => {
    return (
        <div className='px-4 flex flex-col gap-2 pt-10'>
            <h1 className='text-primary text-2xl'>Done: </h1>
            <div className='flex gap-2 flex-col w-full'>
                {
                    data.filter((item) => item.remarks === "Done" )
                    .map((task) =>
                        <p className='border-2 text-lg p-1' key={task.id}> {task.task}</p>
                    )
                }
            </div>
        </div>
        )
    }

export default DoneList