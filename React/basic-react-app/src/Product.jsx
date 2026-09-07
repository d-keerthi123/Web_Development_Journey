import "./Product.css";

export default function Product({Title,Price,Features}){
    let list=Features.map((Feature)=><li>{Feature}</li>);
    let styles={backgroundColor: Price>50000 ? "pink" :null};
    return (
        <div className="Product" style={styles}>
            <h3>{Title}</h3>
            {/* <p>Price : {Price >50000 ? `${Price} Discount:5% `:Price}</p> */}

            <p>Price : {Price}</p>
            {Price >50000 ? <p>Discount:5% </p>:null}
            <ul>{list}</ul>
        </div>
    )
}

