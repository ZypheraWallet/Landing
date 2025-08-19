import HeroSection from '@/components/sections/Hero-section'
import WalletModal from '@/components/props/OpenwalletModel'

export default function HomePage() {
    return (
        <>
            <WalletModal />
            <HeroSection />
        </>
    );
}