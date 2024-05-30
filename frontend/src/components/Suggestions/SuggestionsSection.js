import Suggestion from "./Suggestion";

const SuggestionsSection = () => {
  return (
    <div className="p-5">
        <hr className="mb-5 dark:border-gray-200 border-gray-900"/>
      <div className="mt-2 p-2">
        <h1 className="text-2xl text-gray-900 dark:text-white">İlginizi Çeken Bir Konu Seçin</h1>
      </div>
      <div className="flex justify-center md:justify-start gap-10 mt-2">
        <Suggestion />
        <Suggestion />
      </div>
    </div>
  );
};

export default SuggestionsSection;
