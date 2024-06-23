import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { options, questions, randomDecimals } from '../../constants';
import supabaseClient from '../../supabase/supabaseClient';
import { Button } from '../common/Button/Button';

function SurveyPageLayout() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [progress, setProgress] = useState(7);
  const [optionScores, setOptionScores] = useState(Array(6).fill(0));
  const navigate = useNavigate();

  async function handleOptionClick(optionIndex) {
    const newOptionScores = [...optionScores];
    newOptionScores[optionIndex] += randomDecimals[currentQuestionIndex];
    setOptionScores(newOptionScores);

    setSelectedOption(optionIndex);
    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setProgress(((currentQuestionIndex + 2) / questions.length) * 100);
        setSelectedOption(null);
      }, 300);
    }
  }

  async function handleBackClick() {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setProgress((currentQuestionIndex / questions.length) * 100);
      setSelectedOption(null);
    } else {
      navigate('/');
    }
  }

  async function handleResultClick() {
    const maxScoreIndex = optionScores.indexOf(Math.max(...optionScores));
    const roles = [
      'service_planner',
      'product_manager',
      'product_designer',
      'ui_ux_designer',
      'frontend_developer',
      'backend_developer'
    ];
    const result = roles[maxScoreIndex];

    const { data, error } = await supabaseClient.from('JOB_POSITION').select('counter').eq('type', result);

    if (error) {
      console.error('Error fetching data:', error.message);
      return;
    }

    if (data && data.length > 0) {
      const { counter } = data[0];
      const { error: updateError } = await supabaseClient
        .from('JOB_POSITION')
        .update({ counter: counter + 1 })
        .eq('type', result);

      if (updateError) {
        console.error('Error updating counter:', updateError.message);
      }
    } else {
      console.error('No data found :', result);
    }

    navigate(`/result/${result}`, { state: { result } });
  }

  return (
    <>
      <Header>
        <BackButton onClick={handleBackClick} style={{ fontSize: '16px', color: '#c7c7c7' }}>
          Back
        </BackButton>
        <Counter>
          {currentQuestionIndex + 1} / {questions.length}
        </Counter>
      </Header>
      <ProgressBar>
        <Progress width={progress} />
      </ProgressBar>
      <Question>{questions[currentQuestionIndex]}</Question>
      <Options>
        {options[currentQuestionIndex].map((option, index) => (
          <Button
            variant="choice"
            key={index}
            onClick={() => handleOptionClick(index)}
            selected={selectedOption === index}
          >
            {option}
          </Button>
        ))}
      </Options>
      {currentQuestionIndex === questions.length - 1 && selectedOption !== null && (
        <Button variant="fill" style={{ marginTop: '20px' }} onClick={handleResultClick}>
          결과 보러가기
        </Button>
      )}
    </>
  );
}

export default SurveyPageLayout;

const ProgressBar = styled.div`
  width: 100%;
  height: 12px;
  background-color: #ddd;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 33px;
`;

const Progress = styled.div`
  width: ${(props) => props.width}%;
  height: 100%;
  border-radius: 20px;
  background-color: var(--main-color);
  transition: width 0.5s ease-in-out;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: var(--font-text-size-20);
  cursor: pointer;
`;

const Counter = styled.div`
  font-size: var(--font-text-size-20);
  font-weight: var(--font-weight-semi-bold);
  color: var(--main-color);
`;

const Question = styled.h2`
  font-size: var(--font-subtitle-size);
  font-weight: var(--font-weight-bold);
  color: var(--text-color);
  letter-spacing: -0.4px;
  margin-bottom: 33px;
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

const T24 = styled.p`
  font-size: var(--font-text-size-20);
  font-weight: var(--font-weight-bold);
  color: var(--main-color);
`;

const T36 = styled.p`
  font-size: var(--font-subtitle-size);
  font-weight: var(--font-weight-bold);
  color: #333;
  line-height: 120%;
  letter-spacing: -0.4px;
  margin-bottom: 54px;
`;
