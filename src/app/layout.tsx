import { Plus_Jakarta_Sans } from 'next/font/google';
import { ReactNode } from 'react';
import '@/styles/globals.css';

const font = Plus_Jakarta_Sans({ subsets: ['latin'] });

type Props = {
    children: ReactNode;
};

export default function Layout(props: Props) {
    return (
        <html lang='en'>
            <body className={font.className}>
                <main>{props.children}</main>
            </body>
        </html>
    );
}
