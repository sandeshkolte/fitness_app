import { generateText } from 'ai';

export async function POST(request: Request) {
  try {
    const { foodText } = await request.json();

    if (!foodText || typeof foodText !== 'string') {
      return Response.json(
        { error: 'Invalid food text' },
        { status: 400 }
      );
    }

    const { text } = await generateText({
      model: 'openai/gpt-4o-mini',
      system: `You are a nutrition assistant.

Given a list of foods eaten in a day (Indian home food),
estimate approximate values for:
- Calories (kcal)
- Protein (g)
- Carbohydrates (g)
- Fats (g)
- Fiber (g)

Rules:
- Use realistic average values
- If quantity is missing, assume standard serving
- Respond in JSON only
- No explanations`,
      prompt: foodText,
    });

    const parsed = JSON.parse(text);

    return Response.json({
      calories: Math.round(parsed.calories || 0),
      protein: Math.round(parsed.protein || 0),
      carbohydrates: Math.round(parsed.carbohydrates || 0),
      fats: Math.round(parsed.fats || 0),
      fiber: Math.round(parsed.fiber || 0),
    });
  } catch (error) {
    console.error('Food analysis error:', error);
    return Response.json(
      { error: 'Failed to analyze food' },
      { status: 500 }
    );
  }
}
