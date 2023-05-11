import { Link } from 'react-router-dom';
import College from '../../images/college.jpg'
import {HiOutlineMap,HiOutlineBookmark} from 'react-icons/hi2'


function CollegeCard({colleges}) {
    return ( 
        <>
             <div className="college-cards flex flex-row lg:flex-col gap-7 lg:gap-5 flex-wrap justify-around">

              <Link to='/colleges/123'>
                <div className="card flex flex-col lg:flex-row gap-6 rounded-xl shadow-sm shadow-slate-700 px-7 py-5 lg:p-2 items-center">
                   
                   {/* COLLEGE-IMAGE */}
                   <div className="college-image">
                      <img src={College} alt="college" className='rounded-xl' />
                   </div>

                   {/* COLLEGE-INFO */}
                   <div className="college-info grow px-2 lg:py-5">
                      
                      <div className="header flex items-center justify-between border-b-[1px] border-white/10 pb-5">

                        <div className="collge-name">
                            <div className="text-white/60 font-semibold text-xl lg:text-2xl">The University Of Columbia</div>
                            <div className="text-base text-slate-400"><HiOutlineMap className='inline mr-1'/> Torronto , Canada . Public</div>
                        </div>

                        <div className="hidden lg:block text-slate-400/50 text-xl cursor-pointer font-semibold p-2 rounded-full border-1 border-black hover:bg-slate-700 hover:text-white"><HiOutlineBookmark/></div>

                      </div>

                      <div className="body flex flex-col lg:flex-row gap-7 lg:gap-10 items-center">

                          <div className="course-info flex flex-col mt-3 grow">
                             
                             <div className='flex list-none font-semibold gap-3 flex-col lg:flex-row lg:gap-8 '>

                                <div className="flex flex-col gap-2">
                                     <li>
                                        <h3 className='text-slate-600 text-sm leading-5 inline-block mx-3 lg:mx-0 lg:block'>Course Offered</h3>
                                        <p className='text-lg text-blue-500 inline-block lg:block'>3 Courses</p>
                                    </li>

                                    <li className='hidden lg:block'>
                                       <h3 className='text-slate-600 text-sm leading-5'>12th Marks</h3>
                                       <p className='text-lg text-slate-400'>Minimum 50%</p>
                                    </li>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <li>
                                        <h3 className='text-slate-600 text-sm leading-5 inline-block mx-3 lg:mx-0 lg:block'>1st Year Tution Fee</h3>
                                        <p className='text-lg text-slate-400 inline-block lg:block'>21 Lakhs</p>
                                    </li>
                                    <li className='hidden lg:block'>
                                       <h3 className='text-slate-600 text-sm leading-5'>Scholarship</h3>
                                       <p className='text-lg text-slate-400'>4</p>
                                    </li>
                                </div>
                                
                                <div className="flex flex-col gap-2">
                                    <li>
                                        <h3 className='text-slate-600 text-sm leading-5 inline-block mx-3 lg:mx-0 lg:block'>Exam Accepted</h3>
                                        <p className='text-lg text-slate-400 inline-block lg:block'>TOEFL ,IELETS +1</p>
                                    </li>
                                    <li className='hidden lg:block'>
                                        <h3 className='text-slate-600 text-sm leading-5'>Intake Session</h3>
                                        <p className='text-lg text-slate-400'>Sep 23</p>
                                    </li>
                                </div>
                                
                                

                             </div>

                          </div> 

                          <div className="buttons flex flex-col lg:hidden gap-4 w-full">
                            <button className='py-2 rounded-full text-white bg-blue-400/40 tracking-wide font-semibold hover:bg-blue-400/80 active:scale-90 scale-100 transition-all'>Brochures</button>
                            <button className='py-2 rounded-full text-white bg-sky-400 tracking-wide font-semibold hover:bg-sky-700 active:scale-90 scale-100 transition-all'>Compare</button>
                          </div>                      
 
                      </div>

                   </div>


                </div>
                </Link>

                <Link to='/colleges/123'>
                <div className="card cursor-pointer flex flex-col lg:flex-row gap-6 rounded-xl shadow-sm shadow-slate-700 px-7 py-5 lg:p-2 items-center">
                   
                   {/* COLLEGE-IMAGE */}
                   <div className="college-image">
                      <img src={College} alt="college" className='rounded-xl' />
                   </div>

                   {/* COLLEGE-INFO */}
                   <div className="college-info grow px-2 lg:py-5">
                      
                      <div className="header flex items-center justify-between border-b-[1px] border-white/10 pb-5">

                        <div className="collge-name">
                            <div className="text-white/60 font-semibold text-xl lg:text-2xl">The University Of Columbia</div>
                            <div className="text-base text-slate-400"><HiOutlineMap className='inline mr-1'/> Torronto , Canada . Public</div>
                        </div>

                        <div className="hidden lg:block text-slate-400/50 text-xl cursor-pointer font-semibold p-2 rounded-full border-1 border-black hover:bg-slate-700 hover:text-white"><HiOutlineBookmark/></div>

                      </div>

                      <div className="body flex flex-col lg:flex-row gap-7 lg:gap-10 items-center">

                          <div className="course-info flex flex-col mt-3 grow">
                             
                             <div className='flex list-none font-semibold gap-3 flex-col lg:flex-row lg:gap-8 '>

                                <div className="flex flex-col gap-2">
                                     <li>
                                        <h3 className='text-slate-600 text-sm leading-5 inline-block mx-3 lg:mx-0 lg:block'>Course Offered</h3>
                                        <p className='text-lg text-blue-500 inline-block lg:block'>3 Courses</p>
                                    </li>

                                    <li className='hidden lg:block'>
                                       <h3 className='text-slate-600 text-sm leading-5'>12th Marks</h3>
                                       <p className='text-lg text-slate-400'>Minimum 50%</p>
                                    </li>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <li>
                                        <h3 className='text-slate-600 text-sm leading-5 inline-block mx-3 lg:mx-0 lg:block'>1st Year Tution Fee</h3>
                                        <p className='text-lg text-slate-400 inline-block lg:block'>21 Lakhs</p>
                                    </li>
                                    <li className='hidden lg:block'>
                                       <h3 className='text-slate-600 text-sm leading-5'>Scholarship</h3>
                                       <p className='text-lg text-slate-400'>4</p>
                                    </li>
                                </div>
                                
                                <div className="flex flex-col gap-2">
                                    <li>
                                        <h3 className='text-slate-600 text-sm leading-5 inline-block mx-3 lg:mx-0 lg:block'>Exam Accepted</h3>
                                        <p className='text-lg text-slate-400 inline-block lg:block'>TOEFL ,IELETS +1</p>
                                    </li>
                                    <li className='hidden lg:block'>
                                        <h3 className='text-slate-600 text-sm leading-5'>Intake Session</h3>
                                        <p className='text-lg text-slate-400'>Sep 23</p>
                                    </li>
                                </div>
                                
                                

                             </div>

                          </div> 

                          <div className="buttons flex flex-col lg:hidden gap-4 w-full">
                            <button className='py-2 rounded-full text-white bg-blue-400/40 tracking-wide font-semibold hover:bg-blue-400/80 active:scale-90 scale-100 transition-all'>Brochures</button>
                            <button className='py-2 rounded-full text-white bg-sky-400 tracking-wide font-semibold hover:bg-sky-700 active:scale-90 scale-100 transition-all'>Compare</button>
                          </div>                      
 
                      </div>

                   </div>


                </div>
               </Link>
                <div className="card flex flex-col lg:flex-row gap-6 rounded-xl shadow-sm shadow-slate-700 px-7 py-5 lg:p-2 items-center">
                   
                   {/* COLLEGE-IMAGE */}
                   <div className="college-image">
                      <img src={College} alt="college" className='rounded-xl' />
                   </div>

                   {/* COLLEGE-INFO */}
                   <div className="college-info grow px-2 lg:py-5">
                      
                      <div className="header flex items-center justify-between border-b-[1px] border-white/10 pb-5">

                        <div className="collge-name">
                            <div className="text-white/60 font-semibold text-xl lg:text-2xl">The University Of Columbia</div>
                            <div className="text-base text-slate-400"><HiOutlineMap className='inline mr-1'/> Torronto , Canada . Public</div>
                        </div>

                        <div className="hidden lg:block text-slate-400/50 text-xl cursor-pointer font-semibold p-2 rounded-full border-1 border-black hover:bg-slate-700 hover:text-white"><HiOutlineBookmark/></div>

                      </div>

                      <div className="body flex flex-col lg:flex-row gap-7 lg:gap-10 items-center">

                          <div className="course-info flex flex-col mt-3 grow">
                             
                             <div className='flex list-none font-semibold gap-3 flex-col lg:flex-row lg:gap-8 '>

                                <div className="flex flex-col gap-2">
                                     <li>
                                        <h3 className='text-slate-600 text-sm leading-5 inline-block mx-3 lg:mx-0 lg:block'>Course Offered</h3>
                                        <p className='text-lg text-blue-500 inline-block lg:block'>3 Courses</p>
                                    </li>

                                    <li className='hidden lg:block'>
                                       <h3 className='text-slate-600 text-sm leading-5'>12th Marks</h3>
                                       <p className='text-lg text-slate-400'>Minimum 50%</p>
                                    </li>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <li>
                                        <h3 className='text-slate-600 text-sm leading-5 inline-block mx-3 lg:mx-0 lg:block'>1st Year Tution Fee</h3>
                                        <p className='text-lg text-slate-400 inline-block lg:block'>21 Lakhs</p>
                                    </li>
                                    <li className='hidden lg:block'>
                                       <h3 className='text-slate-600 text-sm leading-5'>Scholarship</h3>
                                       <p className='text-lg text-slate-400'>4</p>
                                    </li>
                                </div>
                                
                                <div className="flex flex-col gap-2">
                                    <li>
                                        <h3 className='text-slate-600 text-sm leading-5 inline-block mx-3 lg:mx-0 lg:block'>Exam Accepted</h3>
                                        <p className='text-lg text-slate-400 inline-block lg:block'>TOEFL ,IELETS +1</p>
                                    </li>
                                    <li className='hidden lg:block'>
                                        <h3 className='text-slate-600 text-sm leading-5'>Intake Session</h3>
                                        <p className='text-lg text-slate-400'>Sep 23</p>
                                    </li>
                                </div>
                                
                                

                             </div>

                          </div> 

                          <div className="buttons flex flex-col lg:hidden gap-4 w-full">
                            <button className='py-2 rounded-full text-white bg-blue-400/40 tracking-wide font-semibold hover:bg-blue-400/80 active:scale-90 scale-100 transition-all'>Brochures</button>
                            <button className='py-2 rounded-full text-white bg-sky-400 tracking-wide font-semibold hover:bg-sky-700 active:scale-90 scale-100 transition-all'>Compare</button>
                          </div>                      
 
                      </div>

                   </div>


                </div>

                <Link to='/colleges/123'>
                <div className="card flex flex-col lg:flex-row gap-6 rounded-xl shadow-sm shadow-slate-700 px-7 py-5 lg:p-2 items-center">
                   
                   {/* COLLEGE-IMAGE */}
                   <div className="college-image">
                      <img src={College} alt="college" className='rounded-xl' />
                   </div>

                   {/* COLLEGE-INFO */}
                   <div className="college-info grow px-2 lg:py-5">
                      
                      <div className="header flex items-center justify-between border-b-[1px] border-white/10 pb-5">

                        <div className="collge-name">
                            <div className="text-white/60 font-semibold text-xl lg:text-2xl">The University Of Columbia</div>
                            <div className="text-base text-slate-400"><HiOutlineMap className='inline mr-1'/> Torronto , Canada . Public</div>
                        </div>

                        <div className="hidden lg:block text-slate-400/50 text-xl cursor-pointer font-semibold p-2 rounded-full border-1 border-black hover:bg-slate-700 hover:text-white"><HiOutlineBookmark/></div>

                      </div>

                      <div className="body flex flex-col lg:flex-row gap-7 lg:gap-10 items-center">

                          <div className="course-info flex flex-col mt-3 grow">
                             
                             <div className='flex list-none font-semibold gap-3 flex-col lg:flex-row lg:gap-8 '>

                                <div className="flex flex-col gap-2">
                                     <li>
                                        <h3 className='text-slate-600 text-sm leading-5 inline-block mx-3 lg:mx-0 lg:block'>Course Offered</h3>
                                        <p className='text-lg text-blue-500 inline-block lg:block'>3 Courses</p>
                                    </li>

                                    <li className='hidden lg:block'>
                                       <h3 className='text-slate-600 text-sm leading-5'>12th Marks</h3>
                                       <p className='text-lg text-slate-400'>Minimum 50%</p>
                                    </li>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <li>
                                        <h3 className='text-slate-600 text-sm leading-5 inline-block mx-3 lg:mx-0 lg:block'>1st Year Tution Fee</h3>
                                        <p className='text-lg text-slate-400 inline-block lg:block'>21 Lakhs</p>
                                    </li>
                                    <li className='hidden lg:block'>
                                       <h3 className='text-slate-600 text-sm leading-5'>Scholarship</h3>
                                       <p className='text-lg text-slate-400'>4</p>
                                    </li>
                                </div>
                                
                                <div className="flex flex-col gap-2">
                                    <li>
                                        <h3 className='text-slate-600 text-sm leading-5 inline-block mx-3 lg:mx-0 lg:block'>Exam Accepted</h3>
                                        <p className='text-lg text-slate-400 inline-block lg:block'>TOEFL ,IELETS +1</p>
                                    </li>
                                    <li className='hidden lg:block'>
                                        <h3 className='text-slate-600 text-sm leading-5'>Intake Session</h3>
                                        <p className='text-lg text-slate-400'>Sep 23</p>
                                    </li>
                                </div>
                                
                                

                             </div>

                          </div> 

                          <div className="buttons flex flex-col lg:hidden gap-4 w-full">
                            <button className='py-2 rounded-full text-white bg-blue-400/40 tracking-wide font-semibold hover:bg-blue-400/80 active:scale-90 scale-100 transition-all'>Brochures</button>
                            <button className='py-2 rounded-full text-white bg-sky-400 tracking-wide font-semibold hover:bg-sky-700 active:scale-90 scale-100 transition-all'>Compare</button>
                          </div>                      
 
                      </div>

                   </div>


                </div>
                </Link>
                <Link to='/colleges/123'>
                <div className="card flex flex-col lg:flex-row gap-6 rounded-xl shadow-sm shadow-slate-700 px-7 py-5 lg:p-2 items-center">
                   
                   {/* COLLEGE-IMAGE */}
                   <div className="college-image">
                      <img src={College} alt="college" className='rounded-xl' />
                   </div>

                   {/* COLLEGE-INFO */}
                   <div className="college-info grow px-2 lg:py-5">
                      
                      <div className="header flex items-center justify-between border-b-[1px] border-white/10 pb-5">

                        <div className="collge-name">
                            <div className="text-white/60 font-semibold text-xl lg:text-2xl">The University Of Columbia</div>
                            <div className="text-base text-slate-400"><HiOutlineMap className='inline mr-1'/> Torronto , Canada . Public</div>
                        </div>

                        <div className="hidden lg:block text-slate-400/50 text-xl cursor-pointer font-semibold p-2 rounded-full border-1 border-black hover:bg-slate-700 hover:text-white"><HiOutlineBookmark/></div>

                      </div>

                      <div className="body flex flex-col lg:flex-row gap-7 lg:gap-10 items-center">

                          <div className="course-info flex flex-col mt-3 grow">
                             
                             <div className='flex list-none font-semibold gap-3 flex-col lg:flex-row lg:gap-8 '>

                                <div className="flex flex-col gap-2">
                                     <li>
                                        <h3 className='text-slate-600 text-sm leading-5 inline-block mx-3 lg:mx-0 lg:block'>Course Offered</h3>
                                        <p className='text-lg text-blue-500 inline-block lg:block'>3 Courses</p>
                                    </li>

                                    <li className='hidden lg:block'>
                                       <h3 className='text-slate-600 text-sm leading-5'>12th Marks</h3>
                                       <p className='text-lg text-slate-400'>Minimum 50%</p>
                                    </li>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <li>
                                        <h3 className='text-slate-600 text-sm leading-5 inline-block mx-3 lg:mx-0 lg:block'>1st Year Tution Fee</h3>
                                        <p className='text-lg text-slate-400 inline-block lg:block'>21 Lakhs</p>
                                    </li>
                                    <li className='hidden lg:block'>
                                       <h3 className='text-slate-600 text-sm leading-5'>Scholarship</h3>
                                       <p className='text-lg text-slate-400'>4</p>
                                    </li>
                                </div>
                                
                                <div className="flex flex-col gap-2">
                                    <li>
                                        <h3 className='text-slate-600 text-sm leading-5 inline-block mx-3 lg:mx-0 lg:block'>Exam Accepted</h3>
                                        <p className='text-lg text-slate-400 inline-block lg:block'>TOEFL ,IELETS +1</p>
                                    </li>
                                    <li className='hidden lg:block'>
                                        <h3 className='text-slate-600 text-sm leading-5'>Intake Session</h3>
                                        <p className='text-lg text-slate-400'>Sep 23</p>
                                    </li>
                                </div>
                                
                                

                             </div>

                          </div> 

                          <div className="buttons flex flex-col lg:hidden gap-4 w-full">
                            <button className='py-2 rounded-full text-white bg-blue-400/40 tracking-wide font-semibold hover:bg-blue-400/80 active:scale-90 scale-100 transition-all'>Brochures</button>
                            <button className='py-2 rounded-full text-white bg-sky-400 tracking-wide font-semibold hover:bg-sky-700 active:scale-90 scale-100 transition-all'>Compare</button>
                          </div>                      
 
                      </div>

                   </div>


                </div>
                </Link>
                
                <Link to='/colleges/123'>
                <div className="card flex flex-col lg:flex-row gap-6 rounded-xl shadow-sm shadow-slate-700 px-7 py-5 lg:p-2 items-center">
                   
                   {/* COLLEGE-IMAGE */}
                   <div className="college-image">
                      <img src={College} alt="college" className='rounded-xl' />
                   </div>

                   {/* COLLEGE-INFO */}
                   <div className="college-info grow px-2 lg:py-5">
                      
                      <div className="header flex items-center justify-between border-b-[1px] border-white/10 pb-5">

                        <div className="collge-name">
                            <div className="text-white/60 font-semibold text-xl lg:text-2xl">The University Of Columbia</div>
                            <div className="text-base text-slate-400"><HiOutlineMap className='inline mr-1'/> Torronto , Canada . Public</div>
                        </div>

                        <div className="hidden lg:block text-slate-400/50 text-xl cursor-pointer font-semibold p-2 rounded-full border-1 border-black hover:bg-slate-700 hover:text-white"><HiOutlineBookmark/></div>

                      </div>

                      <div className="body flex flex-col lg:flex-row gap-7 lg:gap-10 items-center">

                          <div className="course-info flex flex-col mt-3 grow">
                             
                             <div className='flex list-none font-semibold gap-3 flex-col lg:flex-row lg:gap-8 '>

                                <div className="flex flex-col gap-2">
                                     <li>
                                        <h3 className='text-slate-600 text-sm leading-5 inline-block mx-3 lg:mx-0 lg:block'>Course Offered</h3>
                                        <p className='text-lg text-blue-500 inline-block lg:block'>3 Courses</p>
                                    </li>

                                    <li className='hidden lg:block'>
                                       <h3 className='text-slate-600 text-sm leading-5'>12th Marks</h3>
                                       <p className='text-lg text-slate-400'>Minimum 50%</p>
                                    </li>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <li>
                                        <h3 className='text-slate-600 text-sm leading-5 inline-block mx-3 lg:mx-0 lg:block'>1st Year Tution Fee</h3>
                                        <p className='text-lg text-slate-400 inline-block lg:block'>21 Lakhs</p>
                                    </li>
                                    <li className='hidden lg:block'>
                                       <h3 className='text-slate-600 text-sm leading-5'>Scholarship</h3>
                                       <p className='text-lg text-slate-400'>4</p>
                                    </li>
                                </div>
                                
                                <div className="flex flex-col gap-2">
                                    <li>
                                        <h3 className='text-slate-600 text-sm leading-5 inline-block mx-3 lg:mx-0 lg:block'>Exam Accepted</h3>
                                        <p className='text-lg text-slate-400 inline-block lg:block'>TOEFL ,IELETS +1</p>
                                    </li>
                                    <li className='hidden lg:block'>
                                        <h3 className='text-slate-600 text-sm leading-5'>Intake Session</h3>
                                        <p className='text-lg text-slate-400'>Sep 23</p>
                                    </li>
                                </div>
                                
                                

                             </div>

                          </div> 

                          <div className="buttons flex flex-col lg:hidden gap-4 w-full">
                            <button className='py-2 rounded-full text-white bg-blue-400/40 tracking-wide font-semibold hover:bg-blue-400/80 active:scale-90 scale-100 transition-all'>Brochures</button>
                            <button className='py-2 rounded-full text-white bg-sky-400 tracking-wide font-semibold hover:bg-sky-700 active:scale-90 scale-100 transition-all'>Compare</button>
                          </div>                      
 
                      </div>

                   </div>


                </div>
                </Link>

                <Link to='/colleges/123'>
                <div className="card flex flex-col lg:flex-row gap-6 rounded-xl shadow-sm shadow-slate-700 px-7 py-5 lg:p-2 items-center">
                   
                   {/* COLLEGE-IMAGE */}
                   <div className="college-image">
                      <img src={College} alt="college" className='rounded-xl' />
                   </div>

                   {/* COLLEGE-INFO */}
                   <div className="college-info grow px-2 lg:py-5">
                      
                      <div className="header flex items-center justify-between border-b-[1px] border-white/10 pb-5">

                        <div className="collge-name">
                            <div className="text-white/60 font-semibold text-xl lg:text-2xl">The University Of Columbia</div>
                            <div className="text-base text-slate-400"><HiOutlineMap className='inline mr-1'/> Torronto , Canada . Public</div>
                        </div>

                        <div className="hidden lg:block text-slate-400/50 text-xl cursor-pointer font-semibold p-2 rounded-full border-1 border-black hover:bg-slate-700 hover:text-white"><HiOutlineBookmark/></div>

                      </div>

                      <div className="body flex flex-col lg:flex-row gap-7 lg:gap-10 items-center">

                          <div className="course-info flex flex-col mt-3 grow">
                             
                             <div className='flex list-none font-semibold gap-3 flex-col lg:flex-row lg:gap-8 '>

                                <div className="flex flex-col gap-2">
                                     <li>
                                        <h3 className='text-slate-600 text-sm leading-5 inline-block mx-3 lg:mx-0 lg:block'>Course Offered</h3>
                                        <p className='text-lg text-blue-500 inline-block lg:block'>3 Courses</p>
                                    </li>

                                    <li className='hidden lg:block'>
                                       <h3 className='text-slate-600 text-sm leading-5'>12th Marks</h3>
                                       <p className='text-lg text-slate-400'>Minimum 50%</p>
                                    </li>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <li>
                                        <h3 className='text-slate-600 text-sm leading-5 inline-block mx-3 lg:mx-0 lg:block'>1st Year Tution Fee</h3>
                                        <p className='text-lg text-slate-400 inline-block lg:block'>21 Lakhs</p>
                                    </li>
                                    <li className='hidden lg:block'>
                                       <h3 className='text-slate-600 text-sm leading-5'>Scholarship</h3>
                                       <p className='text-lg text-slate-400'>4</p>
                                    </li>
                                </div>
                                
                                <div className="flex flex-col gap-2">
                                    <li>
                                        <h3 className='text-slate-600 text-sm leading-5 inline-block mx-3 lg:mx-0 lg:block'>Exam Accepted</h3>
                                        <p className='text-lg text-slate-400 inline-block lg:block'>TOEFL ,IELETS +1</p>
                                    </li>
                                    <li className='hidden lg:block'>
                                        <h3 className='text-slate-600 text-sm leading-5'>Intake Session</h3>
                                        <p className='text-lg text-slate-400'>Sep 23</p>
                                    </li>
                                </div>
                                
                                

                             </div>

                          </div> 

                          <div className="buttons flex flex-col lg:hidden gap-4 w-full">
                            <button className='py-2 rounded-full text-white bg-blue-400/40 tracking-wide font-semibold hover:bg-blue-400/80 active:scale-90 scale-100 transition-all'>Brochures</button>
                            <button className='py-2 rounded-full text-white bg-sky-400 tracking-wide font-semibold hover:bg-sky-700 active:scale-90 scale-100 transition-all'>Compare</button>
                          </div>                      
 
                      </div>

                   </div>


                </div>
                </Link>

                <Link to='/colleges/123'>
                <div className="card flex flex-col lg:flex-row gap-6 rounded-xl shadow-sm shadow-slate-700 px-7 py-5 lg:p-2 items-center">
                   
                   {/* COLLEGE-IMAGE */}
                   <div className="college-image">
                      <img src={College} alt="college" className='rounded-xl' />
                   </div>

                   {/* COLLEGE-INFO */}
                   <div className="college-info grow px-2 lg:py-5">
                      
                      <div className="header flex items-center justify-between border-b-[1px] border-white/10 pb-5">

                        <div className="collge-name">
                            <div className="text-white/60 font-semibold text-xl lg:text-2xl">The University Of Columbia</div>
                            <div className="text-base text-slate-400"><HiOutlineMap className='inline mr-1'/> Torronto , Canada . Public</div>
                        </div>

                        <div className="hidden lg:block text-slate-400/50 text-xl cursor-pointer font-semibold p-2 rounded-full border-1 border-black hover:bg-slate-700 hover:text-white"><HiOutlineBookmark/></div>

                      </div>

                      <div className="body flex flex-col lg:flex-row gap-7 lg:gap-10 items-center">

                          <div className="course-info flex flex-col mt-3 grow">
                             
                             <div className='flex list-none font-semibold gap-3 flex-col lg:flex-row lg:gap-8 '>

                                <div className="flex flex-col gap-2">
                                     <li>
                                        <h3 className='text-slate-600 text-sm leading-5 inline-block mx-3 lg:mx-0 lg:block'>Course Offered</h3>
                                        <p className='text-lg text-blue-500 inline-block lg:block'>3 Courses</p>
                                    </li>

                                    <li className='hidden lg:block'>
                                       <h3 className='text-slate-600 text-sm leading-5'>12th Marks</h3>
                                       <p className='text-lg text-slate-400'>Minimum 50%</p>
                                    </li>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <li>
                                        <h3 className='text-slate-600 text-sm leading-5 inline-block mx-3 lg:mx-0 lg:block'>1st Year Tution Fee</h3>
                                        <p className='text-lg text-slate-400 inline-block lg:block'>21 Lakhs</p>
                                    </li>
                                    <li className='hidden lg:block'>
                                       <h3 className='text-slate-600 text-sm leading-5'>Scholarship</h3>
                                       <p className='text-lg text-slate-400'>4</p>
                                    </li>
                                </div>
                                
                                <div className="flex flex-col gap-2">
                                    <li>
                                        <h3 className='text-slate-600 text-sm leading-5 inline-block mx-3 lg:mx-0 lg:block'>Exam Accepted</h3>
                                        <p className='text-lg text-slate-400 inline-block lg:block'>TOEFL ,IELETS +1</p>
                                    </li>
                                    <li className='hidden lg:block'>
                                        <h3 className='text-slate-600 text-sm leading-5'>Intake Session</h3>
                                        <p className='text-lg text-slate-400'>Sep 23</p>
                                    </li>
                                </div>
                                
                                

                             </div>

                          </div> 

                          <div className="buttons flex flex-col lg:hidden gap-4 w-full">
                            <button className='py-2 rounded-full text-white bg-blue-400/40 tracking-wide font-semibold hover:bg-blue-400/80 active:scale-90 scale-100 transition-all'>Brochures</button>
                            <button className='py-2 rounded-full text-white bg-sky-400 tracking-wide font-semibold hover:bg-sky-700 active:scale-90 scale-100 transition-all'>Compare</button>
                          </div>                      
 
                      </div>

                   </div>


                </div>

                </Link>
                
                

                
             </div>
        
        </>
     );
}

export default CollegeCard;