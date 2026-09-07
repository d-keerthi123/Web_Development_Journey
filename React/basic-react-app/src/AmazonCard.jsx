import "./AmazonCard.css"
import Price from "./Price.jsx"

export default function AmazonCard({title,idx}){
    let oldPrices=["10000","5000","9880","8876"];
    let newPrices=["9000","4000","9000","8000"];
    let description=[["8000 dp","5 programmable buttons"],["intutive surface","designed for ipad pro"],["intutive surface","designed for ipad pro"],["wireless","optical orientation"]]
    return(
        <div className="AmazonCard">
            <h4>Title:{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]}  newPrice={newPrices[idx]}/>
        </div>
    )
}