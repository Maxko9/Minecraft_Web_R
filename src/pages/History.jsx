export default function History() {
    const historyMilestones = [
        {
            year: "2009",
            title: "Zrození a prvotní verze (Pre-classic)",
            description: "Markus 'Notch' Persson začal v květnu 2009 vyvíjet hru inspirovanou hrami jako Infiniminer. Hra se zpočátku jmenovala 'Cave Game' a vznikla za pouhých několik dní."
        },
        {
            year: "2010",
            title: "Alpha a Beta fáze",
            description: "Minecraft přechází do fáze Alpha, objevuje se multiplayer, survival režim a hra začíná získávat obrovskou komunitu fanoušků na fórech."
        },
        {
            year: "2011",
            title: "Oficiální vydání (Verze 1.0)",
            description: "V listopadu 2011 proběhlo na akci MineCon v Las Vegas oficiální vydání plné verze hry 1.0. Hra opustila betu a svět si ji zamiloval."
        },
        {
            year: "2012–2013",
            title: "Expanze na konzole a Anvil update",
            description: "Minecraft vyšel na Xbox 360 (květen 2012) a okamžitě lámal prodejní rekordy. V prosinci 2012 vyšel slavný 'Pretty Scary Update' (verze 1.4.2), který přidal čarodějnice, wither bosse a zářící bloky. Svět se začal hemžit velkými modovacími projekty."
        },
        {
            year: "2014",
            title: "Převzetí Microsoftem",
            description: "Společnost Microsoft kupuje studio Mojang a samotnou značku Minecraft za 2,5 miliardy dolarů. Hra se rozšiřuje na konzole a mobilní zařízení."
        },
        {
            year: "2016–2018",
            title: "Combat Update, Bedrock a Aquatic",
            description: "Vychází verze 1.9 (Combat Update) měnící soubojový systém. Jednotná multiplatformní verze (Bedrock Edition) sjednocuje mobilní telefony, konzole a Windows 10. V roce 2018 přichází populární 'Update Aquatic' zaměřený na mořský svět."
        },
        {
            year: "2020-Současnost",
            title: "Nejprodávanější hra na světě",
            description: "Minecraft má stovky milionů aktivních hráčů po celém světě, neustále vycházejí nové aktualizace (Caves & Cliffs, Trails & Tales) a hra žije dál."
        }
    ];

    return (
        <div className="container-history">
            <h1>Historie Minecraftu</h1>
            <p>Cesta od začátků až po aktuální stav:</p>

            {/* Kontejner pro obdélníky pod sebou */}
            <div className="timeline-container">
                {historyMilestones.map((item, index) => (
                    <div className="history-card" key={index}>
                        <span className="history-year">{item.year}</span>
                        <div className="history-content">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}