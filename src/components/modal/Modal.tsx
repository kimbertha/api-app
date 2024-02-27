/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

interface ModalProps {
    modal :any;
    setModal:  React.Dispatch<any>;
}
const Modal  = ({ modal, setModal }: ModalProps) => {
  if (!modal) return 
  return (
    <div className='modal pointer'>
      <div onClick={() => setModal(false)}>CLOSE</div>
      {modal?.apiOutputs && 
      Object.keys(modal?.apiOutputs).map(key =>
        <p key={key}>{key} : {modal?.apiOutputs[key]} </p>)
      }
    </div>
  )
}

export default Modal