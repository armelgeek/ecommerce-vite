import React, { HTMLProps, useCallback, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'


import {
    Column,
    Table,
    ExpandedState,
    useReactTable,
    getCoreRowModel,
    getPaginationRowModel,
    getFilteredRowModel,
    getExpandedRowModel,
    getSortedRowModel,
    SortingState,
    ColumnDef,
    flexRender,
    PaginationState,

} from '@tanstack/react-table'
import { faker } from '@faker-js/faker'
import { BsChevronDoubleRight, BsPencilFill } from 'react-icons/bs'
import { CgChevronDoubleLeft, CgChevronDoubleRight, CgChevronLeft, CgChevronRight } from 'react-icons/cg'
import { FaEdit, FaInfoCircle, FaPlus, FaPlusCircle, FaTrash, FaTrashAlt } from 'react-icons/fa'
import Page from '../../../components/admin/Page'
import Links from '../../../components/admin/Links'
import ActiveLink from '../../../components/admin/ActiveLink'
import { useDispatch, useGetter } from '../../../store'
import { FaPencil } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { debounce } from 'lodash'

const AdminProducts = () => {
    return (
        <Page>
            <Links title={"Gestions des produits"} description={""}>
                <ActiveLink title={"Gestions des produits"}></ActiveLink>
            </Links>
            <div className="flex flex-row justify-between items-center py-3">
                <div className="title">

                </div>
                <div className="action">
                    <Link to={"/admin/product/add"} className='btn btn-sm text-white bg-primary-500'><FaPlusCircle /> Ajouter un produit</Link>
                </div>
            </div>


        </Page>
    )
}
export default AdminProducts;
