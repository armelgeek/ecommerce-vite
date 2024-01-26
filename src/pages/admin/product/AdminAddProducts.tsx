import React, { useState } from 'react'
import Page from '../../../components/admin/Page';
import Links from '../../../components/admin/Links';
import ActiveLink from '../../../components/admin/ActiveLink';
import Illustration from './components/Illustration';
import ProductOptions from './components/ProductOptions';

const AdminAddProducts = () => {
    const [state, setState] = useState(2);
    return (
        <Page>
            <Links title={"Ajouter un produit"} description={""}>
                <ActiveLink title={"Ajouter un produit"}></ActiveLink>
            </Links>
            <div className="flex flex-row justify-between items-center py-3">
                <div className="tabs tabs-pill w-full">
                    <ul className="tabs-list">
                        <li className="tabs-item">
                            <button className={`tabs-btn ${state == 1 ? 'active' : ''}`} type="button">
                                <span>Géneral</span>
                            </button>
                        </li>
                        <li className="tabs-item">
                            <button className={`tabs-btn ${state == 2 ? 'active' : ''}`} type="button">
                                <span>Options</span>
                            </button>
                        </li>
                        <li className="tabs-item">
                            <button className={`tabs-btn ${state == 3 ? 'active' : ''}`} data-panel-id="#tabs-panel-3" type="button">
                                <span>Expedition</span>
                            </button>
                        </li>
                        <li className="tabs-item">
                            <button className={`tabs-btn ${state == 4 ? 'active' : ''}`} type="button">
                                <span>Produits similaires</span>
                            </button>
                        </li>
                    </ul>
                    <div className="tabs-content  bg-white py-3">
                        {state == 1 && (
                            <>
                                <Illustration />
                                <div className="form-group">
                                    <label className='text-primary-700'>Nom</label>
                                    <input id="name" className="input input-md" placeholder="Nom" name="name" value="" />
                                </div>
                                <div className="form-group">
                                    <label className='text-primary-700'>Déscription</label>
                                    <textarea
                                        id="description"
                                        className="input input-md"
                                        placeholder="Déscription"
                                        rows={10}
                                        name="description"></textarea>
                                </div>

                            </>
                        )}
                        {state == 2 && (
                            <div className='mx-2'>
                                <ProductOptions />
                            </div>

                        )
                        }
                    </div>
                </div>
            </div>


        </Page>
    )
}
export default AdminAddProducts;