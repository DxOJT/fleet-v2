
import CardComponent from "../components/CardComponent"

export const Dashboard  = () =>  {


     const sampledata = [
        {id:1, text1:0, text2:"Franchise  in One  (1) month"},
        {id:2, text1:0, text2:"Vehicle Registration expiring in (1) month"},
        {id:3, text1:0, text2:"Driver's License expiring in one  (1) month"},
        {id:4, text1:0, text2:"Insurance Expiring in One  (1) month"},
     
        
     ]


return(

      
        <div  className="flex justify-center gap-5 flex-wrap  " > 
            {sampledata.map((value)=>(
               <CardComponent value={value} key={value.id}/>
            ))}

          

         
         
        
        </div>






)



}