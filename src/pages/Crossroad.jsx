import { Link } from 'react-router-dom';

export default function Crossroads() {
    return (
        <div className="container">
            <h1>Vítejte na brzké verzi Minecraft webu</h1>
            <p>Jsi na hlavní stránce. Vyber si kam chceš pokračovat:</p>

            <div className="card-grid">
                <div className="minecraft-card">
                    <h3>Historie</h3>
                    <p>Zjisti historii Minecraftu od vzniku do aktualni verze.</p>
                    <Link to="/history">Přejít &rarr;</Link>
                </div>
                <div className="minecraft-card">
                    <h3>Skiny</h3>
                    <p>Stáhni si různé skiny do hry.</p>
                    <Link to="/skins">Přejít &rarr;</Link>
                </div>
                <div className="minecraft-card">
                    <h3>Pozadí</h3>
                    <p>Tapety na plochu ve vysokém rozlišení.</p>
                    <Link to="/backgrounds">Přejít &rarr;</Link>
                </div>
            </div>
        </div>
    );
}