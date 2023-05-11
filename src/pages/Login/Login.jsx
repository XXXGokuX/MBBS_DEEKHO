import {HiOutlineMail,HiOutlineEye,HiEyeOff} from 'react-icons/hi'
import Layout from '../../utils/Layout';
import {Link} from 'react-router-dom'

function Login() {

    return ( 
        <>

          <Layout>
           
           <div className="login-form ">
               
               <div className="flex h-[95vh] justify-center items-center">

                    <div className="form bg-sky-500/20 rounded-md px-4 pt-10 pb-20 md:px-20 md:pt-16 md:pb-32  md:w-[70%] lg:w-[40%] w-full">
                       <div className="title text-center text-white font-semibold mb-16 text-3xl md:text-5xl">
                        Login
                       </div>

                       <form>
                          <div className="flex items-center border-b-2 mb-10 caret-white relative justify-between transition-all group">
                            <input type="text"  id='email' className='bg-transparent focus:outline-none focus:border-none grow text-white pb-1' autoComplete='off'/>
                            <HiOutlineMail className='text-white text-xl'/>
                            <label for='email' className='absolute left-0 text-white/80 scale-75 translate-y-0 group-focus-within:scale-90 group-focus-within:-translate-y-6 transition-all duration-300'>Email</label> 
                          </div>

                          <div className="flex items-center border-b-2 caret-white relative justify-between transition-all group">
                            <input type="password"  id='password' className='bg-transparent focus:outline-none focus:border-none grow text-white pb-1' autoComplete='off'/>
                            <HiOutlineEye className='text-white text-xl'/>
                            <label for='password' className='absolute left-0 text-white/80 scale-75 translate-y-0 group-focus-within:scale-90 group-focus-within:-translate-y-6 transition-all duration-300'>Password</label> 
                          </div>
                          <div className='mt-2'>
                            <input type='checkbox' className='h-4 w-4 align-baseline'/> <span className='text-white'>Remember Password</span>
                          </div>

                          <div className="btn mt-14">
                            <button className='bg-sky-500 text-center py-2 text-white w-full rounded-full font-semibold'>Login</button>
                          </div>

                          <div className='mt-10'>
                            <p className='text-white text-center md:text-base text-sm'>Dont have account <Link to='/register'><span className=' cursor-pointer hover:font-semibold hover:underline'>Register</span></Link></p>
                          </div>



                       </form>

                    </div>

               </div>

           </div>
         </Layout>    

        </>
     );
}

export default Login;