interface ButtonProps {
    value: string
    onClick: () => void
}

export default function Button(props: ButtonProps) {
    return (
        <>
            <button className={`
                self-start bg-blue-500 p-2 rounded-md
                text-white shadow-sm mb-10 
                hover:shadow-lg
            `}
                onClick={props.onClick}
            >
                {props.value}
            </button>
        </>
    )
}