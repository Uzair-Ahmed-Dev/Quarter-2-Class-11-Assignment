import ChildComponent from "./ChildComponent";


function ParentComponent(){
    let fullName: string = "Uzair Ahmed";
    let fvtColor: String = "White";
    let fvtDish : string = "Biryani";
    return(
        <div>
            <ChildComponent fullName={fullName} fvtColor={fvtColor} fvtDish={fvtDish}/>
        </div>
    )
}

export default ParentComponent;