const Alert = ({message, classAlert}) => {

    return(
        <>
            { classAlert =='error'&&
                 <div className="bg-red-800 rounded-md text-center uppercase font-bold text-white mt-2 p-3">
                            {message}
                </div>
            }
            { classAlert =='success'&&
                 <div className="bg-green-800 rounded-md text-center uppercase font-bold text-white mt-2 p-3">
                    {message}
                </div>
            }
        </>
    )
}

export default Alert