import * as C from "./style"
import DetailsItem from "./DetailsItems/DetailsItem"

export const DetailsCard = (props) =>{
    return(
        <C.Container>
           <DetailsItem title="FUSO HORÁRIO ATUAL" data="América/Maceió"/>
           <DetailsItem title="DIA DA SEMANA" data="0"/>
           <DetailsItem title="DIA DO ANO" data="198"/>
           <DetailsItem title="NÚMERO DA SEMANA" data="28"/>
        </C.Container>
    )
}
