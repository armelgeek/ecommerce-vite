const getCartesianProduct = (arrays: any) => {
    if (!arrays || !arrays.length) {
        return [];
    }

    return arrays.reduce(
        (acc: any, value: any) =>
            acc
                .map((x: any) => {
                    return value.values.map((y: any) => {
                        return Array.isArray(y) ? x.concat([y]) : x.concat(y);
                    });
                })
                .reduce((acc: any, val: any) => acc.concat(val), []),
        [[]]
    );
};

const getCartesianOptions = (options: any) => {
    const keys = Object.keys(options);

    const cartesianProduct = getCartesianProduct(Object.values(options));
    return cartesianProduct.map((result: any) => {
        return result.reduce((acc: any, value: any, idx: any) => {
            return {
                ...acc,
                [options[idx].name]: value,
            };
        }, {});
    });
};
const getAllValues = (cartesianProps: any) => {
    return cartesianProps.map((element: any, i: number) => {
        const keys = Object.keys(element);
        let array: any = [];
        keys.map((k) => {
            array.push({ id: 0, name: k, option: element[k] });
        });

        return {
            id: Math.random() * keys.length,
            image: null,
            price_regular: 0,
            price_promo: 0,
            promo_start: null,
            promo_end: null,
            poids: "",
            classe_id: 0,
            description: '',
            dimensions: { length: "", width: "", height: "" },
            attributes: array,
        };
    });
};
export const possibilityOptions = (options: any) => {
    const cartesianProps = getCartesianOptions(options);
    return getAllValues(cartesianProps);
};
