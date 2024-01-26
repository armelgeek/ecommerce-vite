import React, { useState } from 'react'
import _ from 'lodash';
import Variation from './Variation';
import Options from './Options';
import { useDispatch, useGetter } from '../../../../store';

const ProductOptions = () => {
    const [state, setState] = useState(0);
    const selected = useGetter('product', 'selected', []);
    console.log('selected', selected);
    const updateAction = useDispatch('product', 'updateAction');
    const deleteAction = useDispatch('product', 'deleteAction');
    return (
        <>
            <div className="flex flex-row gap-2">
                <button
                    className={` btn btn-sm ${state == 0 ? 'bg-primary-800' : 'bg-primary-500'} text-white  `}
                    type="button"
                    onClick={() => setState(0)}
                >
                    <span>Options</span>
                </button>

                <button
                    type="button"
                    disabled={typeof selected.variations == "undefined" || (typeof selected.variations != "undefined" && selected.variations.length == 0)}
                    className={` btn btn-sm ${state == 1 ? 'bg-primary-800' : 'bg-primary-500'} text-white  `}
                    onClick={() => setState(1)}
                >
                    <span>Variations ({!_.isUndefined(selected.variations) ? selected.variations.length : 0})</span>
                </button>
            </div>
            <div className="tabs-content  bg-white py-3">
                {state == 0 ? (
                    <Options
                        selected={selected}
                        addOption={updateAction}
                        deleteOption={deleteAction}
                    />
                ) : <Variation
                    variations={_.isUndefined(selected.variations) ? [] : selected.variations}
                    updateVariation={updateAction}
                    deleteVariation={deleteAction}
                />}
            </div>
        </>
    )
}
export default ProductOptions;