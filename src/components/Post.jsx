export default function Post({id , title , body}) {
    return (
        <>
            <div className="flex divide-x-2">
                <div className="w-1/12 flex justify-center items-center">{id}</div>
                <div className="w-4/12">{title}</div>
                <div className="w-7/12">{body}</div>
            </div>
        </>
    )
}