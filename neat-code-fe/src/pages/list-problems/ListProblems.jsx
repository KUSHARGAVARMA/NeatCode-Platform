import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/usefetch";
const ListProblems =()=>{
    const { id } = useParams();
    const { data: problem, error, isLoading } = useFetchData(`http://localhost:3001/questions/${id}`, []);
    console.log(problem);
    return (
        <>
        List all the problem here
        </>
    )
}

export default ListProblems;