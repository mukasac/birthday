// src/app/quizzes/[id]/page.tsx
export default function QuizPage({ params }: { params: { id: string } }) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Quiz #{params.id}</h1>
        {/* Add quiz content */}
      </div>
    );
  }