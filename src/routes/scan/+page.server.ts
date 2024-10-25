import { fail } from '@sveltejs/kit';
import { setFlash } from 'sveltekit-flash-message/server';

const MINIMUM_DELAY_MS = 3000;

export const actions = {
    upload: async({ request, cookies }) => {
        const data = await request.formData();
        const startTime = Date.now();

        try {
            const response = await fetch('http://127.0.0.1:5000/predict', {
                method: 'POST',
                body: data
            });

            if (!response.ok) {
                setFlash({ type: 'error', message: 'An error occured while making request.'}, cookies)
                return fail(400);
            }

            const result = await response.json();  
            const elapsedTime = Date.now() - startTime;

            if (elapsedTime < MINIMUM_DELAY_MS) {
                await new Promise(resolve => setTimeout(resolve, MINIMUM_DELAY_MS - elapsedTime));
            }

            console.log(result);

            setFlash({ type: 'success', message: `Prediction successful.`}, cookies);
            return { success: true, predictedBreed: result['predicted_breed'], confidence: result['confidence'], top: result['top_3'] }
        } catch (error: unknown) {
            setFlash({ type: 'error', message: 'An error occured while processing your request.'}, cookies)
            console.error(error);
            return fail(500);
        }
    }
}