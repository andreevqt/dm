import clsx from 'clsx';

import styles from './question.module.scss';

type QuestionProps = {
  id: string;
  title: string;
  answers: {
    title: string;
    isCorrect: boolean;
  }[];
};

export const Question = ({id, title, answers}: QuestionProps) => (
  <div className={styles.root}>
    <div className={styles.title}>{`${Number(id) + 1}. ${title}`}</div>
    <div className={styles.answers}>
      {answers.map((answer, answerId) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={answerId} className={clsx(styles.answer, answer.isCorrect && styles.isCorrect)}>
          {answer.title}
        </div>
      ))}
    </div>
  </div>
);
