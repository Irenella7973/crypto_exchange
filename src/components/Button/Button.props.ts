import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonPops extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	appearence?: 'big' | 'small';
}
