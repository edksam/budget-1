import "./App.css";
import MainHeader from "./components/MainHeader";
import { Container } from "semantic-ui-react";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLine from "./components/EntryLine";

function App() {
  return (
    <Container>
      <MainHeader title="Budget Calculator" />
      <DisplayBalance title="Your Balance :" value={2550.53} size="small" />
      <DisplayBalances />

      <MainHeader title="History" type="h3" />

      <EntryLine description="Expenses too much" value="£234.50" isExpense />
      <EntryLine description="Income from salary" value="£3400.65" />
      <EntryLine description="Give me some car" value="£460.89" isExpense />

      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm />
    </Container>
  );
}

export default App;
