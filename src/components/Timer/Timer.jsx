import { FormatHours } from "../../helpers/FormatHours";
import { FormartPeriod } from "../../helpers/FormatPeriod";
import * as C from "./style"

const Timer = (props) =>{
    const util = FormartPeriod(props.data.h)
    return(
        <C.Container>
            <C.Greeting>
                <C.Icon src={util.icon}/>
                <C.GreetingTitle>{util.salutation}</C.GreetingTitle>
            </C.Greeting>
            <C.Hours>
                <C.CurrentTime>{props.data.fullHour}</C.CurrentTime>
                <C.Period>{util.period}</C.Period>
            </C.Hours>
            <C.Locale>
                <C.Region>{props.info.country_code2}</C.Region>
            </C.Locale>
        </C.Container>
    )
}
export default Timer; 