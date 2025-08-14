'use client'

import React from 'react';
import { Wallet, BadgeInfo } from 'lucide-react';
import { useOpenWalletModal } from '@/store/modalStore';
import { useTranslations } from 'next-intl';

import { Button } from '../../ui/button';
import OpenwalletModal from '@/components/props/OpenwalletModel'

const Herobuttons = () => {
    const t = useTranslations('HomePage.Herosection');
    const { open } = useOpenWalletModal();
    return (
        <>
            <div className='flex gap-4 max-lg:flex-col'>
                <Button size={'xl'} onClick={ open }><Wallet />{t('buttons.wallet')}</Button>
                <Button size={'xl'} variant={'outline'}><BadgeInfo />{t('buttons.details')}</Button>
            </div>
            <OpenwalletModal />
        </>

    );
};

export default Herobuttons;