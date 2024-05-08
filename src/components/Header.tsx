import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="max-w-full h-20 flex items-center">
        <div className="container mx-auto flex items-center">
        <div>
            <h1>Ledgers</h1>
        </div>
        <nav className="ml-auto">
            <ul className="flex gap-4">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/add">Add Ledger</Link></li>
            </ul>
        </nav>
        </div>
    </header>
  );
}
