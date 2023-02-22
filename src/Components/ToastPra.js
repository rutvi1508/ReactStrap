import React from 'react'
import { ToastHeader, ToastBody, Toast } from 'reactstrap';

function ToastPra() {
  return (
    <div>
    <h1>Toast</h1>
      <div className="p-3 my-2 rounded">
        <Toast>
          <ToastHeader>
            Reactstrap
          </ToastHeader>
          <ToastBody>
            This is a toast on a white background — check it out!
          </ToastBody>
        </Toast>
      </div>
    </div>
  )
}

export default ToastPra