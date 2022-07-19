import * as C from "./style"

const InfoDetails = (props) =>{
    return(
        <C.Details>
            <C.DetailsTitle>{props.title}</C.DetailsTitle>
            <C.DetailsResult>{props.data}</C.DetailsResult>
        </C.Details>
    )
}
export default InfoDetails;