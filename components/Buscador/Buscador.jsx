import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";


export default function Buscador() {
  return (
    <><TextField

      hiddenLabel
      id="filled-hidden-label-small"
      placeholder="Inicia tu busqueda..."
      variant="filled"
      size="small"
      sx={{ width: "80%", m: 2, mt:5, ml:10, mr:1 }} /><SearchIcon sx={{mt:6}}/></>
  );
}

//   <div className="col-7">
//   <div className="input-group">
//     <input
//       type="text"
//       className="form-control"
//       placeholder="Que necesitas buscar"
//       aria-label="Recipient's username"
//       aria-describedby="button-addon2"
//     />
//     <button className="btn btn-primary" type="button" id="button-addon2">
//       Ir
//     </button>
//       </div>
// </div>
