import React from 'react'

const SectionHeader = (props) => {
    const {
        header,
        styleProps,
    } = props
    return (
        <div className={`border-b border-md-gray flex justify-center ${styleProps}`}>
            <h1 className='w-[90%] text-h3 font-semibold'>{header}</h1>
        </div>
    )
}

export default SectionHeader