export const FormatHours = (time) =>{
    return time < 10? `0${time}`: time;
}