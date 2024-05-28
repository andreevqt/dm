import {useState} from 'react';

import {Question} from 'components/question';
import {Search} from 'components/search';

import {convertQuestions} from './helpers';

export const Questions = () => {
  const [query, setQuery] = useState('');

  return (
    <>
      <Search
        query={query}
        onChange={(e) => setQuery(e.currentTarget.value)}
        onClear={() => setQuery('')}
        placeholder="Введите вопрос"
      />
      {convertQuestions()
        .filter((question) => question.title.toLowerCase().includes(query.toLowerCase()))
        .map((question) => (
          <Question key={question.id} {...question} />
        ))}
    </>
  );
};
