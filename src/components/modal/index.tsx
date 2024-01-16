import React, { useEffect, useState } from "react";

type prop={
    header:string,
    message:string,
    onOk?:()=> void,
    onCancel?:()=> void,
    onClose?:()=> void,
    open:boolean
}

const ModalBox = ({header,message,onOk,open,onClose,onCancel}:prop)=>{

    const [active,setActive] = useState(open);

    useEffect(()=>{
        setActive(open);
    },[open])


    const okHandler = (e:React.MouseEvent<HTMLButtonElement>)=>{
        e.stopPropagation();

        onOk && onOk();
    }
    const cancelHandler = (e:React.MouseEvent<HTMLButtonElement>)=>{
        e.stopPropagation();

        onCancel && onCancel();
    }

    const closeHandler = (e:React.MouseEvent<HTMLDivElement>)=>{
        if(onClose){
            setActive(false);
            onClose();
        }
    }

    return(
        <>
        {
            active &&
            <div className="modalBox" onClick={closeHandler}>
            <div className="modalInner" onClick={(e)=> e.stopPropagation() }>
                <div 
                className={`modalHeader `}
                >
                    <p>{header}</p>
            
                </div>
                <div className="modalContent">
                    {message}
                </div>
                <div className="modalBtnCnt">
                    {
                        onCancel &&
                        <button 
                        className={`modalBtn`} 
                        onClick={cancelHandler}>
                            Cancel
                        </button>
                    }
                    {
                        onOk &&
                        <button 
                        className={`modalBtn`} 
                        onClick={okHandler}>
                            OK
                        </button>
                    }
                </div>

            </div>
        </div>
        }
        </>
    )
}

export default ModalBox;