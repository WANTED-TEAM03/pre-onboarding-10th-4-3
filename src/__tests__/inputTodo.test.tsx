import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import InputTodo from '../components/InputTodo';
import useDebounce from '../hooks/useDebounce';

const InputTodoProps = {
  setTodos: jest.fn(),
};

jest.mock('../hooks/useDebounce');

describe('InputTodo 컴포넌트 테스트', () => {
  beforeEach(() => {
    render(<InputTodo {...InputTodoProps} />);
  });

  test('첫 렌더링 시 input이 자동으로 포커스됨', () => {
    expect(screen.getByTestId('input-text')).toHaveFocus();
  });

  test('첫 렌더링 시 드롭다운이 사용자에게 보이지 않음', () => {
    expect(screen.queryByTestId('dropdown')).not.toBeInTheDocument();
  });

  test('사용자가 타이핑한 텍스트가 input에 입력됨', () => {
    const inputText = screen.getByTestId('input-text');
    const INPUT = 'lorem';

    userEvent.type(inputText, INPUT);

    expect(inputText).toHaveValue(INPUT);
  });

  test('input 입력 시 입력값으로 디바운싱 실행됨', () => {
    const inputText = screen.getByTestId('input-text');
    const INPUT = 'lorem';

    userEvent.type(inputText, INPUT);

    expect(useDebounce).toHaveBeenCalledWith(INPUT);
  });
});
