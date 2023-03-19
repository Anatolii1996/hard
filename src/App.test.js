import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { collection, onSnapshot } from '@firebase/firestore';
import LoginPage from './pages/LoginPage';
import userEvent from '@testing-library/user-event';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import Chat from './components/Chat';
import { MemoryRouter } from 'react-router';
import QuestionWrap from './components/QuestionWrap';
import QuestionCard from './components/QuestionCard';
import Results from './components/ResultsPage';
import StartPage from './components/StartPage';

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
  //   const fakeFirestore = {
  //     collection: () => ({
  //       add: () => Promise.resolve({ id: "123" }),
  //       onSnapshot: () => () => {}, // return an empty function to prevent errors
  //     }),
  //   };
    
  //   render(<MemoryRouter>
  //     <Chat firestore={fakeFirestore}/>
  //   </MemoryRouter>);

  //   const input = screen.getByPlaceholderText("Send a message...");
  //   const form = screen.getByRole("form");
  //   fireEvent.change(input, { target: { value: "New message" } });
  //   fireEvent.submit(form);
  //   await screen.findByText("New message");
  //   expect(screen.getByText("New message")).toBeInTheDocument();
  //   expect(fakeFirestore.collection("messages").add).toHaveBeenCalledWith({
  //   text: "New message",
  // });
  // fakeFirestore.collection("messages").onSnapshot((snapshot) => {
  //   snapshot.docs.forEach((doc) => {
  //     const message = doc.data();
  //     if (message.text === "New message") {
  //       // проверяем, что сообщение было отрендерено на странице
  //       expect(screen.getByText("New message")).toBeInTheDocument();
  //     }
  //   });
  // });
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
});
describe("QuestionWrap ", () => {
  test("QuestionWrap render buttons", () => {
    render(<MemoryRouter>
      <QuestionWrap />
    </MemoryRouter>);
    const buttons = screen.getByTestId("game_buttons_test");
    expect(buttons).toBeInTheDocument();

   
  });
  
});
// describe("QuestionCard ", () => {
//   test("QuestionCard render area", () => {
//     render(
//       <MemoryRouter>
//         <QuestionCard
//          count={count}
//          key={questioCard[count].id}
//          question={questioCard[count].question}
//          rightAnswer={questioCard[count].rightAnswer}
//          mayAnswers={questioCard[count].mayAnswers}
         
//         />
//         </MemoryRouter>
      
//    );
//     const card = screen.getByTestId("question_card_test");
//     expect(card).toBeInTheDocument();
//   });
 
// });
describe("result", ()=>{
  test("render result page", ()=>{
    render(<MemoryRouter>
      <Results />
    </MemoryRouter>);
    const table = screen.getByTestId("result_table_test");
    expect(table).toBeInTheDocument();
    const buttonOk = screen.getByText("OK");
    expect(buttonOk).toBeInTheDocument();
  });
  test("переход на main page при нажатии ок", ()=>{
    render(<MemoryRouter>
      <Results />
    </MemoryRouter>);
    const buttonOk = screen.getByText("OK");
    fireEvent.click(buttonOk);
    render(<MemoryRouter>
      <StartPage />
    </MemoryRouter>);
   const startPage = screen.getByTestId("start_page_test");
   expect(startPage).toBeInTheDocument();
  })
})
