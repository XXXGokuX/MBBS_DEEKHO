import CollegeCard from "../../components/CollegeCard/CollegeCard";
import AccordionMenu from "../../components/Dropdown/Dropdown";
import Layout from "../../utils/Layout";
import {FaFilter} from 'react-icons/fa'

const items =[
    {menu: ['TOEFL','PTE','NEET','SAT'] , title: 'Exam Accepted'},
    {menu: ['CANADA','USA','AUSTRALIA','UK'] , title: 'Country'},
    {menu: ['MAX 10 LAKH','MAX 20 LAKH','MAX 30 LAKH','MAX 40 LAKH'] , title: 'Tution Fee'},
    {menu: ['13 MONTHS','24 MONTHS','48+ MONTHS'] , title: 'Course Duration'}
]


function College() {
    return ( 

        <>
          <Layout> 
            <div className="colleges-page mt-20">
               
               <div className="all-collges-info flex flex-col lg:flex-row gap-10">

                   {/* FILTER-SECTION */}
                   <div className="filter-section flex flex-col lg:w-[33%] bg-blue-900 py-10 px-5 rounded-md h-fit">

                       <div className="filter-title border-b-[1px] border-white/30 pb-4">
                           <div className="flex justify-between mb-5 font-semibold tracking-wide items-center">
                              <div className="text-white/90"><FaFilter className="inline ml-2"/> All Filters</div>
                              <div className="text-blue-500 cursor-pointer hover:text-blue-950 hover:bg-slate-600/40  rounded-full py-1 px-3">Clear All</div>
                           </div>

                           <div className="all-filters-title flex flex-row gap-2 flex-wrap ">

                              <div className="border-1 rounded-full px-5 py-2 bg-white/20 text-white/70 flex gap-2">
                                <div className="title font-semibold">Computer Science</div>
                                <div className="icon font-semibold cursor-pointer hover:scale-110 select-none">x</div>
                              </div>

                              

                              <div className="border-1 rounded-full px-5 py-2 bg-white/20 text-white/70 flex justify-between gap-4">
                                <div className="title font-semibold">2 Lakh</div>
                                <div className="icon font-semibold cursor-pointer hover:scale-110 select-none">x</div>
                              </div>

                              <div className="border-1 rounded-full px-5 py-2 bg-white/20 text-white/70 flex justify-between gap-4">
                                <div className="title font-semibold">Data Analyst</div>
                                <div className="icon font-semibold cursor-pointer hover:scale-110 select-none">x</div>
                              </div>

                              <div className="border-1 rounded-full px-5 py-2 bg-white/20 text-white/70 flex justify-between gap-4">
                                <div className="title font-semibold">Data Analyst</div>
                                <div className="icon font-semibold cursor-pointer hover:scale-110 select-none">x</div>
                              </div>

                           </div>
                       </div>

                       <div className="categorywise-checkboxes mt-10">

                             <AccordionMenu items={items} />

                       </div>

                   </div>

                   {/* COLLEGE-CARDS */}

                   <div className="college-cards grow">
                           
                           <div className="found-result">
                            <p className="text-lg text-slate-500 font-semibold"><span className="text-yellow-600 text-xl font-bold mr-2">581</span> Results Found | All MBBS College Result</p>
                           </div>

                           <div className="college-details">
                                 <CollegeCard/>
                             
                           </div>

                   </div>

               </div>

            </div>
          </Layout> 
        </>
     );
}

export default College;