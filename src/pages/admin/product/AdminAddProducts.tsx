import React from 'react'
import Page from '../../../components/admin/Page';
import Links from '../../../components/admin/Links';
import ActiveLink from '../../../components/admin/ActiveLink';
import Illustration from './components/Illustration';

const AdminAddProducts = () => {
    return (
        <Page>
            <Links title={"Ajouter un produit"} description={""}>
                <ActiveLink title={"Ajouter un produit"}></ActiveLink>
            </Links>
            <div className="flex flex-row justify-between items-center py-3">
                <div className="tabs tabs-pill w-full">
                    <ul className="tabs-list">
                        <li className="tabs-item">
                            <button className="tabs-btn active"  type="button">
                                <span>Géneral</span>
                            </button>
                        </li>
                        <li className="tabs-item">
                            <button className="tabs-btn" data-panel-id="#tabs-panel-2" type="button">
                                <span>Dashboard</span>
                            </button>
                        </li>
                        <li className="tabs-item">
                            <button className="tabs-btn" data-panel-id="#tabs-panel-3" type="button">
                                <span>Settings</span>
                            </button>
                        </li>
                        <li className="tabs-item">
                            <button className="tabs-btn" data-panel-id="#tabs-panel-4" type="button">
                                <span>Contacts</span>
                            </button>
                        </li>
                    </ul>
                    <div className="tabs-content">
                        <Illustration/>
                    </div>
                </div>
            </div>


        </Page>
    )
}
export default AdminAddProducts;