export interface UploadData extends FormData {
    predictedBreed: string | null;
    confidence: number;
    top: Array<{ breed: string, confidence: number }>
}