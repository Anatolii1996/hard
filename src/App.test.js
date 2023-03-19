import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import LoginPage from './pages/LoginPage';
import userEvent from '@testing-library/user-event';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import store from "./redux/store"
import Chat from './components/Chat';
import { MemoryRouter } from 'react-router';

describe("Login page", () => {
  test('renders login page', () => {
    render(<MemoryRouter>
      <LoginPage />
    </MemoryRouter>
    );
    const linkElement = screen.getByText(/Login with Google/i);
    const buttonEl = screen.getByRole("button");
    expect(linkElement).toBeInTheDocument();
    expect(buttonEl).toBeInTheDocument();
  });


});
describe("Header", () => {
  test("render header", () => {
    render(<MemoryRouter>
      <Header />
    </MemoryRouter>);
    const logoEl = screen.getByText(/q/i);
    expect(logoEl).toBeInTheDocument();
  })
});
describe("Chat", () => {
  test("render chat", () => {
    render(<MemoryRouter>
      <Chat />
    </MemoryRouter>);
    const logOut = screen.getByText(/log out/i);
    expect(logOut).toBeInTheDocument();
    const chatArea = screen.getByTestId("chat_wrap_test");
    expect(chatArea).toBeInTheDocument();
    const form = screen.getByRole("form");
    expect(form).toBeInTheDocument();
    const sendButton = screen.getByText(/send/i);
    expect(sendButton).toBeInTheDocument();
  });
  // test("отправка сообщения в чат", async () => {
  //   render(<MemoryRouter>
  //     <Chat />
  //   </MemoryRouter>);
  //   const input = screen.getByPlaceholderText("Send a message...");
  //   const form = screen.getByRole("form");
  //   fireEvent.change(input, { target: { value: "New message" } });
  //   const sendButton = screen.getByText(/send/i);
    // fireEvent.submit(form);
    // await screen.findByText("New message");
    // expect(screen.getByText("New message")).toBeInTheDocument();
  // });
  test("router test", () => {
    render(<MemoryRouter>
      <Chat />
    </MemoryRouter>);
    const logOut = screen.getByText(/log out/i);
    fireEvent.click(logOut);
    render(<MemoryRouter>
      <LoginPage />
    </MemoryRouter>);
    expect(screen.getByTestId("login_page")).toBeInTheDocument();
  })
})

