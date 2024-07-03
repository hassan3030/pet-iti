import { useParams , Link , useNavigate} from "react-router-dom";
import { useState , useEffect } from "react";
// useParams => hook to take id from URL
// useNavigate = hook to navigate router = Link
const Details = () => {
  const {id} = useParams()
  const navigate = useNavigate();
  const [pet, setPet] = useState(null);
  const fetchPetDetails = async () => {
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);
    const json = await res.json();
    setPet(json.pets[id]);
    console.log("id ", pet);
    console.log("id ", id);
  };
 useEffect(()=>{
  fetchPetDetails();
 },[id])
// console.log('param' , param)
  return (
    <div className="details">
      {pet && (<h3> {pet.id} ..... </h3>)}
      {!pet && (<h3> Loading ..... </h3>)}
      
      <h2> Pet Details Page! </h2>
      <h2>{id}</h2>
      <button onClick={()=> {navigate('/')}}> Go Home </button>
      <Link to={'/'}> Go Home </Link>
    </div>
  );
};
 
export default Details;

// onst Details = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   return (
//     <div className="details">
//       <h2>Pet {id} Details Page!</h2>
//       <button
//         onClick={() => {
//           navigate('/');
//         }}
//       >
//         Back
//       </button>
//     </div>
//   );
// };

// export default Details;


// { (
//   <div>
//    {/* <div className="image-container">
//     <img src={pets.images[id]} alt={'Not found '} />
//   </div> */}
//   <h2> {pet.name}</h2>
//   <h3> {`${pet.name} -  ${pet.breed} - ${pet.city} -${pet.state} `} </h3>
//   <p>
//     {pet.description}
//   </p>
//   </div>

//   )}