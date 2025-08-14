'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useLanguageModal } from '@/store/modalStore';

const LANGS = [
    { code: 'ru', label: 'Русский' },
    { code: 'uk', label: 'Українська' },
    { code: 'en', label: 'English' },
];

export default function LanguageModal() {
    const t = useTranslations('Modal.Language');
    const d = useTranslations('Default');

    const { isOpen, close } = useLanguageModal();
    const router = useRouter();
    const locale = useLocale();

    const handleSelect = (lang: string) => {
        router.push(`/${lang}`);
        close();
    };

    return (
        <Dialog open={isOpen} onOpenChange={(open) => { if (!open) close(); }}>
            <DialogContent className="sm:max-w-[28rem] w-full">
                <DialogHeader>
                    <DialogTitle>{t('title')}</DialogTitle>
                    <DialogDescription>
                        {t('subtitle')}
                    </DialogDescription>
                </DialogHeader>

                <div className="grid gap-2 mt-4">
                    {LANGS.map(({ code, label }) => {
                        const selected = locale === code;
                        return (
                            <Button
                                key={code}
                                variant={selected ? 'default' : 'outline'}
                                onClick={() => handleSelect(code)}
                                className="justify-start"
                            >
                                <span className="ml-2">{label}</span>
                            </Button>
                        );
                    })}
                </div>

                <DialogFooter className="mt-4">
                    <Button variant="ghost" onClick={close}>{d('buttons.cancel')}</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
