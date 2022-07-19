import * as C from "./style"
import DetailsItem from "./InfoDetails/DetailsItem"

const DetailsCard = (props) =>{
    return(
        <C.Container color={props}>
           <DetailsItem title="FUSO HORÁRIO ATUAL" data={props.data.timezone}/>
           <DetailsItem title="DIA DA SEMANA" data={props.data.day_of_week}/>
           <DetailsItem title="DIA DO ANO" data={props.data.day_of_year}/>
           <DetailsItem title="NÚMERO DA SEMANA" data={props.data.week_number}/>
        </C.Container>
    )
}
export default DetailsCard
