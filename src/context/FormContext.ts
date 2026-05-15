import { createContext } from 'react';

type FormContextType = {
	step: number;
	setStep: React.Dispatch<React.SetStateAction<number>>;
};

export const FormContext = createContext<FormContextType | null>(null);
