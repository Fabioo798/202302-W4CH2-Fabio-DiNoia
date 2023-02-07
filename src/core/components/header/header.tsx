import logo from "./logo.svg";

type HeaderProps = { children: JSX.Element };

export function Header({ children }: HeaderProps) {
  return (
    <header className="App-header">
      {children}
    </header>
  );
}