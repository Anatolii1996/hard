import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import LoginPage from './pages/LoginPage';
import userEvent from '@testing-library/user-event';
import Header from './components/Header';

describe("Login page", () => {
  test('renders login page', () => {
    render(<BrowserRouter>
      <LoginPage />
    </BrowserRouter>
    );
    const linkElement = screen.getByText(/Login with Google/i);
    const buttonEl = screen.getByRole("button");
    expect(linkElement).toBeInTheDocument();
    expect(buttonEl).toBeInTheDocument();
  });
  // test("clickEvent", () => {
  //   render(<BrowserRouter>
  //     <LoginPage />
  //   </BrowserRouter>
  //   );
  //   const buttonEl = screen.getByRole("button");
  //   userEvent.click(buttonEl);
  //   expect(screen.)
  // })
});
describe("Header", ()=>{
  test("render header", ()=>{
    render(<BrowserRouter>
      <Header />
    </BrowserRouter>);
    const logoEl=screen.getByText(/q/i);
    expect(logoEl).toBeInTheDocument();
  })
})

