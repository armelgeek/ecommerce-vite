import React, { useCallback, useRef, useState } from 'react'
import _ from 'lodash';
import { ImNext, ImNext2, ImPrevious, ImPrevious2 } from 'react-icons/im';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import UploadFile from '../../../../components/forms/UploadFile';


const HorizontalPagination = ({ variations, totalItems, updateVariation, deleteVariation }: any) => {
  const uploadRef = useRef(null);
  console.log('variations', variations)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [promotion, setPromotion] = useState(true);
  const handleNextItem = useCallback(() => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, totalItems - 1));
  }, [totalItems]);

  const handlePrevItem = useCallback(() => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  }, []);
  const updateValue = useCallback(({ prop, value }: {
    prop: string,
    value: any
  }) => {
    updateVariation({
      ...variations[currentIndex],
      [prop]: value
    },
      'selected.variations',
      currentIndex
    )
  }, [currentIndex, variations])
  return (
    <div className='border border-slate-200'>
      <div className="flex flex-row">
        <div className="p-3 w-96 ">
          <div>
            <h5 className='text-primary-700 text-center uppercase font-medium mb-5 border-b-2'>Modalités ({`${currentIndex + 1} - ${totalItems}`} )</h5>
            {variations[currentIndex].attributes.map((res: any) => (
              <div className="flex flex-row justify-between gap-3 mb-2">
                <h5 className='font-bold text-md'>{res.name}</h5>
                <div className='badge  mr-2 rounded-full bg-primary-700 text-white'>
                  {res.option}
                </div>

              </div>

            ))}</div>
          <div className='flex flex-row justify-between mt-10 gap-10'>
            <button className='btn btn-primary' onClick={handlePrevItem} disabled={currentIndex === 0}>
              <BsArrowLeft />
            </button>

            <button className='btn btn-primary' onClick={handleNextItem} disabled={currentIndex === totalItems - 1}>
              <BsArrowRight />
            </button>

          </div>
          <div className="flex flex-row justify-center items-center mt-3">
            <button className='text-primary-700 text-sm' onClick={() => deleteVariation('selected.variations', currentIndex, '', undefined)}>[ Retirer ]</button>
          </div>
        </div>
        <div className="border-t-0 border p-4 border-slate-200 w-full">
          <h5 className='text-primary-700  uppercase font-medium mb-5  border-b'>Information du produit</h5>
          <div className="flex flex-row gap-3">

            <div className="content p-3">
              <div className='flex flex-col'>
                <label htmlFor="price" className=' py-1  font-medium'>Prix</label>
                <input
                  id={"price"}
                  name={"price"}
                  value={!_.isUndefined(variations[currentIndex]) && !_.isUndefined(variations[currentIndex]['price_regular']) ? variations[currentIndex]['price_regular'] : ''}
                  placeholder='Prix du produit'
                  className='text-sm  h-10 w-1/2 mb-2  border border-slate-300 items-center rounded-primary  dark:text-white text-slate-600 dark:bg-slate-800 sm:flex'

                  onChange={(e: any) => updateValue({
                    prop: 'price_regular',
                    value: e.target.value * 1.0
                  })}
                />
                <label className='mb-2'><input type="checkbox" checked={promotion} onChange={(e) => setPromotion(e.target.checked)} /> Vous voulez faire une promotion ? </label>
                {promotion == true && (
                  <>

                    <div className='border border-slate-300 bg-slate-50 p-2'>

                      <label htmlFor="date_marge" className='my-2  font-medium'>Marge de date</label>
                      <div className="flex flex-row gap-2">
                        <div className="date_deb">
                          <input
                            type="date"
                            value={!_.isUndefined(variations[currentIndex]) && !_.isUndefined(variations[currentIndex]['promo_start']) ? variations[currentIndex]['promo_start'] :  new Date().toDateString()}
                            onChange={(e: any) => updateValue({
                              prop: 'promo_start',
                              value: e.target.value
                            })}
                            className='text-sm  h-10  border border-slate-300 items-center rounded-primary  dark:text-white text-slate-600 dark:bg-slate-800 sm:flex' />
                        </div>
                        <div className="date_fin">
                          <input
                            type="date"
                            value={!_.isUndefined(variations[currentIndex]) && !_.isUndefined(variations[currentIndex]['promo_end']) ? variations[currentIndex]['promo_end'] : new Date()}
                            onChange={(e: any) => updateValue({
                              prop: 'promo_end',
                              value: e.target.value
                            })} className='text-sm  h-10  border border-slate-300 items-center rounded-primary  dark:text-white text-slate-600 dark:bg-slate-800 sm:flex' />
                        </div>
                      </div>
                      <div className="my-2">
                        <label htmlFor="price_p" className='my-2  font-medium'>Prix promotion</label>
                        <input
                          id={"price_p"}
                          name={"price_p"}
                          value={!_.isUndefined(variations[currentIndex]) && !_.isUndefined(variations[currentIndex]['price_promo']) ? variations[currentIndex]['price_promo'] : ''}
                          placeholder='Prix du produit'
                          className='text-sm  h-10  border border-slate-300 items-center rounded-primary  dark:text-white text-slate-600 dark:bg-slate-800 sm:flex'

                          onChange={(e: any) => updateValue({
                            prop: 'price_promo',
                            value: e.target.value * 1.0
                          })}
                        />

                      </div>
                    </div>

                  </>
                )}
                <div className="flex flex-row mt-2 gap-2">
                  <div className="classe w-1/4">
                    <label htmlFor="date_marge" className='py-1 font-medium'>Classe</label>
                    <select className='select' value={!_.isUndefined(variations[currentIndex]) && !_.isUndefined(variations[currentIndex]['classe_id']) ? variations[currentIndex]['classe_id'] : ''} onChange={(e: any) => updateValue({
                      prop: 'classe_id',
                      value: e.target.value * 1
                    })}>
                      <option value="1">Classe 1</option>
                      <option value="2">Classe 2</option>
                      <option value="3">Classe 3</option>
                    </select>
                  </div>
                  <div className="poids ">
                    <label htmlFor="poids" className='py-1  font-medium'>Poids</label>
                    <input
                      type="text"
                      value={!_.isUndefined(variations[currentIndex]) && !_.isUndefined(variations[currentIndex]['poids']) ? variations[currentIndex]['poids'] : ''}
                      placeholder='Poids'
                      onChange={(e: any) => updateValue({
                        prop: 'poids',
                        value: e.target.value * 1.0
                      })}
                      className='text-sm  w-1/2  h-10  border border-slate-300 items-center rounded-primary  dark:text-white text-slate-600 dark:bg-slate-800 sm:flex' />
                  </div>

                </div>
              </div>
            </div>
            <div className="image w-80">
              <UploadFile
                name={'upload'}
                type={"single"}
                label={'Image'}
                index={1}
                imageData={!_.isUndefined(variations[currentIndex]) && !_.isUndefined(variations[currentIndex]['image']) ? variations[currentIndex]['image'] : ''}
                uploadText={'Ajouter une image'}
                deleteText={'Retirer'}
                changeValue={(v: any) => updateValue({
                  prop: 'image',
                  value: v
                })}
                ref={uploadRef}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Variation = ({ variations, updateVariation, deleteVariation }: any) => {

  return (<HorizontalPagination
    variations={variations}
    updateVariation={updateVariation}
    deleteVariation={deleteVariation}
    totalItems={variations.length}
  />
  )
}
export default Variation;