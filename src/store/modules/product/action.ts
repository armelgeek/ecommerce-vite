export const TYPES = {} as any;
for (const key of Object.keys(TYPES)) {
  TYPES[key] = `product__${key}`;
}
export const updateAction = (option: {
  name: string,
  value: string
}, 
prop: string, 
index: any = undefined, 
childKey: string = '',
valueIndex: any = undefined
) => async (dispatch: any, getState: any) => {

  dispatch({
    type: 'product__add__item_nested_to_prop',
    payload: {
      prop: prop,
      value: option,
      index,
      childKey,
      valueIndex
    }
  })
}
export const deleteAction = (
prop: string, 
optionIndex: any = undefined, 
childKey: string = '',
valueIndex: number = 0
) => async (dispatch: any, getState: any) => {

  dispatch({
    type: 'product__remove__items__nested',
    payload: {
      prop: prop,
      optionIndex,
      valueIndex,
      childKey
    }
  })
}
