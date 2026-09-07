import AmazonCard from "./AmazonCard.jsx"

export default function AmazonCardProduct(){
    let styles={
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center",
    };
    return(
        <div style={styles}> 
        <AmazonCard title="Logitech mx master" idx={0}></AmazonCard>
        <AmazonCard title="apple pencil"  idx={1}></AmazonCard>
        <AmazonCard title="Zebronics zeb-trnsformer"  idx={2}></AmazonCard>
        <AmazonCard title="petronics toad 23"  idx={3}></AmazonCard>
        </div>
    );
}