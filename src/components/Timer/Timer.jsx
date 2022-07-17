import * as C from "./style"
import Dia from "../../assets/svgs/icon-sun.svg"

export const Timer = () =>{
    return(
        <C.Container>
            <C.Greeting>
                <C.Icon src={Dia}/>
                <h5>BOM DIA, ATUALMENTE ESTÁ</h5>
            </C.Greeting>
            <C.Hours>
                <C.CurrentTime>10:45</C.CurrentTime>
                <C.Period>AM</C.Period>
            </C.Hours>
            <C.Locale>
                <C.Region>SUL</C.Region>
                <C.Toggle>
                    <C.ToggleTitle>MAIS</C.ToggleTitle>
                    <C.IconUpOrDown src={{}}/>
                </C.Toggle>
            </C.Locale>
        </C.Container>
    )
}