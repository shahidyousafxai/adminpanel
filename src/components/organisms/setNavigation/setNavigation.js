import React, { useContext } from 'react';
import { panelStateContext } from "../../../App";

const SetNavigation = () => {
    const states = useContext(panelStateContext);

    //open modal for add new navigation link
    const handleModuleItemClick = (head) => {
        states.setModalFor(head);
        states.setOpen(!states.open);
    }

    //open modal for edit navigation link
    const handleEditItem = (id) => {
        states.setModalFor('Edit Navigation Link')
        states.editLinks('hearder')
        states.setEditId(id);
        states.setOpen(!states.open);
        //populate modal with data
        const item = states.navigationLinks.find((item) => item.id === id);
        states.setLinkName(item.name);
        states.setPath(item.path);
    }

    //delete item from from navigationLinks array on click
    const handleDelete = (id) => {
        const newNavigationLinks = states.navigationLinks.filter((item) => item.id !== id);
        const updatedLinks = newNavigationLinks.map((item, index) => {
            return {
                ...item,
                id: index + 1
            }
        })
        states.setNavigationLinks(updatedLinks);
    }



    const Navlinks = states.navigationLinks.map((item) => {

        return (
            <tr className='border-b border-gray-200'>
                <td className="h-10 px-6">
                    <div className="flex items-center">
                        {item.id}
                    </div>
                </td>
                <td className="h-10 px-6 whitespace-no-wrap">
                    <div className="text-sm leading-5 text-gray-900">
                        <p>
                            {item.name}
                        </p>
                    </div>
                </td>
                <td className="h-10 px-6 whitespace-no-wrap">
                    <p>
                        {item.path}
                    </p>
                </td>
                <td className="flex items-center h-10 px-6 gap-5 text-sm font-medium leading-5 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-600 hover:text-green-800 cursor-pointer" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" onClick={() => handleEditItem(item.id)}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-600 hover:text-red-800 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => handleDelete(item.id)}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </td>
            </tr>
        )
    })



    return (
        <div className='flex items-center justify-center'>
            <div className="w-[90%] mt-8 mb-8">
                <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-bold">Add Navigation Link</h3>
                    <button className="px-4 py-2 flex justify-end rounded-md bg-p-light-navy text-white" onClick={() => handleModuleItemClick("Add New Navigation Link")}>Add +</button>
                </div>
                <div className="flex flex-col">
                    <div>
                        <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full border">
                                <thead>
                                    <tr>
                                        <th
                                            className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-light-gray w-[30%]">
                                            ID</th>
                                        <th
                                            className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-light-gray w-[30%]">
                                            Name</th>
                                        <th
                                            className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-light-gray w-[30%]">
                                            Path</th>
                                        {/* <th
                                            className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-light-gray">
                                            Icon</th> */}
                                        <th className="px-6 py-3 text-sm text-left text-gray-500 border-b border-gray-200 bg-light-gray w-[10%]" colSpan="3">
                                            Action</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                    {React.Children.toArray(Navlinks)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SetNavigation