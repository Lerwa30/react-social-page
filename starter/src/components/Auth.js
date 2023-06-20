import {useState} from 'react'
 
const Auth = () => {
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')
   const [register, setRegister] = useState(true)
 
   const submitHandler = e => {
       e.preventDefault()
 
       console.log('submitHandler called')
       console.log(username, password)
   }
 
   return (
       <main>
           <h1>Welcome!</h1>
           <form className='form auth-form' onSubmit={submitHandler}>
               <input
                   className='form-input'
                   type='text'
                   placeholder='Username'
                   value={username}
                   onChange={(event) => setUsername(event.target.value)} />
               <input
                   className='form-input' 
                   type='text'
                   placeholder='Password'
                   value={password}
                   onChange={(event) => setPassword(event.target.value)} />
               <button className='form-btn'>
                   {register ? 'Sign up' : 'Login'}
               </button>
           </form>
           <button className='form-btn'>Need to {register ? 'Login' : 'Sign up'}?</button>
       </main>
   )
}
 
export default Auth