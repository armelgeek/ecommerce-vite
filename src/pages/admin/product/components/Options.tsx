import React from 'react'
import _ from 'lodash';
import { useDispatch, useGetter } from '../../../../store';

const Options = ({selected, addOption,deleteOption}:any) => {
  return (
    <>
      {!_.isUndefined(selected.options) && selected.options.length > 0 && (
        <div className='flex flex-row'>
          {selected.options.map((option: any, index: number) => (
            <div key={'option_' + index} className='flex flex-col'>
              <div className="ti">
                {option.name}
                <button onClick={() => {
                  addOption({
                    ...option,
                    name: 'vovo'
                  }, 'selected.options')
                }} className='btn btn-primary btn-xs'
                >update</button>
                <button onClick={() => deleteOption('selected.options', index)} className='btn btn-danger btn-xs'>Retirer</button>
              </div>
              <div className="">
                <button onClick={() => {
                  addOption('Weight', 'selected.options', index, 'values')
                }} className='btn btn-primary btn-xs'
                >add item</button>
                <div className="flex flex-row">
                  {!_.isUndefined(option.values) && option.values.length > 0 && (
                    <>
                      {option.values.map((value: any, indexx: number) => (
                        <div key={'value_key_' + indexx} className='flex flex-row' >
                          {value}
                          <button onClick={() => {
                            addOption('Medart', 'selected.options', index, 'values', indexx);
                          }} className='btn btn-primary btn-xs'
                          >update</button>
                          <button onClick={() => deleteOption('selected.options', index, 'values', indexx)} className='btn btn-danger btn-xs'>Retirer</button>
                        </div>
                      ))}
                    </>

                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <button onClick={() => addOption({
        id: 1,
        name: 'Add Product',
        values: []
      }, 'selected.options')}>Add option</button>
    </>
  )
}
export default Options;