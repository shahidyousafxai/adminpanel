import { useEffect, useState } from 'react';


const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)

        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])

    return (
        <div className="fixed bottom-16 right-16 z-50">
            <button
                type="button"
                onClick={scrollToTop}
                className={`${isVisible ? 'block opacity-100' : 'hidden opacity-0'}
                    bg-black hover:bg-gradient-to-l from-p-tomato to-p-purple inline-flex items-center rounded-xl p-3 text-white shadow-sm transition-opacity`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
                </svg>
            </button>
        </div>
    )
}

export default ScrollToTop