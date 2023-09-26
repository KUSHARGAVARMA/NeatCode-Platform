import useFetchData from "../../hooks/usefetch";

const Solve =()=>{
    const {data, isLoading } = useFetchData('http://localhost:3001/questions',[]);
    console.log(data);
    return (
     <div>
     {data.map((item, index) => (
       <div key={index}>
         <h2>{item.title}</h2>
         <p>Description: {item.description}</p>
         <h3>Test Cases</h3>
         <ul>
           {item.testCases.map((testCase, idx) => (
             <li key={idx}>
               Input: {JSON.stringify(testCase.input)}, 
               Expected Output: {JSON.stringify(testCase.output)}
             </li>
           ))}
         </ul>
       </div>
     ))}
    </div>
    
     
    
    
    
    
    
    
      );
}

export default Solve;