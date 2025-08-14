'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { Wallet } from 'lucide-react';

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useOpenWalletModal } from '@/store/modalStore';

export default function LanguageModal() {
    const t = useTranslations('Modal.Openwallet');
    const d = useTranslations('Default');

    const { isOpen, close } = useOpenWalletModal();
    const router = useRouter();
    const locale = useLocale();

    return (
        <Dialog open={isOpen} onOpenChange={(open) => { if (!open) close(); }}>
            <DialogContent className="sm:max-w-[28rem] w-full">
                <DialogHeader>
                    <DialogTitle>{t('title')}</DialogTitle>
                    <DialogDescription>
                        {t('subtitle')}
                    </DialogDescription>
                </DialogHeader>
                <div className='flex flex-col items-center gap-6'>
                    <div>
                        <div className='w-64 h-64 bg-accent animate-pulse rounded-xl'></div>
                        <p className='text-xs mt-2 text-center'>{t('downloadMobile')}</p>
                    </div>
                    <div className='flex items-center justify-center gap-2 w-full'>
                        <div className='w-1/3 border'></div>
                        <p className='text-muted-foreground'>{t('or')}</p>
                        <div className='w-1/3 border'></div>
                    </div>
                    <Button size={'xl'}><Wallet />{t('openWeb')}</Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
