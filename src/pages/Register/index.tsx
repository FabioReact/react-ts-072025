import { useEffect, useRef, useState } from "react"

const Register = () => {
    const [c, setC] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const isFirstRender = useRef(true);

    const onSubmitHandler = () => {
        console.log("Form submitted", inputRef.current?.value);
    }

    useEffect(() => {
        if (isFirstRender.current) {
            console.log("Only runs on first render");
            isFirstRender.current = false;
        } else {
            console.log("Runs on every update except first render");
        }
    }, [c]);

  return (
      <>
        <div>Register</div>
        <input type="text" id="email" ref={inputRef} />
        <button onClick={onSubmitHandler}>Submit</button>
        <button onClick={() => setC(c => c + 1)}>Increment {c}</button>
    </>
  )
}

export default Register