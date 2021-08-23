export default function Lyrics(props)  {
    return (
        <div>
            <p className={`whitespace-pre-line`}>
                {props.letra}
            </p>
        </div>
    )
}