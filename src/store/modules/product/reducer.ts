const initialState = {
    selected: {
        title: 'Tee shirt with optional',
        description: '',
        options: [
            {
                id: 1,
                name: 'weight',
                values: ['250gr', '500gr']
            },
            {
                id: 2,
                name: 'Roast',
                values: ['Medium', 'Dark']
            }
        ],
        variationDefault: {
            name: 'weight',
            values: ['250gr', '500gr']
        },
        variations: [
            {
                attributes: [
                    {
                        name: '',
                        value: ''
                    },
                    {
                        name: ''
                    }
                ]
            }
        ]
    }
}
const mutations = {};
export default { initialState, mutations };
