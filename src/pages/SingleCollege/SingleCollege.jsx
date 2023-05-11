import Layout from "../../utils/Layout";
import Section1 from "./Sections/Section1";
import Section2 from "./Sections/Section2";
import Section3 from "./Sections/Section3";
import Section4 from "./Sections/Section4";
import Section5 from "./Sections/Section5";

function SingleCollege() {
    return ( 
        <>
          <Layout>
           <div className="Single-college-info mt-32">
             
             {/* SECTION1-COLLGE INTRO */}
              <Section1/> 
              


             {/* COLLEGE-INFO VIDEO */}
             <Section2/>

             {/* COLLEGE-INFO TABS */}
             <Section3/>

             {/* FAQ */}
             <Section4/>

             {/* RELATED-COLLEGE */}
             <Section5/>

           </div>
          </Layout> 

        </>
     );
}

export default SingleCollege;