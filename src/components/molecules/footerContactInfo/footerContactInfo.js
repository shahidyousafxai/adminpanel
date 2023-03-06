import React from 'react'
import Button from '../../atoms/button/button'

const FooterContactInfo = () => {
    const [contactInfo, setContactInfo] = React.useState('')

    return (
        <div className="flex justify-center">
            <div className="my-5 w-[90%] border-dashed border-2 p-5 rounded-md">
                <label
                    htmlFor="formFile"
                    className="mb-2 flex text-lg font-medium text-gray-900"
                >Set Footer Contact Information</label>
                <div className='flex gap-5'>
                    <input
                        className="relative m-0 inline-block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal outline-none file:-mx-3 file:-my-1.5 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-light-gray file:px-3 file:py-1.5 file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-dark-gray hover:file:text-light-gray"
                        type="text"
                        id="formFile"
                        value={contactInfo}
                        onChange={(e) => setContactInfo(e.target.value)}
                    />
                    <Button value="Upload" styleProps="bg-p-light-navy text-white w-20 py-1.5 rounded-md" />
                </div>
            </div>
        </div>
    )
}

export default FooterContactInfo