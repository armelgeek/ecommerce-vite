import React, { useRef } from 'react'
import UploadFile from '../../../../components/forms/UploadFile';

const Illustration = () => {
  const uploadRef = useRef();
  return (
    <>
      <label className='text-primary-700 font-medium' htmlFor="upload">Illustration du produit</label>
      <UploadFile
        name={'upload'}
        type={"multiple"}
        label={'Product image'}
        index={1}
        uploadText={'Upload Images'}
        deleteText={'Retirer'}
        changeValue={(v: any) => console.log('value', v)}
        ref={uploadRef}
      />
    </>
  )
}
export default Illustration;