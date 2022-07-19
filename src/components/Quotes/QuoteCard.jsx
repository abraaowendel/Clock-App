import * as C from "./style"
import Refresh from "../../assets/svgs/icon-refresh.svg"

const QuoteCard = (props) =>{
    return(
        <C.Container>
            <C.Top>
                <C.Quote>{props.data.content}</C.Quote>
                <C.ButtonRefresh src={Refresh} onClick={() => props.event()}/>
            </C.Top>
            <C.Author>{props.data.author}</C.Author>
        </C.Container>
    )
} 
export default QuoteCard;  