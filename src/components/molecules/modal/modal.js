import React, { Fragment, useRef, useContext, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { panelStateContext } from '../../../App';

const Modal = () => {
  const states = useContext(panelStateContext);
  const cancelButtonRef = useRef(null);

  // add form data to states.navigationLinks array on submit
  const handleSubmit = (e) => {
    e.preventDefault();
    //disable submit button if form is empty
    if (states.linkName === '' || states.path === '') {
      return;
    }

    if (states.editLinks === 'header') {
      if (states.editId) {
        const newNavigationLinks = states.navigationLinks.map((item) => {
          if (item.id === states.editId) {
            return {
              ...item,
              name: states.linkName,
              path: states.path
            }
          } else {
            return item;
          }
        });
        states.setNavigationLinks(newNavigationLinks);
        states.setOpen(false);
        states.setEditId(null);
        return;
      }

      states.setNavigationLinks([...states.navigationLinks, { id: states.navigationLinks.length + 1, name: states.linkName, path: states.path }]);
      states.setOpen(false);
    } else {
      if (states.editId) {
        const newQuickLinks = states.quickLinks.map((item) => {
          if (item.id === states.editId) {
            return {
              ...item,
              name: states.linkName,
              path: states.path
            }
          } else {
            return item;
          }
        });
        states.setQuickLinks(newQuickLinks);
        states.setOpen(false);
        states.setEditId(null);
        return;
      }

      states.setQuickLinks([...states.quickLinks, { id: states.quickLinks.length + 1, name: states.linkName, path: states.path }]);
      states.setOpen(false);
    }
  }


  return (
    <Transition.Root show={states.open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={states.setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left">
                    <div className='flex items-center gap-x-5 bg-p-purple px-4 py-3'>
                      <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-white">
                        {states.modalFor}
                      </Dialog.Title>
                    </div>


                    <div className="mt-2 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <form className="w-full max-w-lg">
                        <div className="flex flex-wrap -mx-3 mb-6">
                          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                              NAME
                            </label>
                            <input className="appearance-none block w-full text-gray-700 border border-gray-200  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" value={states.linkName} onChange={(e) => states.setLinkName(e.target.value)} />
                          </div>
                          <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                              PATH
                            </label>
                            <input className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" value={states.path} onChange={(e) => states.setPath(e.target.value)} />
                          </div>
                        </div>
                        <div className="mb-4 flex items-center gap-5">
                          <button className="px-4 py-2 flex justify-end rounded-md bg-p-light-navy text-white" onClick={(e) => handleSubmit(e)}>Add</button>
                          <button className="px-4 py-2 flex justify-end rounded-md bg-p-red text-white" onClick={() => states.setOpen(false)}>Cancel</button>
                        </div>
                      </form>
                    </div>



                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default Modal;
