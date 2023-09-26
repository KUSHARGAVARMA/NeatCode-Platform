
import useFetchData from "../../hooks/usefetch";
import './displayProblems.css';
import { Link } from "react-router-dom";
const DisplayProblems=()=>{

const {data, isLoading } = useFetchData('http://localhost:3001/questions',[]);
console.log(data);

const getDifficultyColor = (difficulty) => {
  switch (difficulty) {
    case 'easy':
      return 'green';
    case 'medium':
      return 'yellow';
    case 'hard':
      return 'red';
    default:
      return 'black'; // Default color if difficulty is not recognized
  }
};


  return (
    <div className="container">
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Difficulty</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>
              <Link to={`/problems/${item.id}`}>
                {item.title}
              </Link>
            </td>
            <td>{item.description}</td>
            <td style={{ color: getDifficultyColor(item.difficulty) }}>{item.difficulty}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default DisplayProblems;