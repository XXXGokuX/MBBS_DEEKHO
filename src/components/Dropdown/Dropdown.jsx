import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import {FaAngleDown,FaAngleUp} from 'react-icons/fa'

function AccordionMenu({items}) {
  const [openIndex, setOpenIndex] = useState(0);

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className="accordion-item mt-4">
          <button className="accordion-header font-semibold text-white/70 text-lg flex justify-between w-full" onClick={() => handleItemClick(index)}>
            <p>{item.title}</p>
            <p>{openIndex === index ?<FaAngleUp/>:<FaAngleDown/> }</p>
          </button>
          <CSSTransition in={openIndex === index} timeout={300} classNames="accordion-content" unmountOnExit>
            <div className="accordion-content">
                 
                 <form>
                     <ul className='text-slate-400 font-semibold text-[18px]'>
                        {item.menu.map((opt)=> (
                            <li className='flex gap-3 ml-3 mt-4 items-center' key={opt}><input type='checkbox' value={opt} className='h-5 w-5'/>{opt}</li>

                        ))}
                        
                     </ul>

                 </form>

            </div>
          </CSSTransition>
        </div>
      ))}
    </div>
  );
}

export default AccordionMenu;
