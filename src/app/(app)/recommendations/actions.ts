'use server';

import { recommendHalalVendors, RecommendHalalVendorsInput, RecommendHalalVendorsOutput } from '@/ai/flows/recommend-halal-vendors';

type ActionResult = {
    success: boolean;
    data?: RecommendHalalVendorsOutput | null;
    error?: string | null;
}

export async function getRecommendations(input: RecommendHalalVendorsInput): Promise<ActionResult> {
    try {
        const recommendations = await recommendHalalVendors(input);
        if (!recommendations || recommendations.length === 0) {
            return { success: false, error: 'AI tidak dapat menemukan vendor yang cocok. Coba ubah kriteria Anda.' };
        }
        return { success: true, data: recommendations };
    } catch (error) {
        console.error('Error getting recommendations:', error);
        return { success: false, error: 'Terjadi kesalahan pada server saat memproses permintaan Anda.' };
    }
}
