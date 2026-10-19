import {useState} from 'react'

const handleSubmit = (e, task, input, setData) =>{
    e.preventDefault();
    const items =[
        ...task,
        {
            id: task.length + 1,
            task: input,
            remarks: "Not Done"
        }
    ]
    setData(items)
}

const Form = ({data, setData}) => {

    const [input, setInput] = useState('')

    return (
        <div className='flex justify-center py-6'>
            <form className='flex gap-6' onSubmit={(e) => handleSubmit(e, data, input, setData) }>
                <input 
                    type='text' 
                    className='text-xl text-primary border-primary border-2  w-2xl p-2 rounded-sm'
                    value={input}
                    onChange={(e) =>  setInput(e.target.value) }
                />
                <input
                    type='submit'
                    className='text-xl bg-primary text-white p-2 rounded-sm'
                />
                    
            </form>
        </div>
    )
}

export default Form