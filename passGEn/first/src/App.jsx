import { useState,useCallback ,useEffect,useRef} from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [Password, setPassword] = useState("")

  const pwdref = useRef(null)

  const passgen  = useCallback(()=>{
    let pass = ""
    let string = "ABCDEFGHIJKKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number)
    {
     string+="0123456789"
    }
    if(character)
    {
     string+="!@#$%^&*()_+-={}[]:"
    }
    for(let i=1;i<=length;i++)
    {
      let cah = Math.floor(Math.random()*string.length+1) 
      pass += string.charAt(cah)
    }
    setPassword(pass)
  },[length, number, character, setPassword])

const copypwd = useCallback(()=>{
    pwdref.current?.select()
         window.navigator.clipboard.writeText(Password)
},[Password])


  useEffect(()=>{
    passgen()
  },[length,number,character,passgen])
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center'>password geneartor</h1>
      <div className='flex shadow rounded-lg overflow-hidden m-4'>
         <input
          type="text"
           value={Password}
           className='outline-none w-full py-1 px-3'
           placeholder='password'
           readOnly
           ref={pwdref}
            />
            <button 
            onClick={copypwd}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={number} 
          id='numinput'
          onChange={()=>setNumber((prev)=>!prev)}
           />
           <label>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={character} 
          id='numinput'
          onChange={()=>setCharacter((prev)=>!prev)}
           />
           <label>character</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
