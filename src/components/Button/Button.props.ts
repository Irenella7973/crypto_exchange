import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonPops extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	error: boolean;
}
