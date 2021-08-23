interface InputProps {
    value: string
    type: string
    placeholder?: string
}

export default function Input(props: InputProps) {
    return (
        <>
            <label>{props.value}</label>
            <input 
                type={props.type} 
                placeholder={props.placeholder}
                className={`
                    border-2 rounded-sm border-gray-400
                    focus:border-blue-500
                    outline-none shadow-sm mb-3 p-1
        
                `}
                />
        </>
    )
}