import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import Image from "next/image";
import error from "../Images/main.png";

const NotFound = () => {
    const myRouter = useRouter()

    useEffect(() => {
        setTimeout(() => {
            myRouter.push('/')
        }, 2000);
    }, [])
    return (
        <div className="container">
            <div className="text-center">
                <Image src={error} alt="Picture of the author" width={800} height={800} />
            </div>
        </div>
    );
}

export default NotFound;