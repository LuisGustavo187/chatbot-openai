import PromptSuggestionButton from "./PromptSuggestionButton";

const PromptSuggestionRow = ({ onPromptClick }) => {
  const prompts = [
    'Oque é DevOps?',
    'Como a DreamSquad pode me ajudar?',
    'Qual o contato da DreamSquad?',
    'Quais serviços a DreamSquad oferece?',
    'Quais são os principais diferenciais da DreamSquad?',
  ];

  return (
    <div className="flex flex-row flex-wrap justify-start items-center py-4 gap-2">
      {prompts.map((prompt, index) => (
        <PromptSuggestionButton key={`suggestion-${index}`} text={prompt} onClick={() => onPromptClick(prompt)} />
      ))}
    </div>
  );
};

export default PromptSuggestionRow;
