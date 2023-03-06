import React from 'react';
import SetLogo from '../../components/molecules/setLogo/setLogo';
import SetNavigation from '../../components/organisms/setNavigation/setNavigation';
import Modal from '../../components/molecules/modal/modal';
import SectionHeader from '../../components/molecules/sectionHeader/sectionHeader';
import QuickLinks from '../../components/organisms/quickLinks/quickLinks';
import FooterContactInfo from '../../components/molecules/footerContactInfo/footerContactInfo';
import SocialMediaIcons from '../../components/molecules/socialMediaIcons/socialMediaIcons';


const Dashboard = () => {
    return (
        <>
            <section>
                <Modal />
                <SectionHeader header="Header" styleProps="my-10" />
                <SetLogo />
                <SetNavigation />
                <SectionHeader header="Footer" styleProps="my-10" />
                <QuickLinks />
                <FooterContactInfo />
                <SocialMediaIcons />
            </section>
        </>
    )
}

export default Dashboard