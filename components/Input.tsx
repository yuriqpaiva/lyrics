interface InputProps {
    title: string
    type: string
    value: string
    placeholder?: string
    onChange?: (value: string) => void
}

export default function Input(props: InputProps) {
    return (
        <>
            <label>{props.title}</label>
            <input 
                type={props.type} 
                placeholder={props.placeholder}
                className={`
                    border-2 rounded-sm border-gray-400
                    focus:border-blue-500
                    outline-none shadow-sm mb-3 p-1
                `}
                value={props.value}
                onChange={(e) => props.onChange(e.target.value)}
                />
        </>
    )
}