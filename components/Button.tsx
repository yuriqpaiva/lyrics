interface ButtonProps {
    value: string
}

export default function Button(props: ButtonProps) {
    return (
        <>
            <button className={`
                self-start bg-blue-500 p-2 rounded-md
                text-white shadow-sm mb-10 
                hover:shadow-lg
            `}>
                {props.value}
            </button>
        </>
    )
}