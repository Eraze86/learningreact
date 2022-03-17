import { useState } from "react"

export function Counter(){
    const [count, setCount] = useState(0);
    return(
        <div>
            <p>du har klickat {count} många gånger</p>
            <button onClick={() => setCount(count + 1)}></button>
        </div>

    )

}