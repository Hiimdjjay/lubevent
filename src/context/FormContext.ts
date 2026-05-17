import { createContext } from 'react';
import { StepFormData } from '@/validation/multiStepFormSchema';

type FormContextType = {
	currentStep: number;
	formData: any;
	nextStep: () => void;
	prevStep: () => void;
	nextStepSaveData: (data: StepFormData) => void;
};

export const FormContext = createContext<FormContextType | null>(null);
