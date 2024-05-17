import { Suspense } from "react"
import Loading from "../../components/loading"

const page = ()=>{
    return(
        <div className="h-100vh">
            <Suspense fallback={<Loading/>}>
                three.js
            </Suspense>
        </div>
    )
}
export default page