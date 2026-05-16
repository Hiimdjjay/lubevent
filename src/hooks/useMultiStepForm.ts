import { StepFormData } from '@/validation/multiStepFormSchema';
import { useState } from 'react';

export function useMultiStepForm() {
	const [currentStep, setCurrentStep] = useState(0);
	const [formData, setFormData] = useState<Partial<StepFormData>>({});
	const [isSubmitted, setIsSubmitted];
}
