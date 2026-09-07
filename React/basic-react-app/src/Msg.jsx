
export default function Msg({name,textColor}){
    let styles={color:textColor};
    return (
        <div className="Msg" >
            <h1 style={styles}>Hello,{name}</h1>
        </div>
    )
}