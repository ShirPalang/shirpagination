import { useContext } from "react";
import { pageNumberContext } from "../Context/PageNumberContext";

export default function PageCard({ number }) {

    const kos = useContext(pageNumberContext)

    return (
        <>
            <div className="w-10 h-10 flex justify-center items-center font-bold text-white bg-indigo-600 rounded-sm"
                onClick={()=> kos(number)}>
                {number}
            </div>
        </>
    )
}