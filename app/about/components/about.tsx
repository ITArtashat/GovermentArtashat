import {FC, useState} from "react";
import images from "./about"
import classes from "../style/about.module.scss"
import Image from "next/image"
import { GrLinkedin } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";





        
        
const BirthInfo: FC = () =>{
    
    return (
        <section>
          
            
            <div  className={classes["big_div"]}>
                    
                <h1 className={classes["name_container"]}>ԿԱՌԼԵՆ ՍԱՄՎԵԼԻ ՄԿՐՏՉՅԱՆ</h1>

                <section className={classes["links_container"]} >
                    <ul className={classes["socisl_block"]} >
                        <li>
                        <a href="" target="_blank" title="follow me on Facebook" >
                        <FaFacebook className={classes["link_icon"]}/>
                       </a>
                        </li>
                        <li >
                            <a href="" target="_blank" title="follow me on Linkedin" >
                            <GrLinkedin className={classes["link_icon"]}/> 
                      </a>
             </li>
                    </ul>
                </section>
                <div className={classes["img_container"]}>
    <Image src ="/about/image2.jpg" className={classes["about_img"]} alt="image2"  width={500} height={700} />
    
    </div>

    <div>
        <h3>
        Նամակ քաղաքապետին
        </h3>
        <button className={classes["messege_container"]}>
        <BsPencilSquare  className={classes["messege_icon"]}/>Ուղարկեք ձեր հաղորդագրությունը 
            <a href="" target="_blank" title=" Ուղարկեք ինձ հաղորդագրություն"  > 
            
</a>
        </button>
    </div>


    <section className={classes["about_info"]}>
                <h4 className={classes["h4_classes"]}>Ծնունդ</h4>
                <p className={classes["p_classes"]}>Ծնվել է 1986 թվականի դեկտեմբերի 21-ին, Արարատի մարզի Արտաշատ քաղաքում:
2004-2006 թթ. ծառայել է ՀՀ Զինված ուժերում՝ որպես ջոկի հրամանատար:</p>

    <h4 className={classes["h4_classes"]}>ԿՐԹՈՒԹՅՈՒՆ</h4>
<p className={classes["p_classes"]}>2003 թվականին ավարտել է Արտաշատ քաղաքի թիվ 3  միջնակարգ դպրոցը:
2004-2011 թթ. սովորել և ավարտել է Երևանի Խ. Աբովյանի անվան հայկական պետական մանկավարժական համալսարանի «Հոգեբանության և սոցիալական մանկավարժության»  ֆակուլտետը, ստացել է մանկավարժության  բակալավրի աստիճան: 2020 թվականից ընդունվել և սովորում է  Երևանի  Մ. Խորենացու անվան պետական համալսարանի  «Իրավաբանական»  ֆակուլտետում:</p>
   <h4 className={classes["h4_classes"]}>ԱՇԽԱՏԱՆՔԱՅԻՆ ԳՈՐԾՈՒՆԵՈՒԹՅՈՒՆ</h4>
<p className={classes["p_classes"]}>2008-2009  թթ. աշխատել է ՀՀ ԱՆ քրեկատարողական հաստատությունում՝ որպես ՔԿՀ ԱԱՀ 2-րդ կարգի մասնագետ:
2009-2011 թթ.  աշխատել է «Սանարե ֆարմ» ՍՊԸ-ում:
2012-2015 թթ. զբաղվել է ձեռնարկատիրական գործունեությամբ ՌԴ-ում:
2016-2019 թթ. աշխատել է «Սանարե ֆարմ» ՍՊԸ-ում:
2019-2020 թթ. եղել է Արարատի մարզպետի խորհրդականը:
2020-2021 թթ աշխատել է «Արտաշատ» ՋՕԸ-ի գործադիր տնօրեն:
2021 թվականի հոկտեմբերի 7-ին վարչապետի որոշմամբ նշանակվել է Արտաշատ համայնքի ղեկավարի պաշտոնակատար:
2021թ. դեկտեմբերի 5-ի  Արտաշատ խոշորացված համայնքի ավագանու ընտրություններից հետո ստանձնել է համայնքի ղեկավարի լիազորությունները:</p>
           

 <p className={classes["p_classes"]}>Աշխատանքային գործունեության ընթացքում արժանացել է պատվոգրերի և շնորհակալագրերի:
«Քաղաքացիական պայմանագիր» կուսակցության անդամ է:
Ամուսնացած է, ունի 2 որդի և մեկ դուստր:</p>

</section>
            
            
</div>
             
</section>
                 
          
 )         
};

export default BirthInfo;