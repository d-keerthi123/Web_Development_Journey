import Product from "./Product.jsx"

export default function ProductTab(){
    let Features={a:"fast",b:"realiable",c:"hiTech"};
    return(
        <>
        {/* <Product Title="Phone" Price="45000"/>
        <Product Title="Laptop" Price="86000"/> */}

        {/* if you want to pass price as a number not string */}
        {/* <Product Title="Phone" Price={45000} Features={Features.a}/>
        <Product Title="Laptop" Price={86000} Features={Features.b}/> */}

        
        {/* <Product Title="Phone" Price={45000} Features={[<li>hitech</li>,<li>fast</li>]}/>
        <Product Title="Laptop" Price={86000} Features={[<li>reliable</li>,<li>easy to use</li>]}/> */}

        <Product Title="Phone" Price={45000} Features={["hitech","fast"]}/>
        <Product Title="Laptop" Price={86000} Features={["reliable","easyToUse"]}/>
        </>
    );
}