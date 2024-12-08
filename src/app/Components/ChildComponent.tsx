 


function ChildComponent(props:any){
    console.log(props);
    
    return(
        <div className="flex flex-col justify-center items-center h-screen bg-emerald-100 font-mono">
            <p className=" text-lg w-1/3 h-[20px] text-center p-8 text-yellow-700"><span className="px-2 text-black ">FullName:</span> {props.fullName}</p>
            <p className=" text-lg w-1/3 h-[20px] text-center p-8 text-yellow-700"><span className="px-2 text-black  ">Favorite Color:</span> {props.fvtColor}</p>
            <p className=" text-lg w-1/3 h-[20px] text-center p-8 text-yellow-700"><span className="px-2 text-black  ">Favorite Dish:</span>{props.fvtDish}</p>
        </div>
    )
}

export default ChildComponent;