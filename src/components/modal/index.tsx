import React, { useEffect, useState } from "react";
import Style from "./index.module.css";

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
            <div className={Style.modalBox} onClick={closeHandler}>
            <div className={Style.modalInner} onClick={(e)=> e.stopPropagation() }>
                <div 
                className={Style.modalHeader}
                >
                    <p>{header}</p>
            
                </div>
                <div className={Style.modalContent}>
                    {message}
                </div>
                <div className={Style.modalBtnCnt}>
                    {
                        onCancel &&
                        <button 
                        className={Style.modalBtn} 
                        onClick={cancelHandler}>
                            Cancel
                        </button>
                    }
                    {
                        onOk &&
                        <button 
                        className={Style.modalBtn} 
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