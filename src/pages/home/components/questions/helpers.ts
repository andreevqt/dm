import data from '../../../../data';

export const convertQuestions = () =>
  data.Questions.QuestionBlock.map((block) => ({
    // eslint-disable-next-line no-underscore-dangle
    id: block._id,
    title: block.Content.PlainText ? block.Content.PlainText : 'Base64 Encoded Image',
    image: block.Content.RichViewFormatBASE64,
    answers: block.Answers.Answer.map((answer) => ({
      title: answer.Content.PlainText,
      // eslint-disable-next-line no-underscore-dangle
      isCorrect: answer._IsCorrect === 'Yes',
      image: block.Content.RichViewFormatBASE64,
    })),
  }));
